import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Login = () => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // var falg = flase;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [loginError, setLoginErron] = useState("");
  const handleEmailValidation = () => {
    if (email === "") {
      setErrorEmail("Esse campo é obrigatório");
    } else if (email !== "" && !regex.test(email)) {
      setErrorEmail("O e-mail deve ser válido");
    } else {
      setErrorEmail("");
    }
  };
  const handlePasswordValidation = () => {
    if (password === "") {
      setErrorPassword("Esse campo é obrigatório");
    } else {
      setErrorPassword("");
    }
  };
  const handleSubmit = () => {
    handleEmailValidation();
    handlePasswordValidation();
  };
  return (
    <>
      <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={process.env.PUBLIC_URL + "/kiwify-green-logo.2af0e50.png"}
              alt="Workflows"
              class="mx-auto h-12 w-auto"
            />{" "}
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Entrar na sua conta
            </h2>{" "}
            <p class="mt-2 text-center text-base leading-5 text-gray-600">
              Ou
              <a
                href="/signup?redirect=%2Flogin%C2%A0-"
                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >fazer cadastro
//                 <Link to={"/signup"}>fazer cadastro</Link>
              </a>
            </p>
          </div>{" "}
          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="text"
                    autocomplete="username"
                    name="email"
                    class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorEmail("");
                    }}
                    onBlur={handleEmailValidation}
                  />
                  <div className="text-red-500 text-sm mt-1 error-class ">
                    {errorEmail}
                  </div>
                </div>{" "}
              </div>{" "}
              <div class="mt-6">
                <label
                  for="password"
                  class="block text-sm font-medium leading-5 text-gray-700"
                >
                  Senha
                </label>{" "}
                <div>
                  {" "}
                  <input
                    type="password"
                    autocomplete="current-password"
                    name="password"
                    class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorPassword("");
                    }}
                    onBlur={handlePasswordValidation}
                  />
                </div>
              </div>
              <div className="text-red-500 text-sm mt-1 error-class ">
                {errorPassword}
              </div>
              <div class="mt-2 flex items-center justify-end">
                <div class="text-sm leading-5">
                  <a
                    href="/ResetPassword"
                    class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              {/* <div className="login-error text-red-500">{loginError}</div> */}
              <div class="mt-6">
                <span class="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    {" "}
                    Entrar
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
