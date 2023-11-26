function segi3asterik(n: number) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let asterisks = '* '.repeat(i);
    console.log(spaces + asterisks);
  }
}

// Contoh penggunaan dengan tinggi 5
segi3asterik(5);
