import { HexColorPicker } from "react-colorful";
import { useState, useRef, useEffect } from "react";

interface ColorWheelProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorWheel = ({ color, onChange }: ColorWheelProps) => {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* <label>Pick a color here:</label> */}
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "60%",
          background: color,
          border: "2px solid #000000"
        }}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div ref={pickerRef} style={{ position: "absolute", zIndex: 2, top: "60px" }}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorWheel;
