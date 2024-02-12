function Ellipse(first, second) {
    let base = getInputFeild(first);
    let height = getInputFeild(second);
  
    let areaFull = Math.PI * base * height;
    let area = areaFull.toFixed(4);
    setElement("Ellipse area", area);
  }