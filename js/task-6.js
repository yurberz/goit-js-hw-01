let total = 0;

while (true) {
  let input = prompt('Ведите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
