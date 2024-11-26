"use client";

import { SelectWithSearch } from "@/registry/default/ui/select-with-search";
import { useState } from "react";

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

export function SelectWithSearchDemo() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Responsive Select with Search</h1>
      <div className="max-w-sm">
        <SelectWithSearch
          options={options}
          placeholder="Select a food"
          value={selectedValue}
          onValueChange={setSelectedValue}
        />
      </div>
      <p className="mt-4">Selected value: {selectedValue}</p>
    </main>
  );
}
