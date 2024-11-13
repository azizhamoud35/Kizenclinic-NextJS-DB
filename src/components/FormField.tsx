interface FormFieldProps {
  label: string;
  required?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function FormField({ 
  label, 
  required, 
  type = "text", 
  className = "",
  value,
  onChange 
}: FormFieldProps) {
  return (
    <div className={`flex items-center space-x-2 mb-1 ${className}`}>
      <label className={`text-xs ${required ? "text-red-500" : ""} w-1/3`}>
        {label}
      </label>
      {type === "select" ? (
        <select 
          className="border p-1 text-xs w-2/3"
          value={value}
          onChange={onChange}
        >
          <option>Select...</option>
        </select>
      ) : type === "checkbox" ? (
        <input 
          type="checkbox" 
          className="ml-2"
          checked={value === "true"}
          onChange={onChange}
        />
      ) : (
        <input 
          type={type} 
          className="border p-1 text-xs w-2/3"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}