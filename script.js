let result = document.getElementById('result');

function number(value) {
  result.value += value;
}

function clearScreen() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch(error) {
    result.value = 'Error';
  }
}