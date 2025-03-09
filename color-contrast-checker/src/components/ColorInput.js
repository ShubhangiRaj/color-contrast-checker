const ColorInput = ({ fgColor, setFgColor, bgColor, setBgColor }) => {
    return (
      <div className="flex gap-4 my-4">
        <div>
          <label className="block text-sm font-medium">Foreground Color</label>
          <input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="w-12 h-12 cursor-pointer"
          />
        </div>
  
        <div>
          <label className="block text-sm font-medium">Background Color</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-12 h-12 cursor-pointer"
          />
        </div>
      </div>
    );
  };
  
  export default ColorInput;
  