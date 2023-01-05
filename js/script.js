// Movimiento cursor

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});


// Chart.js v2.9.3

var ctx = document.getElementById("myChart");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050"],
    datasets: [
      {
        type: "bar",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        label: "expected progress",
        data: [0.00, 3.45, 6.90, 10.34, 13.79, 17.24, 20.69, 24.14, 30.69, 34.14, 37.59, 41.04, 44.48, 47.93, 51.38, 54.83, 58.28, 61.72, 65.17, 68.62, 72.07, 75.52, 78.97, 82.41, 85.86, 89.31, 92.76, 96.21, 100.00]
      },
      {
        fill: true,
        type: "line",  
        label: "progress reported",
        borderColor: "rgba(255, 0, 0, 0.8)",   
        data: [0.00, 1.12, 2.00, 2.90, 3.75, 4.65, 5.50, 6.40, 7.28, 8.15, 9.00, 9.90, 10.75, 11.65, 12.53, 13.40, 14.30, 15.20, 16.00, 16.95, 17.80, 18.70, 19.60, 20.44, 21.34, 22.20, 23.00, 23.95, 24.8],          
      }
    ]
  }
});


