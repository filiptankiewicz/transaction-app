function validateFields() {
  const name = document.getElementById("name").value;
  const nameLength = document.getElementById("name").value.length;
  const validNameCharacters = /^[0-9a-zA-Z]+$/;
  const validEmailCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const password = document.getElementById("password").value;
  const passwordLength = document.getElementById("password").value.length;

  const email = document.getElementById("email").value;
  const repeatEmail = document.getElementById("repeatEmail").value;

  const errorNameField = document.getElementById("errorNameField");
  const errorPasswordField = document.getElementById("errorPasswordField");
  const errorEmailField = document.getElementById("errorEmailField");
  const errorRepeatEmailField = document.getElementById(
    "errorRepeatEmailField"
  );

  const errorMessages = {
    name: "Pole nazwa użytkownika nie może być puste!",
    nameLength: "Pole nazwa musi mieć od 6 do 16 znaków!",
    validNameCharacters: "Pole nazwa może zawierać tylko litery i cyfry!",
    password: "Pole hasło nie może być puste!",
    passwordLength: "Pole hasło musi mieć co najmniej 6 znaków!",
    email: "Pole email nie może być puste!",
    repeatEmail: "Pole potwierdź email nie może być puste!",
    validEmailCharacters: "Pole email musi mieć poprawny format!",
    confirmEmail: "Pole Email i Potwierdź email muszą być takie same!",
  };

  const errorSameEmails =
    email !== repeatEmail
      ? (errorRepeatEmailField.innerHTML = errorMessages.confirmEmail)
      : false;
  const errorRepeatEmail =
    repeatEmail == ""
      ? (errorRepeatEmailField.innerHTML = errorMessages.repeatEmail)
      : false;

  const errorEmailCharacters = !email.match(validEmailCharacters)
    ? (errorEmailField.innerHTML = errorMessages.validEmailCharacters)
    : false;

  const errorEmail =
    email == "" ? (errorEmailField.innerHTML = errorMessages.email) : false;
  const errorPasswordLength =
    passwordLength < 6
      ? (errorPasswordField.innerHTML = errorMessages.passwordLength)
      : false;
  const errorPassword =
    password === ""
      ? (errorPasswordField.innerHTML = errorMessages.password)
      : false;

  const errorNameCharacters = !name.match(validNameCharacters)
    ? (errorNameField.innerHTML = errorMessages.validNameCharacters)
    : false;

  const errorNameLength =
    nameLength < 6 || nameLength > 16
      ? (errorNameField.innerHTML = errorMessages.nameLength)
      : false;

  const errorName =
    name === "" ? (errorNameField.innerHTML = errorMessages.name) : false;

  // errors clear

  errorNameLength ||
    (errorNameCharacters == "" && (errorNameField.innerHTML = null));

  errorPassword ||
    (errorPasswordLength == "" && (errorPasswordField.innerHTML = null));

  errorEmail ||
    (errorEmailCharacters == "" && (errorEmailField.innerHTML = null));

  errorRepeatEmail ||
    (errorSameEmails == "" && (errorRepeatEmailField.innerHTML = null));

  const validateRules =
    errorName ||
    errorNameLength ||
    (errorNameCharacters && errorPassword) ||
    errorPasswordLength ||
    errorEmail ||
    errorRepeatEmail ||
    errorEmailCharacters ||
    errorSameEmails;

  if (!validateRules) return true;
}
