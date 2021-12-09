var redSlider = document.getElementById('redSlider');
var greenSlider = document.getElementById("greenSlider");
var blueSlider = document.getElementById("blueSlider");

var redValue = document.getElementById("redNumber");
var greenValue = document.getElementById("greenNumber");
var blueValue = document.getElementById("blueNumber");

var colorDisplay = document.getElementById("colorDisplay");

//Assign Random Values
redSlider.value = Math.floor(Math.random() * 256);
greenSlider.value = Math.floor(Math.random() * 256);
blueSlider.value = Math.floor(Math.random() * 256);

//Initialize Text Components
redValue.innerHTML = "Red: " + this.redSlider.value;
greenValue.innerHTML = "Green: " + this.greenSlider.value;
blueValue.innerHTML = "Blue: " + this.blueSlider.value;

//Initialize Color Display
colorDisplay.style.background = "rgb(" + redSlider.value + ", " + 
                                greenSlider.value + ", " + 
                                blueSlider.value + ")";

//Update Text Componenets
redSlider.oninput = function() {
    redValue.innerHTML = "Red: " + this.value;
    colorDisplay.style.background = "rgb(" + redSlider.value + ", " + 
                                    greenSlider.value + ", " + 
                                    blueSlider.value + ")";
}
    
greenSlider.oninput = function() {
    greenValue.innerHTML = "Green: " + this.value;
    colorDisplay.style.background = "rgb(" + redSlider.value + ", " + 
                                    greenSlider.value + ", " + 
                                    blueSlider.value + ")";
}
    
blueSlider.oninput = function() {
    blueValue.innerHTML = "Blue: " + this.value;
    colorDisplay.style.background = "rgb(" + redSlider.value + ", " + 
                                    greenSlider.value + ", " + 
                                    blueSlider.value + ")";
}
