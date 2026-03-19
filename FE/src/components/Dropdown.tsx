import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
  fullwidth?: boolean;
}

export function Dropdown({
  options,
  onSelect,
  placeholder = "Select a Type",
  fullwidth
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  function handleSelect(option: Option) {
    setSelected(option);
    onSelect(option.value);
    setIsOpen(false);
  }

  return (
    <div className={`relative ${fullwidth ? "w-full" : "w-54"}`}>
      
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border rounded-md flex justify-between items-center bg-white cursor-pointer m-2"
      >
        {selected ? selected.label : placeholder}
        <span>▼</span>
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-brainly-lightblue cursor-pointer border-b rounded"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}