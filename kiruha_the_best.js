let check = false;

canvas = document.getElementById("graphik");
canvas.style.display = "none";

function isShow() {
  try {
    canvas.style.display = "";
    check = true;
    var xyValues = [
      { x: 10, y: 7 },
      { x: 60, y: 8 },
      { x: 70, y: 8 },
      { x: 20, y: 9 },
      { x: 90, y: 9 },
      { x: 100, y: 9 },
    ];

    let x1 = document.getElementById("x1").value,
      x2 = document.getElementById("x2").value,
      y1 = document.getElementById("y1").value,
      y2 = document.getElementById("y2").value;

    if (document.getElementById("x1").value == "") {
      document.getElementById("x1").value = 10;
    }
    if (document.getElementById("x2").value == "") {
      document.getElementById("x2").value = 160;
    }
    if (document.getElementById("y1").value == "") {
      document.getElementById("y1").value = 6;
    }
    if (document.getElementById("y2").value == "") {
      document.getElementById("y2").value = 16;
    }

    let sel = document.getElementById("sel");

    if (sel.value == 1) {
      lineChart(x1, x2, y1, y2, xyValues);
    }

    if (sel.value == 2) {
      radarChart(x1, x2, y1, y2, xyValues);
    }

    if (sel.value == 3) {
      barChart(x1, x2, y1, y2, xyValues);
    }

    if (sel.value == 4) {
      scatterChart(x1, x2, y1, y2, xyValues);
    }
  } catch {
    check = false;
    alert("Не удалось построить график");
  }
}

console.log(sel.value);

function scatterChart(x1, x2, y1, y2, xyValues) {
  new Chart("graphik", {
    type: "scatter",
    data: {
      datasets: [
        {
          pointRadius: 3,
          pointBackgroundColor: "white",
          data: xyValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [{ ticks: { min: Number(x1), max: Number(x2) } }],
        yAxes: [{ ticks: { min: Number(y1), max: Number(y2) } }],
      },
    },
  });
}

function lineChart(lxValues, lyValues) {
  var lxValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  var lyValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

  new Chart("graphik", {
    type: "line",
    data: {
      labels: lxValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: lyValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  });
}

var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

function radarChart(rxValues, ryValues, barColors) {
  var rxValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var ryValues = [55, 49, 44, 24, 15];
  var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

  new Chart("graphik", {
    type: "pie",
    data: {
      labels: rxValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: ryValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018",
      },
    },
  });
}

function barChart(bxValues, byValues, barColors) {
  var bxValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  var byValues = [55, 49, 44, 24, 15];
  var barColors = ["red", "green", "blue", "orange", "brown"];

  new Chart("graphik", {
    type: "bar",
    data: {
      labels: bxValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: byValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "World Wine Production 2018",
      },
    },
  });
}

// function lineChart() {
//   const labels = Utils.months({ count: 7 });
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "My First Dataset",
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };
// }

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
