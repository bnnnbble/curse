export default class ChartHandler {
  chart;
  scatterChart = function (xyValues) {
    this.destroyer();
    this.chart = new Chart("canvas", {
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
          xAxes: [
            {
              ticks: {
                min: Number(document.getElementById("x1").value),
                max: Number(document.getElementById("x2").value),
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: Number(document.getElementById("y1").value),
                max: Number(document.getElementById("y2").value),
              },
            },
          ],
        },
      },
    });
  };
  lineChart = function (lxValues, lyValues) {
    this.destroyer();
    this.chart = new Chart("canvas", {
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
          yAxes: [{ ticks: { min: 0, max: 50 } }],
          xAxes: [{ ticks: { min: 0, max: 20 } }],
        },
      },
    });
  };
  radarChart(ryValues, rxValues, barColors, fileName) {
    this.destroyer();
    this.chart = new Chart("canvas", {
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
          text: fileName,
        },
      },
    });
  }
  barChart(bxValues, byValues, barColors, fileName) {
    console.log(bxValues, byValues);
    this.destroyer();
    this.chart = new Chart("canvas", {
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
          text: fileName,
        },
      },
    });
  }
  destroyer() {
    try {
      document.getElementById("graph__window").innerHTML = "";
      document.getElementById("graph__window").innerHTML =
        '<canvas id="canvas"></canvas>';
    } catch (e) {
      console.log(e);
    }
  }
}
