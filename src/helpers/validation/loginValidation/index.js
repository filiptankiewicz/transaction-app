function validateFieldsLogin() {
  const name = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;
  const error = document.getElementById("loginError");
  const errorEmptyNameMessage = document.getElementById(
    "loginErrorEmptyNameMessage"
  );

  const errorMessages = {
    name: "Pole nazwa użytkownika nie może być puste!",
    password: "Pole hasło nie może być puste!",
  };

  const errorPassword =
    password === "" ? (error.innerHTML = errorMessages.password) : false;
  const errorName =
    name === ""
      ? (errorEmptyNameMessage.innerHTML = errorMessages.name)
      : false;

  const nameNotEmpty = name !== "" && (errorEmptyNameMessage.innerHTML = null);

  const validateRules = errorName || nameNotEmpty || errorPassword;

  if (!validateRules) return true;
}
