canvas = document.getElementById("hui");
canvas.style.display = "none";
function isEmail() {
  canvas.style.display = "";

  var xyValues = [
    { x: 10, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 8 },
    { x: 20, y: 9 },
    { x: 90, y: 9 },
    { x: 100, y: 9 },
  ];

  let x1 = document.getElementById("x1").value,
    x2 = document.getElementById("x2").value;

  new Chart("hui", {
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
        xAxes: [{ ticks: { min: x1, max: x2 } }],
        yAxes: [{ ticks: { min: 6, max: 16 } }],
      },
    },
  });
}

function scatterChart() {}

function saveImg() {
  let a = document.createElement("a");
  a.download = "111.png";
  a.href = canvas.toDataURL("image/png");
  a.click();
}
