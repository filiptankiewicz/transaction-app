function validateFieldsLogin() {

  const selectors = {
    name: document.getElementById("loginName").value,
    password: document.getElementById("loginPassword").value,
    error: document.getElementById("loginError"),
    errorEmptyNameMessage: document.getElementById("loginErrorEmptyNameMessage")
  }

  const errorMessages = {
    name: "Pole nazwa użytkownika nie może być puste!",
    password: "Pole hasło nie może być puste!",
  };

  const errorName = selectors.name === "" ? (selectors.errorEmptyNameMessage.innerHTML = errorMessages.name) : false;

  const nameNotEmpty = selectors.name !== "" && (selectors.errorEmptyNameMessage.innerHTML = null);

  const errorPassword = selectors.password === "" ? (selectors.error.innerHTML = errorMessages.password) : false;

  const validateRules = errorName || nameNotEmpty || errorPassword;

  return !validateRules;
}
