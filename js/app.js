function totalMoney(food, rent, clothes) {
    let total = Number(food) + Number(rent) + Number(clothes);
    return total;
}
function totalbalance(cuurentbalance, totalExpens) {
    const totalBalanced = cuurentbalance - totalExpens;
    return totalBalanced
}

function saving(saving, balance) {
    return Number(saving / 100) * Number(balance);
}

// calculate section
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const incomeText = parseInt(incomeField.value);
    const totalExpenses = document.getElementById('toatal-expenses');
    const balance = document.getElementById('balance');
    const food = document.getElementById('food');
    const foodText = food.value;
    const rent = document.getElementById('rent');
    const rentText = rent.value;
    const clothes = document.getElementById('clothes');
    const clothesText = clothes.value;


    if (incomeText < 0 || foodText < 0 || rentText < 0 || clothesText < 0) {
        alert('Please enter the positive value;');
    }
    // else if (incomeField != Number) {
    //     alert('please type numbers');
    // }
    else {
        totalExpenses.innerText = totalMoney(foodText, rentText, clothesText);
    };

    balance.innerText = totalbalance(incomeText, totalExpenses.innerText);

    // clear value
    incomeField.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';
})

// saving section
document.getElementById('save-btn').addEventListener('click', function () {
    const totalAmount = document.getElementById('balance');
    const amount = totalAmount.innerText
    const savePersent = document.getElementById('save');
    const save = savePersent.value;
    const totalSavingInput = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');

    totalSavingInput.innerText = saving(save, amount);
    remainingBalance.innerText = totalbalance(amount, totalSavingInput.innerText);

    // clear value
    save.value = '';
})
