import React, { useState } from "react";

const useLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (value !== "") {
      setLogin({ ...login, [name]: value });
      setError({ ...error, [name]: "" });
    } else {
      setLogin({ ...login, [name]: "" });
      setError({ ...error, [name]: "Required" });
    }
  };

  const onBlur = () => {
    if (!login.email) {
      setError({ ...error, email: "Required" });
    }
  };

  const validateForm = () => {
    if (!login.password && !login.email) {
      setError({
        email: "Email is required",
        password: "Password is required",
      });
    } else if (!login.password && login.email) {
      setError({
        password: "Password is required",
      });
    } else if (login.password && !login.email) {
      setError({
        email: "Email is required",
      });
    } else {
      console.log(login);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateForm();
  };

  return { handleChange, handleSubmit, login, error, onBlur };
};

const LoginForm = () => {
  const { handleChange, handleSubmit, login, error, onBlur } = useLogin();

  return (
    <form className="text-left w-50 needs-validation" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          className="form-control"
          value={login.email}
          onChange={handleChange}
          name="email"
          onBlur={onBlur}
        />
        {error.email ? (
          <small className="text-danger" style={{ fontSize: "0.8rem" }}>
            {error.email}
          </small>
        ) : null}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          value={login.password}
          onChange={handleChange}
          name="password"
        />
        {error.password ? (
          <small className="text-danger" style={{ fontSize: "0.8rem" }}>
            {error.password}
          </small>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
