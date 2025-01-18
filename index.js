const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function copyToClipboard(selector) {
    const text = document.querySelector(selector).textContent;
    navigator.clipboard.writeText(text).then(() => {
        showCopyMessage();
    });
}

function showCopyMessage() {
    const copyMessage = document.getElementById('copy-message');
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 3000);
}

function generateRandomString(length = 15) {
    const includeSpecialCharacters = document.getElementById('include-special-characters').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    let availableCharacters = characters.slice(0, 52); // A-Z, a-z

    if (includeNumbers) {
        availableCharacters = availableCharacters.concat(characters.slice(52, 62)); // 0-9
    }
    if (includeSpecialCharacters) {
        availableCharacters = availableCharacters.concat(characters.slice(62)); // Special characters
    }

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        result += availableCharacters[randomIndex];
    }
    return result;
}

function generatePasswords() {
    const length = document.getElementById('password-length').value || 15;
    const passwordElement = document.querySelector('.password.left');
    passwordElement.textContent = generateRandomString(length);
}

window.onload = function() {
    showWelcomeMessage();
};

function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block';
    setTimeout(() => {
        welcomeMessage.style.display = 'none';
    }, 5000);
}


