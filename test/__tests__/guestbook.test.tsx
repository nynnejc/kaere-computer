import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Guestbook from "../../pages/guestbook";

jest.mock("../../components/Navbar", () => ({
  __esModule: true,
  default: () => <div>Navbar</div>,
}));

jest.mock("../../components/ColorWheel", () => ({
  __esModule: true,
  default: ({ onChange }: { onChange: (color: string) => void }) => (
    <button type="button" onClick={() => onChange("#FF00AA")}>
      Pick Pink
    </button>
  ),
}));

type MockResponse = {
  ok: boolean;
  json: () => Promise<any>;
};

const createResponse = (data: any, ok = true): MockResponse => ({
  ok,
  json: async () => data,
});

describe("Guestbook page", () => {
  const fetchMock = jest.fn();

  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  it("fetches and renders guestbook entries newest first", async () => {
    fetchMock.mockResolvedValueOnce(
      createResponse({
        body: JSON.stringify({
          entries: [
            {
              id: "1",
              name: "Old",
              message: "Older entry",
              color: "#000000",
              timestamp: "2024-01-01T00:00:00.000Z",
            },
            {
              id: "2",
              name: "New",
              message: "Newer entry",
              color: "#111111",
              timestamp: "2024-02-01T00:00:00.000Z",
            },
          ],
        }),
      })
    );

    render(<Guestbook />);

    const newer = await screen.findByText("Newer entry");
    const older = await screen.findByText("Older entry");
    expect(fetchMock).toHaveBeenCalledTimes(1);

    expect(newer.compareDocumentPosition(older) & Node.DOCUMENT_POSITION_FOLLOWING)
      .toBeTruthy();
  });

  it("shows validation error and blocks submit when color is white", async () => {
    fetchMock.mockResolvedValueOnce(
      createResponse({
        body: JSON.stringify({ entries: [] }),
      })
    );

    render(<Guestbook />);
    await screen.findByText("Leave a message");

    await userEvent.type(screen.getByLabelText("Name:"), "Nynne");
    await userEvent.type(screen.getByLabelText("Message:"), "Hej");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      await screen.findByText(
        "You have to select a color other than white to prove your humanity!"
      )
    ).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("submits a new entry and renders it", async () => {
    fetchMock
      .mockResolvedValueOnce(
        createResponse({
          body: JSON.stringify({ entries: [] }),
        })
      )
      .mockResolvedValueOnce(
        createResponse({
          body: JSON.stringify({
            entry: {
              id: "9",
              name: "Nynne",
              message: "Fresh post",
              url: "https://example.com",
              color: "#FF00AA",
              timestamp: "2024-03-01T00:00:00.000Z",
            },
          }),
        })
      );

    render(<Guestbook />);
    await screen.findByText("Leave a message");

    await userEvent.type(screen.getByLabelText("Name:"), "Nynne");
    await userEvent.type(screen.getByLabelText("Message:"), "Fresh post");
    await userEvent.type(
      screen.getByLabelText("URL (optional):"),
      "https://example.com"
    );
    await userEvent.click(screen.getByRole("button", { name: "Pick Pink" }));
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    expect(fetchMock.mock.calls[1][1]).toMatchObject({
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    expect(fetchMock.mock.calls[1][1]?.body).toBe(
      JSON.stringify({
        name: "Nynne",
        message: "Fresh post",
        url: "https://example.com",
        color: "#FF00AA",
      })
    );

    expect(await screen.findByText("Fresh post")).toBeInTheDocument();
  });
});
