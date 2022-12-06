import ChartHandler from "./ChartHandler.js";
window.onload = function () {
  document.cookie = encodeURIComponent("reading_xlsx_data") + "=";
  document.cookie = encodeURIComponent("reading_xlsx_data_xy") + "=";
  document.cookie = encodeURIComponent("fileName") + "=";
};
let check = false;

let canvas = document.getElementById("canvas");
canvas.style.display = "none";

const btn = document.getElementById("DrawBtn");
if (btn) {
  btn.addEventListener("click", () => {
    isShow();
  });
}

function isShow() {
  let data = getCookie("reading_xlsx_data");
  let ryValues = [];
  if (data == undefined || data == "") {
    let xyValues = [
      { x: 10, y: 7 },
      { x: 60, y: 8 },
      { x: 70, y: 8 },
      { x: 20, y: 9 },
      { x: 90, y: 9 },
      { x: 100, y: 9 },
    ];
    drawerConfugurator(xyValues);
  } else {
    drawerConfugurator();
  }
}

function drawerConfugurator(xyValues) {
  try {
    canvas.style.display = "";
    canvas.getContext("2d");
    check = true;

    let sel = document.getElementById("sel");

    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#1e7145",
      "#1e7145",
      "#1e7145",
      "#1e7145",
      "#1e7145",
      "#1e7145",
    ];
    let chartHandler;
    if (sel.value == 1) {
      let data = getCookie("reading_xlsx_data_xy");
      data = JSON.parse(data);
      let lxValues = [];
      let lyValues = [];

      for (let key in data[0]) {
        let d = data[0];
        lxValues.push(d[key]);
        let b = data[1];
        lyValues.push(b[key]);
      }
      chartHandler = new ChartHandler();
      chartHandler.lineChart(lxValues, lyValues);
    } else if (sel.value == 2) {
      let data = getCookie("reading_xlsx_data");
      let ryValues = [];
      data = JSON.parse(data);
      let xyValues = [];
      for (let key in data) {
        xyValues.push({ x: Number(data[key]) });
        ryValues.push(key);
      }

      chartHandler = new ChartHandler();
      let arr = [];
      for (let value in xyValues) {
        let a = xyValues[value];
        a = a["x"];
        arr.push(Number(a));
      }
      chartHandler.radarChart(arr, ryValues, barColors, getCookie("fileName"));
    } else if (sel.value == 3) {
      let data = getCookie("reading_xlsx_data_xy");
      data = JSON.parse(data);
      let lxValues = [];
      let lyValues = [];

      for (let key in data[0]) {
        let d = data[0];
        lxValues.push(d[key]);
        let b = data[1];
        lyValues.push(b[key]);
      }
      chartHandler = new ChartHandler();
      chartHandler.barChart(
        lxValues,
        lyValues,
        barColors,
        getCookie("fileName")
      );
    } else if (sel.value == 4) {
      let data = getCookie("reading_xlsx_data_xy");
      data = JSON.parse(data);
      let xyValues = [];
      for (let key in data[0]) {
        let d = data[0];
        let b = data[1];
        xyValues.push({ x: d[key], y: b[key] });
      }
      chartHandler = new ChartHandler();
      chartHandler.scatterChart(xyValues);
    }
  } catch (e) {
    check = false;
    alert("Не удалось построить график");
    console.log(e);
  }
}

const scrnshtBtn = document.getElementById("makeScreenshot");
if (scrnshtBtn) {
  scrnshtBtn.addEventListener("click", () => {
    saveImg();
  });
}
function saveImg() {
  if (check === true) {
    var canvas = document.getElementById("canvas");
    var dataURL = canvas.toDataURL("image/png");
    var newTab = window.open('about:blank','image from canvas');
    newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
  } else {
    alert("Нечего сохранять :(");
  }
}
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
