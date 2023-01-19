function createPieChart(){
  let ctxPie = document.getElementById("pieChart").getContext("2d");
    let pieChart = new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: ["Wpływy", "Wydatki"],
        datasets: [
          {
            data: [firstChartValue, secondChartValue],
            borderColor: ["#3cba9f", "#ffa500", "#c45850"],
            backgroundColor: [
              "rgb(60,186,159,0.1)",
              "rgb(255,165,0,0.1)",
              "rgb(196,88,80,0.1)",
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }