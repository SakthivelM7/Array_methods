function getNumbers() {
    const numbers = [];
    for (let i = 1; i <= 5; i++) {
        const num = parseInt(document.getElementById(`number${i}`).value);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

function displayResult(result) {
    document.getElementById('result').innerText = JSON.stringify(result);
}

function applyMethod() {
    const method = document.getElementById('methodSelect').value;
    const numbers = getNumbers();
    let result;

    switch (method) {
        case 'filtermethod':
            result = numbers.filter(num => num % 2 === 0);
            break;
        case 'mapmethod':
            result = numbers.map(num => num * 2);
            break;
        case 'sortmethod':
            result = [...numbers].sort((a, b) => a - b);
            break;
        case 'reducemethod':
            result = numbers.reduce((acc, num) => acc + num, 0);
            break;
        case 'reversemethod':
            result = [...numbers].reverse();
            break;
        case 'findmethod':
            const numberToFind = parseInt(prompt("Enter a number to find:"));
            result = numbers.find(num => num === numberToFind);
            displayResult(result !== undefined ? result : "Not Found");
            return;
        case 'includemethod': // corrected to lowercase 'includemethod'
            const numberToCheck = parseInt(prompt("Enter a number to check:"));
            result = numbers.includes(numberToCheck);
            displayResult(result ? "Included" : "Not Included");
            return;
        default:
            result = [];
    }

    displayResult(result);
}
