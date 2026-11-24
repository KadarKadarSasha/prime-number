// For loop
console.log("For loop: ");
outer: for (let i = 2; i < 101; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue outer;
  }
  console.log(i);
}

// Visual line
console.log("               \n               ");

// While loop
let i = 1;
console.log("While loop: ");
outer: while (i < 101) {
  i++;
  let j = 2;
  while (j < i) {
    if (i % j === 0) continue outer;
    j++;
  }
  console.log(i);
}
