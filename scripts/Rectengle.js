function RectengleArea(first, second, tId) {
  let base = getInputField(first);
  let height = getInputField(second);

  let areaFull = base * height;
  let area = areaFull.toFixed(4);

  setElement("rectengle area", area, tId);
}
