function registrationForm() {
    let Name = document.getElementById('name').value;
    let FatherName = document.getElementById('father_name').value;
    let Contact = document.getElementById('contact').value;
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('password').value;
    let Confirm_Password = document.getElementById('conf_pass').value;
    let Gender = document.querySelector('input[name="gender"]:checked');
    let Location = document.getElementById('location').value;

    // Password strength regex
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (Name === "" || FatherName === "" || Contact === "" || Email === "" || Password === "" || Confirm_Password === "" || !Gender) {
        alert("All fields are mandatory to fill.");
        return false;
    } else if (Contact.length !== 11 || isNaN(Contact)) {
        alert("Contact number should be 11 digits long and numeric.");
        return false;
    } else if (!passwordRegex.test(Password)) {
        alert("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.");
        return false;
    } else if (Password !== Confirm_Password) {
        alert("Passwords do not match.");
        return false;
    } else {
        return true;
    }
}

document.getElementById('showPassword').addEventListener('change', function() {
    let passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});

document.getElementById('showConfirmPassword').addEventListener('change', function() {
    let confirmPasswordField = document.getElementById('conf_pass');
    if (this.checked) {
        confirmPasswordField.type = 'text';
    } else {
        confirmPasswordField.type = 'password';
    }
});
