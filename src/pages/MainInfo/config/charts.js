export const chartData1 = [0, 230, 150, 700, 850, 700, 750];
export const chartData2 = [0, 230, 150, 700, 850, 700, 500];
export const chartBig = [
  0,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  890,
  1000,
  850,
  830,
  820,
  800,
  850,
  870,
  890,
  900,
  1000,
  1100,
  800,
  810,
  820,
  830,
  840,
  850,
  870,
  880,
  1000,
];

let startValue = 10000;
let chartFollowersBig = [];

for (let index = 0; index < 180; index++) {
  startValue = startValue + 1000;
  chartFollowersBig.push(startValue);
};

const formatDate = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  if (dd < 10) { dd = '0' + dd }
  if (mm < 10) { mm = '0' + mm }
  date = dd + '/' + mm;
  return date
};

export const LastDays = (numberOfDays) => {
  var result = [];
  for (var i = 0; i < numberOfDays; i++) {
    var date = new Date();
    date.setDate(date.getDate() - i);
    result.push(formatDate(date))
  }

  return (result.reverse());
};

const dataFormatter = (value) => {
  let val = Math.abs(value)
  if (val >= 1000) {
    val = (val / 1000).toFixed(0) + ' K'
  };

  if (val >= 1000000) {
    val = (val / 1000000).toFixed(0) + ' M'
  }
  return val
}

export const chartOptions = (theme, sevenDays) => ({
  options: {
    tooltip: {
      theme: theme.palette.mode,
    },
    chart: {
      background: 'none',
      height: 380,
      type: "line",
      foreColor: '#6D6D6D',
      parentHeightOffset: '100%',
      sparkline: {
        enabled: true
      },
    },
    colors: [chartData1[chartData1.length - 2] > chartData1[chartData1.length - 1] ? theme.palette.graph.fall : theme.palette.graph.main],
    fill: {
      type: 'solid',
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
    },
    xaxis: {
      categories: sevenDays
    },
    yaxis: {
      labels: {
        formatter: (value) => dataFormatter(value),
        offsetX: -5
      }
    }
  },
  series: [
    {
      name: "Score",
      data: chartData1
    }
  ],
});


export const chartOptionsFall = (theme, sevenDays) => ({
  options: {
    tooltip: {
      theme: theme.palette.mode,
    },
    chart: {
      background: 'none',
      height: 380,
      type: "line",
      foreColor: '#6D6D6D',
      parentHeightOffset: '100%',
      sparkline: {
        enabled: true
      },
    },
    colors: [chartData2[chartData2.length - 2] > chartData2[chartData2.length - 1] ? theme.palette.graph.fall : theme.palette.graph.main],
    fill: {
      type: 'solid',
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
    },
    xaxis: {
      categories: sevenDays
    },
    yaxis: {
      labels: {
        formatter: (value) => dataFormatter(value),
        offsetX: -5
      }
    }
  },
  series: [
    {
      name: "Score",
      data: chartData2
    }
  ],
});



export const chartBigOptions = (theme, halfYear) => ({
  options: {
    tooltip: {
      theme: theme.palette.mode,
    },
    chart: {
      background: 'none',
      height: 380,
      type: "line",
      foreColor: '#6D6D6D',
      parentHeightOffset: '100%',
    },
    colors: [chartBig[chartBig.length - 2] > chartBig[chartBig.length - 1] ? theme.palette.graph.fall : theme.palette.graph.main],
    fill: {
      type: 'solid',
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
    },
    xaxis: {
      categories: halfYear
    },
    yaxis: {
      labels: {
        formatter: (value) => dataFormatter(value),
        offsetX: -5
      }
    }
  },
  series: [
    {
      name: "Score",
      data: chartBig
    }
  ],
});


export const chartBigFollowersOptions = (theme, halfYear) => ({
  options: {
    tooltip: {
      theme: theme.palette.mode,
    },
    chart: {
      background: 'none',
      height: 380,
      type: "line",
      foreColor: '#6D6D6D',
      parentHeightOffset: '100%',
    },
    colors: [chartFollowersBig[chartFollowersBig.length - 2] > chartFollowersBig[chartFollowersBig.length - 1] ? theme.palette.graph.fall : theme.palette.graph.main],
    fill: {
      type: 'solid',
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      position: 'back',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        },
        labels: {
          show: false,
          align: 'right'
        }
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
    },
    xaxis: {
      categories: halfYear
    },
    yaxis: {
      labels: {
        formatter: (value) => dataFormatter(value),
        offsetX: -5
      }
    }
  },
  series: [
    {
      name: "Score",
      data: chartFollowersBig
    }
  ],
});