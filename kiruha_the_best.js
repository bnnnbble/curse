let check = false;

canvas = document.getElementById("hui");
canvas.style.display = "none";

function isEmail() {
  try{
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
          xAxes: [{ ticks: { min: Number(x1), max: Number(x2) } }],
          yAxes: [{ ticks: { min: Number(y1), max: Number(y2) } }],
        },
      },
    });
  }catch{
    check = false;
    alert("Не удалось построить график")
  }
}

function scatterChart() {}

function saveImg() {
  if(check === true){
    let a = document.createElement("a");
    a.download = "screenshot.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  }
  else{
    alert("Нечего сохранять :(");
  }
}
