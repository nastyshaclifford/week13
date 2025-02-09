function calculateDays() {
    const birthdayInput = document.getElementById('birthday');
    const errorMessage = document.getElementById('errorMessage');
    const result = document.getElementById('result');

    if(birthdayInput.value.trim() === "") {
        errorMessage.style.display = 'block';
        result.textContent = '';
        return;
    }


errorMessage.style.display = 'none';

const today = new Date();
const birthday = new Date(birthdayInput.value);
birthday.setFullYear(today.getFullYear());

if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
}

const timeDifference = birthday - today;
const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 3600 * 24));

let dayWord = 'дней';
const lastDigit = daysUntilBirthday % 10;
const lastTwoDigits = daysUntilBirthday % 100;

if (lastDigit === 1 && lastTwoDigits !== 11) {
    dayWord = 'день';
} else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 10 || lastTwoDigits >= 20)) {
    dayWord = 'дня';
}

result.textContent = `До вашего дня рождения осталось ${daysUntilBirthday} ${dayWord}`;
}
document.getElementById('calculateButton').addEventListener('click', calculateDays);
document.getElementById('birthday').addEventListener('input', function() {
    document.getElementById('errorMessage').style.display = 'none';
});

