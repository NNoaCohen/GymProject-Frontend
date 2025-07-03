import React, { useState } from "react";
import { PersonalDetailsForm } from "../components/PersonalDetailsForm";
import { MembershipSelection } from "../components/MembershipSelection";
import { FaFemale, FaCreditCard } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import "../styles/RegistrationPage.css";
import { memberships } from "models/memberships";
import { useDispatch } from "react-redux";
import { AppDispatch } from "redux/store";
import { addMembershipType, createNewGymnast } from "../redux/thunks/gymnastThunks";
import { PaymentForm } from "components/PaymentForm";

export const RegistrationPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    medicalInsurance: "",
    email: "",
    cell: "",
    membershipType: "",
    membershipPrice: 0,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const nextStep = () => setCurrentStep((step) => Math.min(step + 1, 2));
  const prevStep = () => setCurrentStep((step) => Math.max(step - 1, 0));

  const validateStep = (step: number): boolean => {
    setError(null);
    if (step === 0) {
      if (
        !formData.id.trim() ||
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.birthDate.trim() ||
        !formData.email.trim() ||
        !formData.cell.trim()
      ) {
        setError("Please fill all required personal details.");
        return false;
      }
      // אפשר להוסיף בדיקות נוספות כמו אימייל תקין, תאריך וכו'
    }
    if (step === 1) {
      if (!formData.membershipType) {
        setError("Please select a membership type.");
        return false;
      }
    }
    return true;
  };

  const handleSubmitPersonalDetails = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validateStep(0)) return;
    nextStep();
  };

  const handleSelectMembership = (type: string, price: number) => {
    setFormData((data) => ({
      ...data,
      membershipType: type,
      membershipPrice: price,
    }));

    if (!validateStep(1)) return;
    nextStep();
  };

  const handlePay = async () => {
    setError(null);
    setSuccess(null);
    try {
      await dispatch(createNewGymnast(formData));
      await dispatch(addMembershipType(formData.id, formData.membershipType));

      setSuccess("Payment successful and registration complete!");
    } catch (err: any) {
      setError(err.message || "Error during payment");
    }
  };

  const isStepValid = (step: number): boolean => {
    if (step === 0) {
      return (
        formData.id.trim() !== "" &&
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.birthDate.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.cell.trim() !== ""
      );
    }
    if (step === 1) {
      return formData.membershipType !== "";
    }
    return true;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <form onSubmit={handleSubmitPersonalDetails}>
            <h2>Your Profile</h2>
            <PersonalDetailsForm formData={formData} handleChange={handleChange} />
            <button type="submit" className="next-button" disabled={!isStepValid(0)}>
              Continue
            </button>
          </form>
        );
      case 1:
        return (
          <>
            <h2>Select Membership</h2>
            {memberships.map((m) => (
              <button
                key={m.type}
                className={`membership-button ${formData.membershipType === m.type ? "selected" : ""}`}
                onClick={() => handleSelectMembership(m.type, m.price)}
              >
                {m.label} - ₪{m.price}
              </button>
            ))}
            <button onClick={prevStep} className="back-button">
              Back
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h2>Payment</h2>
            <PaymentForm onSubmit={handlePay} />

          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="registration-wrapper">
      <h1 className="title-header">Create New Account</h1>

      <div className="step-indicator-pretty">
        <div className={`step-item ${currentStep === 0 ? "active" : ""}`}>
          <FaFemale size={28} />
          <div className="step-label">Your Profile</div>
        </div>
        <div className={`step-item ${currentStep === 1 ? "active" : ""}`}>
          <GiWeightLiftingUp size={28} />
          <div className="step-label">Membership</div>
        </div>
        <div className={`step-item ${currentStep === 2 ? "active" : ""}`}>
          <FaCreditCard size={28} />
          <div className="step-label">Payment</div>
        </div>
      </div>

      <div className="registration-box">{renderStepContent()}</div>

      <div className="registration-footer">
        <a href="/login" className="back-link">
          ← Back to Login
        </a>
        {currentStep !== 0 && (
          <button onClick={prevStep} className="next-button">
            Back
          </button>
        )}
      </div>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default RegistrationPage;
