var ctxBar = document.getElementById("barChart").getContext("2d");
    var barChart = new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: ["2022-11-09", "2022-11-10", "2022-11-12"],
        datasets: [
          {
            data: [3000, 2555.55, 4337.25],
            label: "Twoje saldo",
            borderColor: "rgb(62,149,205)",
            backgroundColor: "rgb(62,149,205,0.1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });