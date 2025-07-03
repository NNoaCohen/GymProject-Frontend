import { InputFieldProps } from "models/InputFieldProps";
import React from "react";



export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <label htmlFor={name} style={{ display: "block", marginBottom: 4 }}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: "100%",
          padding: "8px 12px",
          fontSize: 16,
          borderRadius: 4,
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};
