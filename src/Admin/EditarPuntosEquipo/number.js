var button = document.getElementById('my-button');
var button2 = document.getElementById('my-button2');
var display = document.getElementById('count');
var count = 0;
button.addEventListener('click', function() {
  count--
  display.innerHTML = count; 
});
button2.addEventListener('click', function() {
  count++
  display.innerHTML = count; 
});