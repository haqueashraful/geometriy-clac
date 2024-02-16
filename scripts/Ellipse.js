function Ellipse(first, second, tId) {
  let base = getInputField(first);
  let height = getInputField(second);

  let areaFull = Math.PI * base * height;
  let area = areaFull.toFixed(4);
  setElement("Ellipse area", area, tId);
}
