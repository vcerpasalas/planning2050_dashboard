
// Cursor dinámico
let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("fa-times");
    header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
};

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


// Data for Bar chart 
var years;
years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050];
barcolors = [
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",         
    "rgba(203, 67, 56)",
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)", 
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(203, 67, 56)" 
]

// Form asking Commitment year
var Cyear;

Cyear = prompt("Enter Commitment Year: ");
  while (Cyear >= years[8]){   // Year outside of range, enter year between 2022 and 2029
    Cyear--;
}
  while (Cyear < years[0]){   // Year outside of range, enter year between 2022 and 2029
    Cyear++;
}
function Yrsto2050(){
    return 2050 - Cyear;
}
function DivFactorBars(){
   return 1 / (Yrsto2050(Cyear));
}
function CYIndexLoc(){
   return years.findIndex(index => index >= Cyear);
}

var yearlist = years.slice(CYIndexLoc(Cyear));
  listBars = [];
  i=0;
    while (i <= 2050-Cyear) {
        value = i*DivFactorBars(Cyear)*100;
        listBars.push(value);
        i++;
  }


// Strategy Buttons
const strategyButtons = document.querySelectorAll(".strategy-button");

  strategyButtons.forEach(button => {
    button.addEventListener("click", function() {
      console.log(`${button.textContent} was clicked!`);
    });
  });


// Drawing Chart.js v2.9.3 - Bar chart
var ctx = document.getElementById("myChart");
var chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: yearlist,
    datasets: [
      {
        type: "bar",
        label: "Expected Progress",
        data: listBars,
        backgroundColor: barcolors.slice(CYIndexLoc(Cyear)),
        borderColor: "rgba(54, 162, 235, 1)",        
        borderWidth: 1,        
        
      },
      {
        fill: true,
        type: "line",  
        label: "Progress Reported",
        data: [0.00, 13, 30, 35, 25, 40],  
        borderColor: "rgba(255, 239, 109, 0.5)",       
                
      }
    ]
  }
});

