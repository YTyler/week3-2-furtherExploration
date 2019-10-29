var factorial = function(number){
  if (number === 0){
    return 1;
  } else if (number > 0) {
    return (number*factorial(number-1));
  } else {
    console.log("Error: Factorial does not exist")
  }
}

$(document).ready(function(){
  $('#formFactorial').submit(function(event){
    event.preventDefault();
    var number = parseInt($('#inputFactorial').val());
    var result = factorial(number);

    $("#outputFactorial").text('The Factorial of '+number+' is '+result);
  })
  $('#formPalindrome').submit(function(event){
    event.preventDefault();
    var inputArray = $("#sentence").val().split("");
    var reverseArray = $("#sentence").val().split("").reverse();
    var palindrome = true;
    console.log(inputArray);
    console.log(reverseArray);
    for (i = 0; i < inputArray.length; i ++) {
      if (inputArray[i] != reverseArray[i]) {
        palindrome = false;
        return;
      }
    }
    if (palindrome === true) {
      console.log('This is a palindrome');
    } else if (palindrome === false) {
      console.log('This is not a palindrome');
    }
  })
});
