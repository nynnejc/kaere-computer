// components/ColorPicker.tsx

import { useState } from "react";

interface ColorPickerProps {
  onChange: (color: string) => void;
  defaultColor?: string;
}

const ColorPicker = ({ onChange, defaultColor = "#FFFFFF" }: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    onChange(selectedColor); 
  };

  return (
    <div>
      <label htmlFor="color">Pick a color:</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
