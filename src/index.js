(function() {
    
    document.getElementById("root").innerHTML = homeHTML;

    document.getElementById(SELECTORS.SIGN_IN_BUTTON).onclick = () => { 
        linkTo(ROUTES.SIGNIN);  
        document.getElementById("root").innerHTML = homeHTML+loginHTML;

        document.getElementById(SELECTORS.LOGIN_BUTTON).onclick = () => signIn();
     };

    document.getElementById(SELECTORS.SIGN_UP_BUTTON).onclick = () => { 
        linkTo(ROUTES.SIGNUP);
        document.getElementById("root").innerHTML = homeHTML+registrationHTML; 
        document.getElementById(SELECTORS.REGISTER_BUTTON).onclick = () => signUp();
    };

})()
   