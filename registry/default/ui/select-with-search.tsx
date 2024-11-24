"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectGroup {
  label: string;
  options: SelectOption[];
}

interface SelectWithSearchProps {
  options: (SelectOption | SelectGroup)[];
  placeholder?: string;
  value?: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}

export function SelectWithSearch({
  options,
  placeholder = "Select an option",
  value,
  onValueChange,
  disabled = false,
}: SelectWithSearchProps) {
  const [open, setOpen] = React.useState(false);

  const getCurrentLabel = React.useCallback(() => {
    if (!options) return placeholder;
    for (const item of options) {
      if ("options" in item) {
        const option = item.options.find((opt) => opt.value === value);
        if (option) return option.label;
      } else if (item.value === value) {
        return item.label;
      }
    }
    return placeholder;
  }, [options, value, placeholder]);

  const renderOptions = () => {
    if (!options || options.length === 0) {
      return <CommandEmpty>No options available.</CommandEmpty>;
    }

    return options.map((item, index) =>
      "options" in item ? (
        <CommandGroup key={index} heading={item.label}>
          {item.options.map((option) => (
            <CommandItem
              key={option.value}
              onSelect={() => {
                onValueChange(option.value);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === option.value ? "opacity-100" : "opacity-0"
                )}
              />
              {option.label}
            </CommandItem>
          ))}
        </CommandGroup>
      ) : (
        <CommandItem
          key={item.value}
          onSelect={() => {
            onValueChange(item.value);
            setOpen(false);
          }}
        >
          <Check
            className={cn(
              "mr-2 h-4 w-4",
              value === item.value ? "opacity-100" : "opacity-0"
            )}
          />
          {item.label}
        </CommandItem>
      )
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={disabled}
        >
          {getCurrentLabel()}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${placeholder.toLowerCase()}...`}
          />
          {renderOptions()}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
