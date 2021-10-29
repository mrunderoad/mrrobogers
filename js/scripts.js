function beepBoop(number) {
  const numbers = [1, 2, 3];
  const boops = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  let boopBeep = "";

  for (let i = 0; i < numbers.length; i++) {
    if (number === numbers[i]) {
      boopBeep = boops[i]
      return boopBeep;
    }
  } 
}

