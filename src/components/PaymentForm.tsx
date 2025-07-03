import React from "react";

export interface PaymentFormProps {
  onSubmit: () => Promise<void>; // או סתם () => void אם את לא משתמשת ב־await
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div>
        <label>Card Number:</label>
        <input type="text" placeholder="1234 5678 9012 3456" />
      </div>
      <div>
        <label>Expiration:</label>
        <input type="text" placeholder="MM/YY" />
      </div>
      <div>
        <label>CVV:</label>
        <input type="text" placeholder="123" />
      </div>
      <button type="submit">Pay Now</button>
    </form>
  );
};
