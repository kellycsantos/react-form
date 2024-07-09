import { useState } from "react";
import { useForm } from "react-hook-form";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  function onsubmit(e) {
    console.log("Função A", e);

    // e.preventDefault();
  }

  return (
    <>
      <main>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="user">Username:</label>
          <input
            className={errors.username ? "isInvalid" : ""}
            type="text"
            placeholder="user_name"
            id="user"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && (
            <p role="alert" className="error_text">
              First name is required
            </p>
          )}
          <br />
          <label htmlFor="password">Password:</label>
          <input
            className={errors.user_password ? "isInvalid" : ""}
            type="password"
            placeholder="******"
            id="password"
            {...register("user_password", { required: true })}
          />
          {errors.user_password?.type === "required" && (
            <p role="alert" className="error_text">
              Password is required
            </p>
          )}
          <input
            type="submit"
            value="Login"
            disabled={Object.keys(errors).length > 0}
          />
        </form>
      </main>
    </>
  );
}

export default App;
