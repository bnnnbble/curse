import ChartHandler from "./ChartHandler.js"
window.onload = function(){
  document.cookie = encodeURIComponent("reading_xlsx_data") + '=';
}
let check = false;

let canvas = document.getElementById("canvas");
    canvas.style.display = "none";

const btn = document.getElementById('DrawBtn');
if (btn) {
  btn.addEventListener('click', () => {
    isShow();
  });
}

function isShow() {
  let data = getCookie("reading_xlsx_data")
  let ryValues =[];
  if(data == undefined || data == ""){
    let xyValues = [
      { x: 10, y: 7 },
      { x: 60, y: 8 },
      { x: 70, y: 8 },
      { x: 20, y: 9 },
      { x: 90, y: 9 },
      { x: 100, y: 9 },
    ]
    drawerConfugurator(xyValues);
  }else{
    data = JSON.parse(data);
    let xyValues = []
    for(let key in data){
      xyValues.push({x: Number(data[key])});
      ryValues.push(key);
    }
    drawerConfugurator(xyValues, ryValues);
  }
}

function drawerConfugurator(xyValues, ryValues){
  try {
    canvas.style.display = "";
    canvas.getContext('2d'); 
    check = true;

    let x1 = document.getElementById("x1").value,
      x2 = document.getElementById("x2").value,
      y1 = document.getElementById("y1").value,
      y2 = document.getElementById("y2").value;

    if (document.getElementById("x1").value == "") {
      document.getElementById("x1").value = 100;
    }
    if (document.getElementById("x2").value == "") {
      document.getElementById("x2").value = 10;
    }
    if (document.getElementById("y1").value == "") {
      document.getElementById("y1").value = 100;
    }
    if (document.getElementById("y2").value == "") {
      document.getElementById("y2").value = 100;
    }

    let sel = document.getElementById("sel");

    var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145", "#1e7145", "#1e7145", "#1e7145", "#1e7145", "#1e7145"];
    let chartHandler;
    if (sel.value == 1) {
      chartHandler = new ChartHandler();
      chartHandler.lineChart(x1, x2, y1, y2, xyValues);
    }
    else if (sel.value == 2) {
      chartHandler = new ChartHandler();
      let arr = []
      for(let value in xyValues){
        let a = xyValues[value];
        a = a['x']
        arr.push(Number(a))
      }
      chartHandler.radarChart(arr, ryValues, barColors);
    }
    else if (sel.value == 3) {
      chartHandler = new ChartHandler();
      chartHandler.barChart(x1, x2, y1, y2,barColors);
    }
    else if (sel.value == 4) {
      chartHandler = new ChartHandler();
      chartHandler.scatterChart(x1, x2, y1, y2,barColors);
    }
  } catch(e) {
    check = false;
    alert("Не удалось построить график");
    console.log(e);
  }
}

const scrnshtBtn = document.getElementById('makeScreenshot');
if (scrnshtBtn) {
  scrnshtBtn.addEventListener('click', () => {
    saveImg();
  });
}
function saveImg() {
  if (check === true) {
    let a = document.createElement("a");
    a.download = "screenshot.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  } else {
    alert("Нечего сохранять :(");
  }
}
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}