(function() {
    if(page !== ROUTES.PROFILE)
    {
        document.getElementById(SELECTORS.SIGN_IN_BUTTON).onclick = () => { 
            linkTo(ROUTES.SIGNIN);  
        };

        document.getElementById(SELECTORS.SIGN_UP_BUTTON).onclick = () => { 
            linkTo(ROUTES.SIGNUP);
        };
    }

})()
   