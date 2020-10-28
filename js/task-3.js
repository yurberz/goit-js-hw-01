const ADMIN_PASSWORD = 'jqueryismyjam';
const accessIsAllowed = 'Добро пожаловать!';
const accessDenied = 'Доступ запрещен, неверный пароль!';
const canceledAdmin = 'Отменено пользователем!';
let adminInput = prompt('Введите пароль');
let message;

if (adminInput === ADMIN_PASSWORD) {
  alert((message = accessIsAllowed));
} else if (adminInput === null) {
  alert((message = canceledAdmin));
} else {
  alert(accessDenied);
}
