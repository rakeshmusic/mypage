function load(){
  const head = document.querySelector("#heading");
  head.innerText = "hello1";
}

//document.addEventListener('DOMContentLoaded', load);

// function closure(){
//   let x=0;
//   function increment(){
//     x++;
//     console.log(x);
//   }
//   function decrement(){
//     x--;
//     console.log(x);
//   }
//   function Init(){
//     x=0;
//   }
//   return {
//     increment,
//     decrement
//   }
// }

// let y = closure();
// y.increment();
// y.increment();
// y.increment();
// y.decrement();

