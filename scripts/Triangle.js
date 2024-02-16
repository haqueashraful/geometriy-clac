function triangleArea(first, second, tId) {
  let base = getInputField(first);
  let height = getInputField(second);
  let areaFull = 0.5 * base * height;
  let area = areaFull.toFixed(4);

  setElement("triangel area", area, tId);
}
