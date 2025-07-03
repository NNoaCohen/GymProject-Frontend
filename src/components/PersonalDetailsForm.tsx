import React from "react";
import { InputField } from "./InputField"; // ודאי שהנתיב נכון
import { PersonalDetailsFormProps } from "../models/PersonalDetailsFormProps"; // ודאי שהנתיב נכון

export const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <>
      <InputField
        label="ID"
        name="id"
        placeholder="Enter ID"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <InputField
        label="First Name"
        name="firstName"
        placeholder="Enter first name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <InputField
        label="Last Name"
        name="lastName"
        placeholder="Enter last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <InputField
        label="Birth Date"
        name="birthDate"
        type="date"
        value={formData.birthDate}
        onChange={handleChange}
      />
      <label htmlFor="medicalInsurance" style={{ display: "block", marginTop: 10 }}>
        Medical Insurance
      </label>
      <select
        id="medicalInsurance"
        name="medicalInsurance"
        value={formData.medicalInsurance}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: 8, fontSize: 16 }}
      >
        <option value="">Select insurance</option>
        <option value="Macabbi">Macabbi</option>
        <option value="Meuchedet">Meuchedet</option>
        <option value="Leumit">Leumit</option>
        <option value="Clalit">Clalit</option>
      </select>

      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField
        label="Phone Number"
        name="cell"
        placeholder="Enter phone number"
        value={formData.cell}
        onChange={handleChange}
      />
    </>
  );
};

