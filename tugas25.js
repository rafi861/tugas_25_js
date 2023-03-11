function tugas(value) {
  return value >= 10;
  }
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log(angka.sort());
  console.log(angka.reverse());

  var filtered = [2,39,76,50,9,7,41,2,24,1,16].filter(tugas);
  console.log(filtered);
