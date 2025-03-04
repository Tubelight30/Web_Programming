
function updateTimer() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('timer').innerText = `Time: ${timeString}`;
}

setInterval(updateTimer, 1000);


function clearForm() {
    document.getElementById('testForm').reset();
}


function validateForm(event) {
    event.preventDefault(); 
    let isValid = true;

    
    const name = document.getElementsByName('name')[0];
    if (!name.value) {
        document.getElementById('nameError').innerText = 'Please enter your name!';
        name.focus();
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    
    const zipCode = document.getElementsByName('zipCode')[0];
    if (!zipCode.value || isNaN(zipCode.value) || zipCode.value.length > 5) {
        alert('Invalid Zip Code!');
        zipCode.focus();
        isValid = false;
    }

    
    const phone = document.getElementsByName('phone')[0];
    if (!phone.value || isNaN(phone.value) || phone.value.length !== 10) {
        alert('Invalid Phone Number!');
        phone.focus();
        isValid = false;
    }

    
    const email = document.getElementsByName('email')[0];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailRegex.test(email.value)) {
        alert('Invalid Email!');
        email.focus();
        isValid = false;
    }

    
    const password = document.getElementsByName('password')[0];
    const verifyPassword = document.getElementsByName('verifyPassword')[0];
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (!password.value || !passwordRegex.test(password.value) || password.value !== verifyPassword.value) {
        alert('Invalid Password!');
        password.focus();
        isValid = false;
    }

    
    const panNo = document.getElementsByName('panNo')[0];
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if (panNo.value && !panRegex.test(panNo.value)) {
        alert('Invalid PAN Number!');
        panNo.focus();
        isValid = false;
    }
    if(isValid)printFormContent();

    
}


function printFormContent() {

    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const zipCode = document.getElementById('zipCode').value;
    const country = document.getElementById('country').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verifyPassword').value;
    const panNo = document.getElementById('panNo').value;

    
    const gender = Array.from(document.getElementsByName('gender'))
        .find(radio => radio.checked)?.value || 'Not selected';

    
    const preferences = Array.from(document.getElementsByName('preferences'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value)
        .join(', ') || 'None';

    
    console.log('Form Data:');
    console.log('----------');
    console.log(`Name: ${name}`);
    console.log(`Address: ${address}`);
    console.log(`Zip Code: ${zipCode}`);
    console.log(`Country: ${country}`);
    console.log(`Gender: ${gender}`);
    console.log(`Preferences: ${preferences}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Verify Password: ${verifyPassword}`);
    console.log(`PAN Number: ${panNo}`);
}