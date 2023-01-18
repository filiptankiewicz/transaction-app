function signIn() {
  let validate = validateFields();
  if (validate) {
    let userFromLocalStorage = JSON.parse(localStorage.getItem("allUsersData"))
      ? JSON.parse(localStorage.getItem("allUsersData"))
      : [];

    let userExist =
      userFromLocalStorage.length &&
      JSON.parse(localStorage.getItem("allUsersData")).some(
        (data) =>
          data.name.toLowerCase() ==
            document.getElementById("name").value.toLowerCase() ||
          data.email.toLowerCase() ==
            document.getElementById("name").value.toLowerCase()
      );

    const errorMessages = {
      emailNotExistYet:
        "Podana nazwa lub email jest wolny, załóż konto i dołącz do Nas!",
      invalidPassword: "Nie prawidłowe hasło!",
      userNotExist:
        "Użytkownik o nazwie: " +
        document.getElementById("name").value +
        " jeszcze nie istnieje!",
    };

    const errorEmailNotExistYet = document.getElementById(
      "errorEmptyNameMessage"
    );

    const emptyLocalStorage = localStorage.getItem("allUsersData");

    let ruleOfUserWithNameOrEmail;
    if (!emptyLocalStorage == "" || null) {
      for (let i = 1 && 0; i < userFromLocalStorage.length; i++) {
        if (
          (userFromLocalStorage &&
            userFromLocalStorage.length > 0 &&
            document.getElementById("name").value ==
              userFromLocalStorage[i].name) ||
          document.getElementById("name").value == userFromLocalStorage[i].name
        ) {
          errorEmailNotExistYet.innerHTML = null;
          ruleOfUserWithNameOrEmail = userFromLocalStorage[i].email;
          break;
        } else {
          errorEmailNotExistYet.innerHTML = errorMessages.emailNotExistYet;
        }
      }
    } else {
      errorEmailNotExistYet.innerHTML = errorMessages.emailNotExistYet;
    }

    const ruleOfUser = {
      ruleOfUserWithNameOrEmail: ruleOfUserWithNameOrEmail,
    };

    let userLoginData = {
      name: document.getElementById("name").value,
      email: ruleOfUser.ruleOfUserWithNameOrEmail,
      password: document.getElementById("password").value,
    };

    let userSignedIn = userFromLocalStorage.filter((userData) => {
      return (
        userData.name == userLoginData.name &&
        userData.email == userLoginData.email &&
        userData.password == userLoginData.password
      );
    })[0];

    if (userExist) {
      if (userSignedIn) {
        const error = document.getElementById("error");
        alert("Logowanie zakończone sukcesem!");
        goToUserProfilePage();
        localStorage.setItem("userData_Name", userSignedIn.name);
      } else {
        error.innerHTML = errorMessages.invalidPassword;
      }
    } else {
      error.innerHTML = errorMessages.userNotExist;
    }
  }
}
