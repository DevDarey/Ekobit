let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }
1  //Using a for loop, console.log all of the numbers in the primeNumbers array.
  function getPrimeNumber(){
      let numbers = nestedData.innerData.numberData.primeNumbers
      for(number of numbers){
          console.log(number)
      }
  }
2 //Using a for loop, console.log all of the even Fibonnaci numbers.
function getFibonnaci(){
    let fibs = nestedData.innerData.numberData.fibonnaci
    for(fib of fibs){
        console.log(fib)
    }
}
3 //Console.log the value "second" inside the order array.
let orders = nestedData.innerData.order[1]
console.log(orders)
4//Invoke the addSnack function and add the snack "chocolate"
nestedData.innerData.addSnack("Chocolate")
5//Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

