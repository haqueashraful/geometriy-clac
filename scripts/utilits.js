function getInputFeild(eID) {
  let baseText = document.getElementById(eID).value;
  let base = parseFloat(baseText);
  return base;
}

function setElement(areaText, area) {
  let listItem = document.createElement("li");
  listItem.textContent = `${areaText}: ${area}`;

  let areaField = document.getElementById("appendchild");
  areaField.appendChild(listItem);

 }
