const SELECTORS = {
  SIGN_IN_BUTTON: 'signInButton',
  SIGN_UP_BUTTON: 'signUpButton',
  SIGN_OUT: 'signOutButton',
  DASHBOARD: 'dashboard',
  PROFILE: 'profileButton',
  LOGIN_BUTTON: "loginButton",
  REGISTER_BUTTON: "registerButton",
  ROOT: 'root',
  USER_NAME: 'userName',
}

const ROUTES = {
  HOME: "",
  SIGNUP: "signup",
  SIGNIN: "signin",
  SIGNOUT: "singout",
  DASHBOARD: "dashboard",
  PROFILE: "profile"
};

function linkTo(route){
  window.location.href = `#/${route}`;
}



function  goToUserProfilePage(){
  linkTo(ROUTES.PROFILE);
  document.getElementById(SELECTORS.ROOT).innerHTML = profileHTML; 

  callToAPI();
  createBarChart();
  createPieChart();
  document.getElementById(SELECTORS.SIGN_OUT).onclick = () => signOut();
  document.getElementById(SELECTORS.USER_NAME).innerHTML = `Hej ${localStorage.getItem("userData_Name")}`;



};

function goToHomePage() {
  window.location.reload(ROUTES.HOME);
  window.location.replace(ROUTES.HOME);
}
