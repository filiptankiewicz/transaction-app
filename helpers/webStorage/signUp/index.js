function signUp(data) {
  let validate = validateFields();

  if (validate) {
    let allUsersData = JSON.parse(localStorage.getItem("allUsersData")) || [];
    let userExist =
      allUsersData.length &&
      JSON.parse(localStorage.getItem("allUsersData")).some(
        (data) =>
          data.name.toLowerCase() ==
            document.getElementById("name").value.toLowerCase() ||
          data.email.toLowerCase() ==
            document.getElementById("email").value.toLowerCase()
      );
    if (!userExist) {
      document.getElementById("error");

      allUsersData = [
        {
          name: document.getElementById("name").value,
          password: document.getElementById("password").value,
          email: document.getElementById("email").value,
          repeatEmail: document.getElementById("repeatEmail").value,
        },
        ...allUsersData,
      ];
      localStorage.setItem("allUsersData", JSON.stringify(allUsersData));
      let userSignedIn = allUsersData.filter((userData) => {
        return userData.name == allUsersData[0].name;
      })[0];

      localStorage.setItem("userData_Name", userSignedIn.name);
      goToUserProfilePage();
      document.getElementById("name").focus();
      document.getElementById("email").focus();
    } else {
      error.innerHTML = "Konto o takiej nazwie lub emailu juz istnieje!";
    }
    data.preventDefault();
  }
}
