
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

///VARIABLES AND CODE FOR BAR CHART////
var years;
years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050];
var barcolors = Array(years.length).fill("rgba(54, 162, 235, 0.2)");
barcolors[8] = "rgba(203, 67, 56)";
barcolors[28] = "rgba(203, 67, 56)";

var Cyear;
Cyear = prompt("Enter Commitment Year: ");


while (Cyear >= years[8]){
    console.log("year outside of range, enter year between 2022 and 2029. Assuming 2029");
    Cyear--;
}
while (Cyear < years[0]){
    console.log("year outside of range, enter year between 2022 and 2029. Assuming 2022");
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



// Chart.js v2.9.3 - Bar chart

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
        data: Array(yearlist.length).fill(null),  
        borderColor: "rgba(255, 239, 109, 0.5)",     
                
      }
    ]
  }
});


//link between year labels "X" axis and selector drop down menu
var commitmentYear = {
  Cyear: Cyear
};

// Get the selection dropdown menu for years
var yearSelector = document.getElementById("yearSelector");

    // Loop through the list of years
    for (var i = 1; i < yearlist.length; i++) {
      // Create an option element
      var option = document.createElement("option");
      // Set the text content of the option to the current year
      option.textContent = yearlist[i];
      // Append the option to the selector
      yearSelector.appendChild(option);
    }





    // Get the "Save" button element
var saveButton = document.getElementById("save-button");

// Add an event listener to the button
saveButton.addEventListener("click", function() {
  // Get the value entered in the text box
  var progress = document.getElementById("value-input").value;
  // Split the progress string into an array of numbers
  var progressArray = progress.split(",").map(Number);
// Get the value of the selected year in the drop-down menu
var selectedYear = yearSelector.value;
// Get the index of the selected year in the yearlist array
var yearIndex = yearlist.indexOf(selectedYear);
// Update the "Progress Reported" dataset with the new value at the selected year index
chart.data.datasets[1].data[yearIndex] = progressArray[0];

// Update the chart
chart.update();
});