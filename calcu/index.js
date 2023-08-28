let num1 = 8
let num2 = 2
  document.getElementById("num1-el").textContent = num1 
  document.getElementById("num2-el").textContent =num2 

 let sumEl = document.getElementById("sum-el")
  function add(){
     sumEl.textContent = "Sum: " + (num1 + num2)
  }
  function sub(){
    sumEl.textContent = "Sum: " + ( num1 - num2 )
  }
  function div(){
  sumEl.textContent = "Sum: " + (num1 / num2)
  }
  function mul(){
   sumEl.textContent = "Sum: " + (num1 * num2)
  }