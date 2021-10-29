function beepBoop(number) {
  let output = new Array();
  for (let i = 0; i <= number; i++) {
    if (i === 13) { 
      output.push("Won't you be my neighbor?");
  } else if (i === 21) {
      output.push("Boop!");
  } else if (i === 32) {
    output.push("Won't you be my neighbor?")
  }
  return beepBoop + output.join("", "") + "";
}