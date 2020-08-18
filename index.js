let ones = document.getElementById('ones');
let tenth = document.getElementById('tenth');
let hundred = document.getElementById('hundred');
let views = 0;

if (localStorage.length >= 0) {
  for (let index = views, len = localStorage.length; index <= len; index++) {
    let key = localStorage.key(index);
    let value = localStorage.setItem(index, index);
    let val = parseInt(localStorage.getItem(index));
    views++;
    console.log(views);
  }
  hundred.innerHTML = 0;
  tenth.innerText = 0;
  ones.innerText = '';
  ones.innerText = views;
}
