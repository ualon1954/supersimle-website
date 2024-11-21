var subjectObject = {
  "1": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
      
  },
  "2": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "3": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "4": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "5": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "6": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "7": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "8": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "9": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5", "6"]
  },
  "10": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5", "6"]
  },
  "11": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5", "6"]
  },
  "12": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5", "6"]
  }
}
window.onload = function() {
  var monthSel = document.getElementById("month");
  var firstyearSel = document.getElementById("firstyear");
  var pricaSel = document.getElementById("prica");
  for (var x in subjectObject) {
    monthSel.options[monthSel.options.length] = new Option(x, x);
  }
  monthSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    pricaSel.length = 1;
    firstyearSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      firstyearSel.options[firstyearSel.options.length] = new Option(y, y);
    }
  }
  firstyearSel.onchange = function() {
    //empty Chapters dropdown
    pricaSel.length = 1;
    //display correct values
    var z = subjectObject[monthSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      pricaSel.options[pricaSel.options.length] = new Option(z[i], z[i]);
    }
  }
}