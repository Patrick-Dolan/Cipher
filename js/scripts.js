function capitalFirstAndLast(response) {
  const firstLetter = response.charAt(0);
  const lastLetter = response.charAt(response.length - 1);
  const firstAndLast = firstLetter + lastLetter;
  return result = firstAndLast.toUpperCase();
}
const response = prompt("Write a sentence:");
alert(response);

alert(capitalFirstAndLast(response));

