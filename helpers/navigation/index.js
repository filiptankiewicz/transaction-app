const PAGE = {
  loginPath: "../loginPage/loginPage.html",
  registrationPath: "../registrationPage/registrationPage.html",
  profilePath: "../profilePage/profilePage.html",
  homePath: "../homePage/index.html",
};

function goToLoginPage() {
  window.location.href = PAGE.loginPath;
}
function goToRegistrationPage() {
  window.location.href = PAGE.registrationPath;
}

function goToUserProfilePage() {
  window.location.replace(PAGE.profilePath);
}

function goToHomePage() {
  window.location.reload(PAGE.homePath);
  window.location.replace(PAGE.homePath);
}
