const credits = 23580;
const pricePerDroid = 3000;
const canceledUser = 'Отменено пользователем!';
const accessDenied = 'Недостаточно средств на счету!';
let orderDroid = prompt('Какое количество дронов Вы хотите купить?');
let message;
let totalPrice = pricePerDroid * orderDroid;
let creditsBalance = credits - totalPrice;

if (orderDroid === null) {
  console.log((message = canceledUser));
} else if (creditsBalance >= 0) {
  console.log(
    (message = `Вы купили ${orderDroid} дроидов, на счету осталось ${creditsBalance} кредитов.`),
  );
} else {
  console.log((message = accessDenied));
}
