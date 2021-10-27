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
  return letter + concatIt(response);
}
function reverse(response) {
  return response.split("").reverse().join("");
}
function cipher(response) {
  return reverse(spaghetti(response));
}
// Prompt to get response from user upon opening the page
const response = prompt("Write a sentence:");
$(document).ready(function() {
  // Adds user response from prompt to respective divs
  $(".spyBlue").one("mouseover", function() {
    $(".standardResponse").append(function() {
      return "> " + response;
    });
  });
  $(".spyRed").one("mouseover", function() {
    $(".editedResponse").append(function() {
      return "> " + cipher(response);
    });
  });
  // Shows and hides divs on click
  $(".spyBlue").click(function() {
    $(".unencryptedText").slideToggle();
    $(".encryptedText").slideUp();
  });
  $(".spyRed").click(function() {
    $(".unencryptedText").slideUp();
    $(".encryptedText").slideToggle();
  });
});
