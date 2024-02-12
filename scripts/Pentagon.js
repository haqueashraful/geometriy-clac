function Pentagon(first, second) {
    let base = getInputFeild(first);
    let height = getInputFeild(second);
  
    let area = 0.5 * base * height;
    setElement("Pentagon area", area);
  }
  