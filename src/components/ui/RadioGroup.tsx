import { cn } from '@/lib/utils';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  label: string;
  options: RadioOption[];
  error?: string;
  required?: boolean;
}

export function RadioGroup({ name, label, options, error, required }: RadioGroupProps): JSX.Element {
  return (
    <fieldset className="space-y-2">
      <legend className="block text-sm font-medium text-steel-700">
        {label}
        {required && <span className="text-barn-500 ml-1">*</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition-colors',
              'bg-white border border-steel-300 hover:border-steel-400',
              'has-[:checked]:border-barn-500 has-[:checked]:bg-barn-50'
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              className="sr-only"
              required={required}
            />
            <span className="text-sm text-steel-700">{opt.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-sm text-barn-600">{error}</p>}
    </fieldset>
  );
}
