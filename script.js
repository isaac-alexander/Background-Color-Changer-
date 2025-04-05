const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
  ];
  
  
  function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random()); //randomIndex = Math.floor(10 * Math.random()) randomIndex = random number from 0 - 9
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()]; // color = darkColorsArr[random number from 0 - 9]
  
    bgHexCodeSpanElement.innerText = color; 
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor;