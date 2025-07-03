import React from "react";
import { useNavigate } from "react-router-dom";

export const ClubsPage = () => {
  const navigate = useNavigate();

  const plans = [
    { key: "Monthly_Standard", label: "Monthly Standard - 300", price: 300 },
    { key: "Monthly_Pro", label: "Monthly Pro - 500", price: 500 },
    { key: "Yearly_Standard", label: "Yearly Standard - 3000", price: 3000 },
    { key: "Yearly_Pro", label: "Yearly Pro - 4500", price: 4500 },
  ];

  const handleSelectPlan = (planKey: string, price: number) => {
    navigate("/registration", { state: { planKey, price } });
  };

  return (
    <div>
      <h1>Choose Your Subscription Plan</h1>
      {plans.map((plan) => (
        <button
          key={plan.key}
          onClick={() => handleSelectPlan(plan.key, plan.price)}
          style={{ margin: 8, padding: 12 }}
        >
          {plan.label}
        </button>
      ))}
    </div>
  );
};
