function signIn() {

  const selectors = {
    loginName: document.getElementById("loginName"),
    password: document.getElementById("loginPassword"),
    loginError: document.getElementById("loginError"),
    errorEmailNotExistYet: document.getElementById("loginErrorEmptyNameMessage")
  }

  const localStorageSelectors = {
    allUserData: "allUsersData",
    userDataName: "userData_Name",
  }


  const errorMessages = {
    emailNotExistYet: "Podana nazwa lub email jest wolny, załóż konto i dołącz do Nas!",
    invalidPassword: "Nie prawidłowe hasło!",
    userNotExist: `Użytkownik o nazwie: ${selectors.loginName.value} jeszcze nie istnieje!`,
  };

  const validate = validateFieldsLogin();

  if (validate) {

    const allUserData = localStorage.getItem(localStorageSelectors.allUserData);
    const userParse = JSON.parse(allUserData);

    const userFromLocalStorage = userParse ? userParse  : [];

    const condition = (data) => data.name.toLowerCase() === selectors.loginName.value.toLowerCase() || data.email.toLowerCase() === selectors.loginName.value.toLowerCase();
   
    const userExist = userFromLocalStorage.length && userParse.some(condition);

    const errorEmailNotExistYet = selectors.errorEmailNotExistYet;

    const emptyLocalStorage = allUserData;

    let ruleOfUserWithNameOrEmail;
    if (!emptyLocalStorage == "" || null) {
      for (let i = 1 && 0; i < userFromLocalStorage.length; i++) {
        if (
          (userFromLocalStorage &&
            userFromLocalStorage.length > 0 &&
            selectors.loginName.value ==
              userFromLocalStorage[i].name) ||
              selectors.loginName.value == userFromLocalStorage[i].name
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

    const userLoginData = {
      name: selectors.loginName.value,
      email: ruleOfUser.ruleOfUserWithNameOrEmail,
      password: selectors.password.value,
    };


    const findUsers = (userData) => (
        userData.name == userLoginData.name &&
        userData.email == userLoginData.email &&
        userData.password == userLoginData.password
    );
    
    const userSignedIn = userFromLocalStorage.filter(findUsers)[0];

    const error = selectors.loginError;

    if (userExist) {
      if (userSignedIn) {
        alert("Logowanie zakończone sukcesem!");
        
        goToUserProfilePage();

        localStorage.setItem(localStorageSelectors.userDataName, userSignedIn.name);
      } else {
        error.innerHTML = errorMessages.invalidPassword;
      }
    } else {
      error.innerHTML = errorMessages.userNotExist;
    }
  }
}