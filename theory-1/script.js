const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++){
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}
// Результат:
// Bad: undefined
// Bad: undefined
// Bad: undefined
// Bad: undefined

//Решение №1: с помощью замыкания
for (var i = 0; i < arr.length; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(arr[index] > 13 ? `Good: ${arr[index]}` : `Bad: ${arr[index]}`);
    }, 3000);
  })(i);
}

//Решение №2: с помощью замены var на let
for (let i = 0; i < arr.length; i++){
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
  }, 3000);
}