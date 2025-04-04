for (let i = 0; i < 5; i++) {
  let printStar = "*    ";
  for (let j = 0; j < i; j++) {
    printStar += "*    ";
  }
  console.log(printStar);
}

for (let i = 1; i <= 5; i++) {
  let printStar = "*    ".repeat(i);
  console.log(printStar);
}




