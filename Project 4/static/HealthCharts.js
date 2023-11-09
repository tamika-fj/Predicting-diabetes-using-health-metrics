//Initialise the page 
function init() {

  //Build the default plots 
  BuildgaugeChartBP();
  BuildgaugeChartG();
  BuildgaugeChartBMI();
}
// Update all gauge charts when the "Update Charts" button is clicked
updateButton.addEventListener("click", () => {
    const inputValueBP = parseFloat(document.querySelector('input[name="Blood Pressure"]').value);
    const inputValueG = parseFloat(document.querySelector('input[name="Glucose"]').value);
    const inputValueBMI = parseFloat(document.querySelector('input[name="BMI"]').value);


});

    // Categorize the input value
    const categoryBP = categorizeBloodPressure(value);

    if (categoryBP !== "Invalid") {
        // Update the chart with the corresponding background color
        const colorsBP = {
            "Low": "#f0f0f0",
            "Normal": "green",
            "Elevated": "yellow",
            "High Stage 1": "orange",
            "High Stage 2": "red",
        };
        console.log("Before Update:", gaugeChartBP);
        gaugeChartBP.data[0].gauge.bar.color = [colorsBP[categoryBP]];
        Plotly.update("gaugeChartBP",gaugeChartBP.data, gaugeChartBP.layout);
        console.log("After Update:", gaugeChartBP);
    }
  

    // Categorize the input value
    const categoryG = categorizeGlucose(value);

    if (categoryG !== "Invalid") {
        // Update the chart with the corresponding background color
        const colorsG = {
            "Normal": "#f0f0f0",
            "Prediabetic": "orange",
            "Diabetic": "red",
        };
        gaugeChartG.data[0].gauge.bar.color = colorsG[categoryG];
        Plotly.update("gaugeChartG", gaugeChartG.data, gaugeChartG.layout);
    }


    // Categorize the input value
    const categoryBMI = categorizeBMI(value);

    if (categoryBMI !== "Invalid") {
        // Update the chart with the corresponding background color
        const colorsBMI = {
            "Underweight": "#f0f0f0",
            "Normal Weight": "green",
            "Overweight": "yellow",
            "Obesity Class I": "orange",
            "Obesity Class II": "red",
            "Obesity Class III": "black",
        };
        gaugeChartBMI.data[0].gauge.bar.color = colorsBMI[categoryBMI];
        Plotly.update("gaugeChartBMI", gaugeChartBMI.data, gaugeChartBMI.layout);
    }
  

// Create a function to categorize the input value
function categorizeBloodPressure(value) {
  if (value >= 0 && value < 60) {
      return "Low";
  } else if (value >= 60 && value < 70) {
      return "Normal";
  } else if (value >= 70 && value < 80) {
      return "Elevated";
  } else if (value >= 80 && value < 90) {
      return "High Stage 1";
  } else if (value >= 90 && value <= 120) {
      return "High Stage 2";
  } else {
      return "Invalid";
  }
}

//Create a function to built the initial guage chart
function BuildgaugeChartBP() {

    //Define initail value
    var initialValue = 0; 

    //Define the data dir the guage chart with the initial value
    var BPdata = [
        {
            domain: { row: 0, column: 0 },
            value: initialValue, 
            title: { text: "Diastolic Blood Pressure" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { visible: false, range: [0, 120] },
                bar: { color: "#f0f0f0" }
            }
        }
    ];

    var layout = {
        width: 200,
        height: 100,
        margin: { t: 0, b: 0 },
        showlegend: false,
        responsive: true
    };

    // Create the gauge chart with the initial data and layout
    Plotly.newPlot("gaugeChartBP", BPdata, layout);
}

// Create a function to categorize the input value
function categorizeGlucose(value) {
    if (value >= 0 && value < 139) {
        return "Normal";
    } else if (value >= 140 && value < 199) {
        return "Prediabetic";
    } else if (value >= 200 && value < 300) {
        return "Diabetic";
    } else {
        return "Invalid";
    }
  }

//Create a function to built the initial guage chart
function BuildgaugeChartG() {

    //Define initail value
    var initialValue = 0; 

    //Define the data dir the guage chart with the initial value
    var Gdata = [
        {
            domain: { row: 0, column: 0 },
            value: initialValue, 
            title: { text: "Plasma Glucose" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { visible: false, range: [0, 300] },
                bar: { color: "#f0f0f0" }
            }
        }
    ];

    var layout = {
        width: 200,
        height: 100,
        margin: { t: 0, b: 0 },
        showlegend: false,
        responsive: true
    };

    // Create the gauge chart with the initial data and layout
    Plotly.newPlot("gaugeChartG", Gdata, layout);
}


// Create a function to categorize the input value
function categorizeBMI(value) {
  if (value >= 0 && value < 18.4) {
      return "Underweight";
  } else if (value >= 18.5 && value < 24.9) {
      return "Normal Weight";
  } else if (value >= 25 && value < 29.9) {
      return "Overweight";
  } else if (value >= 30 && value < 34.9) {
      return "Obesity Class I";
  } else if (value >= 35 && value <= 39.9) {
      return "Obesity Class II";
  } else if (value >= 40 && value <= 100) {
      return "Obesity Class III";
  } else {
      return "Invalid";
  }
}

  
//Create a function to built the initial guage chart
function BuildgaugeChartBMI() {

    //Define initail value
    var initialValue = 0; 

    //Define the data dir the guage chart with the initial value
    var BMIdata = [
        {
            domain: { row: 0, column: 0 },
            value: initialValue, 
            title: { text: "Body Mass Index" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { visible: false, range: [0, 100] },
                bar: { color: "#f0f0f0" }
            }
        }
    ];

    var layout = {
        width: 200,
        height: 100,
        margin: { t: 0, b: 0 },
        showlegend: false,
        responsive: true
    };

    // Create the gauge chart with the initial data and layout
    Plotly.newPlot("gaugeChartBMI", BMIdata, layout);
}

updateGaugeChartBP(inputValueBP);
updateGaugeChartG(inputValueG);
updateGaugeChartBMI(inputValueBMI);