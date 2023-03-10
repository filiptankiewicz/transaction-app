const loginHTML = `<div><div class="buttonsContainer">
<button class="button btn" id="signInButton">
  <p class="titleOfButton">Logowanie</p>
</button>
<button class="button btn" id="signUpButton">
  <p class="titleOfButton">Rejestracja</p>
</button>
</div></div><div class="formContainer">
<form class="loginForm" role="form" autocomplete="off">
  <div class="inputsContainer">
    <div class="labelContainer">
      <label class="label" for="name">Nazwa użytkownika</label>
      <input
        type="text"
        id="loginName"
        placeholder="Nazwa użytkownika / Email.."
        name="name"
      />
    </div>
    <p id="loginErrorEmptyNameMessage"></p>
    <div class="labelContainer">
      <label class="label" for="password">Hasło:</label>

      <input
        type="password"
        id="loginPassword"
        placeholder="Hasło.."
        name="password"
      />
    </div>
    <p id="loginError"></p>
    <button type="button" class="button btn" id="loginButton">
      <p class="titleOfButton">Zaloguj</p>
    </button>
  </div>
</form>
</div>`;
