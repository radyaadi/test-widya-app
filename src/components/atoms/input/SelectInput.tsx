import { forwardRef, useState } from "react";

interface SelectInputProps {
  label: string;
  id: string;
  register: any;
  defaultValue?: string;
  options: SelectOptionProps[];
}

interface SelectOptionProps {
  item: string;
  value: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  function SelectInput(
    { label, id, options, register, defaultValue }: SelectInputProps,
    ref,
  ) {
    const [selectedOption, setSelectedOption] = useState<string>(
      defaultValue || "",
    );

    const handleSelectChange = (
      event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
      console.log(event.target.value);

      setSelectedOption(event.target.value);
    };

    return (
      <div>
        <label className="text-sm font-medium capitalize leading-6 text-gray-900">
          {label}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <select
            ref={ref}
            id={id}
            name={id}
            defaultValue={selectedOption}
            {...register(id)}
            className="h-full w-full rounded-md border-0 bg-transparent p-2 text-sm text-gray-900 ring-1 ring-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.item}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  },
);

export default SelectInput;
