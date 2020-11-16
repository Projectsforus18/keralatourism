let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let passwordd = document.getElementById("passwordd}");

function email_validate(email) {
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if (regMail.test(email) == false) {
        document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
    } else {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>";
    }
}

function phonenumber(phone) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneno.test(phone)) {


        return true;
    } else {
        alert("Not a valid Phone Number");
        return false;
    }
}



function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    //Display status.
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;



}

function CheckPasswordStrengthh(passwordd) {
    var password_strengthh = document.getElementById("password_strengthh");

    //TextBox left blank.
    if (passwordd.length == 0) {
        password_strengthh.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(passwordd)) {
            passed++;
        }
    }





    //Validate for length of Password.
    if (passed > 2 && passwordd.length >= 8) {
        passed++;
    }


    //Display status.
    var color = "";
    var strengthh = "";
    switch (passed) {
        case 0:
        case 1:
            strengthh = "Weak";
            color = "red";
            break;
        case 2:
            strengthh = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strengthh = "Strong";
            color = "green";
            break;
        case 5:
            strengthh = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strengthh.innerHTML = strengthh;
    password_strengthh.style.color = color;
}