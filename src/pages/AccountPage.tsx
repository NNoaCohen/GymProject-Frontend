import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchGymnastById } from "../redux/thunks/gymnastThunks";
import { useNavigate } from "react-router-dom";
import "../styles/AccountPage.css";

export const AccountPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [localError, setLocalError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { data: gymnast, loading, error } = useSelector(
    (state: RootState) => state.gymnast
  );

  useEffect(() => {
    if (!isSubmitted) return;

    // case 1: gymnast not found (null)
    if (gymnast === null) {
      setLocalError(
        `ID not found in the system. Please <a href="/clubs">register here</a>.`
      );
      setIsSubmitted(false);
      return;
    }

    // case 2: gymnast found, email doesn't match
    if (gymnast.email.toLowerCase() !== email.toLowerCase()) {
      setLocalError("The email does not match the registered one.");
      setIsSubmitted(false);
      return;
    }

    // case 3: success
    navigate("/personal-area");
    setIsSubmitted(false);
  }, [isSubmitted, gymnast, email, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError("");

    if (!id || !email) {
      setLocalError("Please fill in all fields.");
      return;
    }

    dispatch(fetchGymnastById(id));
    setIsSubmitted(true);
  };

  return (
    <div className="account-page">
      <div className="card">
        <div className="left-side"></div>
        <div className="right-side">
          <h1>Sign In</h1>
          <p className="signup-text">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

{localError && (
  <p className="error-message">
    {localError.includes("register") ? (
      <>
        ID not found in the system. Please{" "}
        <a href="/clubs" className="register-link">register here</a>.
      </>
    ) : (
      localError
    )}
  </p>
)}

{!localError && error && (
  <p className="error-message">{error}</p>
)}


            <button type="submit" className="btn login-btn" disabled={loading}>
              {loading ? "Loading..." : "Start trading"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
