// const food = document.getAnimations('food').value;
// const rent = document.getElementById('rent').value;
// const clothes = document.getElementById('clothes').value;

function totalMoney(food, rent, clothes) {
    let total = Number(food) + Number(rent) + Number(clothes);
    return total;
}
function totalbalance(cuurentbalance, totalExpens) {
    const totalBalanced = cuurentbalance - totalExpens;
    return totalBalanced
}

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

    totalExpenses.innerText = totalMoney(foodText, rentText, clothesText);
    balance.innerText = totalbalance(incomeText, totalExpenses.innerText);

    incomeField.value = '';
    food.value = '';
    rent.value = '';
    clothes.value = '';






    // function textBalance() {
    //     const food = document.getAnimations('food').value;
    //     const rent = document.getElementById('rent').value;
    //     const clothes = document.getElementById('clothes').value;
    //     const totalExpenses = document.getElementById('toatal-expenses').innerText;
    //     let totalField = food + rent + clothes;
    //     totalExpenses.innerText = totalField.value;
    // }

})