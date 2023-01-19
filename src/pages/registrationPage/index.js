const registrationHTML = `<div class="formContainer">
  <form
    class="loginForm"
    id="form"
    role="form"
    onsubmit="return false"
    autocomplete="off"
  >
    <div class="inputsContainer">
      <div class="labelContainer">
        <label class="label" for="name">Nazwa użytkownika</label>
        <input
          type="text"
          id="name"
          placeholder="Nazwa użytkownika.."
          name="name"
        />
      </div>
      <p id="errorNameField"></p>
      <div class="labelContainer">
        <label class="label" for="password">Hasło</label>
        <input
          type="password"
          id="password"
          placeholder="Hasło.."
          name="password"
        />
      </div>
      <p id="errorPasswordField"></p>
      <div class="labelContainer">
        <label class="label" for="email">Email</label>
        <input type="text" id="email" placeholder="Email.." name="email" />
      </div>
      <p id="errorEmailField"></p>
      <div class="labelContainer">
        <label class="label" for="repeatEmail">Potwierdź email</label>
        <input
          type="text"
          id="repeatEmail"
          placeholder="Potwierdź email.."
          name="repeatEmail"
        />
      </div>
      <p id="errorRepeatEmailField"></p>
      <p id="error"></p>
      <button type="button" class="button btn" id="registerButton">
        <p class="titleOfButton">Zarejestruj</p>
      </button>
    </div>
  </form>
</div>`;