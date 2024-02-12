function Rhombus(first, second) {
  let base = getInputFeild(first);
  let height = getInputFeild(second);

  let area = 0.5 * base * height;
  setElement("rhombus area", area);
}
