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

let page = null;

const renderSignIn = () => {
 
  document.getElementById("root").innerHTML = homeHTML+loginHTML;
  document.getElementById(SELECTORS.LOGIN_BUTTON).onclick = () => signIn(); 
  page = ROUTES.SIGNIN;
}

const renderSignUp = () => {
  
  document.getElementById("root").innerHTML = homeHTML+registrationHTML; 
  document.getElementById(SELECTORS.REGISTER_BUTTON).onclick = () => signUp();
  page = ROUTES.SIGNUP;
}

const renderProfile = () => {

  document.getElementById(SELECTORS.ROOT).innerHTML = profileHTML; 
  callToAPI();
  createBarChart();
  createPieChart();
  document.getElementById(SELECTORS.SIGN_OUT).onclick = () => signOut();
  document.getElementById(SELECTORS.USER_NAME).innerHTML = `Hej ${localStorage.getItem("userData_Name")}`;
  page = ROUTES.PROFILE;

}

const currentFullUrlLocation = window.location.href;
 const currentPage = currentFullUrlLocation.split('#/')[1]

 document.getElementById("root").innerHTML = homeHTML;

 switch(currentPage)
 {
    case ROUTES.SIGNIN:
      renderSignIn();
    break;
    
    case ROUTES.SIGNUP:
      renderSignUp();
    break;

    case ROUTES.PROFILE:
      renderProfile();
    break;
 }

function linkTo(route){
  window.location.href = `#/${route}`;
  window.location.reload();
}

function  goToUserProfilePage(){
  linkTo(ROUTES.PROFILE);
};

function goToHomePage() {
  window.location.reload(ROUTES.HOME);
  window.location.replace(ROUTES.HOME);
}
