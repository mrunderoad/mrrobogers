function beepBoop(number) {
  let output = [];
  for (let i = 0; i <= number; i++) {
    if (i === 13 || i === 23) { 
      output.push('Won\'t you be my neighbor?');
    } else if (i === 21 || i === 12) {
        output.push("Boop!");
    } else if (i === 32) {
        output.push('Won\'t you be my neighbor?');
    } else if (i.toString().includes("1")) {
        output.push('Beep!'); 
    } else if (i.toString().includes("2")) {
        output.push('Boop!');
    } else if (i.toString().includes("3")) {
      output.push('Won\'t you be my neighbor?');
    } else {
      output.push(i);
    }
}
  return ' ' + output.join(', ',', ') + ' ';

}



$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let phrase = $("#person1").val();
    $("#output").text(beepBoop(phrase));
    $("#output").show();
  });
});