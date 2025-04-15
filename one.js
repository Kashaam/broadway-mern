function n() {
  for (var i = 1; i <= 5; i++) {
    function r(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    r(i);
  }
}
n();
