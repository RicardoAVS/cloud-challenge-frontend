let ones = document.getElementById('ones');
let tenth = document.getElementById('tenth');
let hundred = document.getElementById('hundred');
let sum = 0;

if (localStorage.length >= 0) {
  for (let index = sum, len = localStorage.length; index <= len; index++) {
    let key = localStorage.key(index);
    let value = localStorage.setItem(index, index);
    let val = parseInt(localStorage.getItem(index));
    sum++;
    console.log(sum);
  }
  hundred.innerHTML = 0;
  tenth.innerText = 0;
  ones.innerText = '';
  ones.innerText = sum;
}
