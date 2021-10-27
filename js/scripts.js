function capitalFirstAndLast(response) {
  const firstLetter = response.charAt(0);
  const lastLetter = response.charAt(response.length - 1);
  const firstAndLast = firstLetter + lastLetter;
  return result = firstAndLast.toUpperCase();
}
function capitalFirstAndLastSwap(response) {
  const firstLetter = response.charAt(0);
  const lastLetter = response.charAt(response.length - 1);
  const firstAndLast = lastLetter + firstLetter;
  return result = firstAndLast.toUpperCase();
}
function concatIt(response){
  return response + capitalFirstAndLast(response);
}
function spaghetti(response) {
  const number = Math.floor((response.length - 1) / 2);
  const letter = response.charAt(number);
  //return console.log(number);
  return letter + concatIt(response);
}
function reverse(response) {
  return response.split("").reverse().join("");
}
function cipher(response) {
  return reverse(spaghetti(response));
}
const response = prompt("Write a sentence:");
$(document).ready(function() {
  $(".spywhite").click(function() {
    $(".standardResponse").append(function() {
      return response + " ";
    });
  });
  $(".spyblack").click(function() {
    $(".editedResponse").append(function() {
      return cipher(response);
    });
  });
});
