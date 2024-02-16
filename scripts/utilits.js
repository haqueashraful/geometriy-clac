function getInputField(eID) {
  let baseText = document.getElementById(eID).value;
  let base = parseFloat(baseText);
  return base;
}


function setElement(areaText, area, tId) {
  let uniqueKey = `${areaText}_${Date.now()}`;
  let listItem = document.createElement("li");
  listItem.textContent = `${areaText}: ${area}`;
  let totalAreaElement = document.getElementById(tId);
  let totalArea = parseFloat(totalAreaElement.innerText);
  totalArea = parseFloat(area);
  totalAreaElement.innerText = totalArea;
  let areaField = document.getElementById("appendchild");
  areaField.appendChild(listItem);

  localStorage.setItem(uniqueKey, area);
}

function getElement() {
  let areaField = document.getElementById("appendchild");

  areaField.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    let [areaText, uniqueIdentifier] = key.split("_");
    let area = localStorage.getItem(key);
    let listItem = document.createElement("li");
    listItem.textContent = `${areaText}: ${area}`;

    areaField.appendChild(listItem);
  }
}
