import { SelectWithSearch } from "@/registry/default/ui/select-with-search";
import React from "react";

const options = [
  {
    label: "Fruits",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
  { value: "other", label: "Other" },
];

export const SelectWithSearchDemo: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  return (
    <SelectWithSearch
      options={options}
      placeholder="Select a food"
      value={selectedValue}
      onValueChange={setSelectedValue}
    />
  );
};
