let number = 40;
let output = beepBoop(number);

function beepBoop(number) {
  let output = [];
  for (let i = 0; i <= number; i++) {
    if (i === 13) { 
      output.push('Won\'t you be my neighbor?');
  } else if (i === 21) {
      output.push("Boop!");
  } else if (i === 32) {
      output.push('Won\'t you be my neighbor?');
  } else if (i.toString().charAt(0) === "1") {
      output.push('Beep!'); 
  } else if (i.toString().charAt(0) === "2") {
      output.push('Boop!');
  } else if (i.toString().charAt(0) === "3") {
    output.push('Won\'t you be my neighbor?');
  } else {
    output.push(i);
  }
}
  return '' + output.join('','') + '';

}