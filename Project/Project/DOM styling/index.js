function DOMFn (str) {
  const elem = document.createElement("p")
  if (str.includes("SYS:")) {
    elem.className = "sys"
    elem.textContent = str.replace("SYS:", "")
  } else if (str.includes("PAR:")) {
    elem.className = "par"
    elem.textContent = str.replace("PAR:", "")
  } else if (str.includes("ACT:")) {
    elem.className = "act"
    elem.textContent = str.replace("ACT:", "")    
  } else {
    elem.className = "user"
    elem.textContent = str 
  }
  return elem;
}