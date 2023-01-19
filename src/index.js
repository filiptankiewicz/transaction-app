(function() {
    
    const ROUTES = {
        SIGNUP: "signup",
        SIGNIN: "signin",
        SIGNOUT: "singout",
        DASHBOARD: "dashboard",
        PROFILE: "profile"
    };

    const SELECTORS = {
        SIGN_IN_BUTTON: 'signInButton',
        SIGN_UP_BUTTON: 'signUpButton',
        SIGN_OUT: 'signOutButton',
        DASHBOARD: 'dashboard',
        PROFILE: 'profileButton',
        LOGIN_BUTTON: "loginButton",
        REGISTER_BUTTON: "registerButton",
    }

    function linkTo(route){
        window.location.href = `#/${route}`;
    }


    document.getElementById(SELECTORS.SIGN_IN_BUTTON).onclick = () => linkTo(ROUTES.SIGNIN);
    document.getElementById(SELECTORS.SIGN_UP_BUTTON).onclick = () => linkTo(ROUTES.SIGNUP);
    //  document.getElementById(SELECTORS.SIGN_OUT).onclick = () => linkTo(ROUTES.SIGNOUT);
    //  document.getElementById(SELECTORS.PROFILE).onclick = () => linkTo(ROUTES.PROFILE);
    //  document.getElementById(SELECTORS.DASHBOARD).onclick = () => linkTo(ROUTES.DASHBOARD);
    //  document.getElementById(SELECTORS.DASHBOARD).onclick = () => linkTo(ROUTES.DASHBOARD);

    // need function
     document.getElementById(SELECTORS.LOGIN_BUTTON).onclick = () => signIn();

     document.getElementById(SELECTORS.REGISTER_BUTTON).onclick = () => signUp();


})()
   