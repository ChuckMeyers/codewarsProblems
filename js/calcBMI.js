// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// solution

function bmi(weight, height) {
    let calc = weight/Math.pow(height, 2);
    if (calc <= 18.5) {
      return "Underweight";
    } else if (calc <= 25) {
      return "Normal";
    } else if (calc <= 30) {
      return "Overweight";
    } else if (calc > 30) {
      return "Obese";
    } 
  }