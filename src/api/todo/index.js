function makeTodo(score, n = 1) {
  const r = Math.floor(Math.random() * 400);

  const s = 200,
    m = 300,
    d = 400;

  if (r > d) {
    return div();
  }

  if (r > m) {
    return mul();
  }

  if (r > s) {
    return sub();
  }

  return add();
  /**
   * a = 1
   * s = 2
   * m = 3
   * d = 4
   */
}

export default makeTodo;
