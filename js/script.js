// ho provato a fare tutto con una variabile sola, 
// e poi una piccola condizione per giocare un pochino :)

let oneString = prompt('What is your name?');
console.log(oneString);

oneString += prompt('What is your last name?');
console.log(oneString);

oneString += prompt('What is your fav color?');
console.log(oneString);

let answer = prompt('Do you want a cool pwd? y/n');

let htmlElement = document.getElementById('pass');

if (answer == 'y'){
  htmlElement.innerHTML = `Your cool pwd is: ${oneString}21 !!!`;
}
else if (answer == 'n') {
  htmlElement.innerHTML = `Then have a secure one: $rTj7#975P`
}
else {
  htmlElement.innerHTML = `Error 303: invalid answer. Reload and follow instructions !`
}