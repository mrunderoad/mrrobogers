function oneBeep(number) {
  const beep = "Beep!"
  return beep;
}

function twoBoop(number) {
  const boop = "Boop!"
  return boop;
}

function mrRobogers(number) {
  if (number === 1) {
    return oneBeep(number);
  } else if (number === 2) {
    return twoBoop(number);
  }
}