import React from "react";
import { useNavigate } from "react-router-dom";
import { PersonalDetailsFormProps } from "../models/PersonalDetailsFormProps"; // אם כבר השתמשת בזה

export type MembershipSelectionProps = Pick<
  PersonalDetailsFormProps["formData"],
  "membershipType" | "membershipPrice"
> & {
  onProceedToPayment: () => void; 
};

export const MembershipSelection: React.FC<MembershipSelectionProps> = ({
  membershipType,
  membershipPrice,
}) => {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/paymentForm", {
      state: { membershipType, membershipPrice },
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Selected Membership</h3>
      <p>
        <strong>Type:</strong> {membershipType}
      </p>
      <p>
        <strong>Price:</strong> ₪{membershipPrice}
      </p>

      <button
        onClick={handleProceedToPayment}
        style={{
          marginTop: 16,
          padding: "10px 15px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Continue to Payment
      </button>
    </div>
  );
};
