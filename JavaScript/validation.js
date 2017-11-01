hideAll();

function validation() {
    var name = document.getElementById('name');
    var email = document.getElementById("email");
    var password = document.getElementById("password").value;
    var gender = getRadioVal(document.getElementById("myForm"), "gender");
    var city = document.getElementById("city").value;
    var isValid = true;
    hideAll();

    //Checking whether name is valid
    if(name.value == null || name.value == "") {
        isValid = false;
        showNameError();

    }

    //Checking whether email is valid
    if(!verifyEmail(email.value)) {
        isValid = false;
        showEmailError();

    }

    /*Checking whether the data on the form is valid. If anything is not valid
    we return false else we return true.
    */
    if(isValid == true) {
        return true;
    }
    else {
        return false;
    }
}

function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

function verifyEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function hideAll() {
    hideNameError();
    hideEmailError();
}

function hideNameError() {
    var nameError = document.getElementById("nameError");
    nameError.hidden = true;
}

function showNameError() {
    var nameError = document.getElementById("nameError");
    nameError.hidden = false;
}

function hideEmailError() {
    var emailError = document.getElementById("emailError");
    emailError.hidden = true;
}

function showEmailError() {
    var emailError = document.getElementById("emailError");
    emailError.hidden = false;
}