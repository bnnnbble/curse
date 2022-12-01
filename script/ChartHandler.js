export default class ChartHandler{
    chart
    scatterChart = function(x1, x2, y1, y2, xyValues) {
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
              xAxes: [{ ticks: { min: Number(x1), max: Number(x2) } }],
              yAxes: [{ ticks: { min: Number(y1), max: Number(y2) } }],
            },
          },
        });
    }
    lineChart= function(lxValues, lyValues) {
        var lxValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
        var lyValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
        this.destroyer()
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
              yAxes: [{ ticks: { min: 6, max: 16 } }],
            },
          },
        });
      }
    radarChart(rxValues, ryValues, barColors) {
        var rxValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        var ryValues = [55, 49, 44, 24, 15];
        var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
        this.destroyer()
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
              text: "World Wide Wine Production 2018",
            },
          },
        });
    }
    barChart(bxValues, byValues, barColors) {
        var bxValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        var byValues = [55, 49, 44, 24, 15];
        var barColors = ["red", "green", "blue", "orange", "brown"];
        this.destroyer()
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
              text: "World Wine Production 2018",
            },
          },
        });
    }
    destroyer(){
        try{
            document.getElementById("graph__window").innerHTML = ''
            document.getElementById("graph__window").innerHTML = '<canvas id="canvas"></canvas>'
        }catch(e){
            console.log(e)
        }
    }
}
