var subjectObject = {
  "ינואר": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
      
  },
  "פברואר": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "מרץ": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "אפריל": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "מאי": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "יוני": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "יולי": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "אוגוסט": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "ספטמבר": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5"]
  },
  "אוקטובר": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5", "6"]
  },
  "נובמבר": {
    "2024": ["1", "2", "3", "4", "5", "6"],
    "2025": ["1", "2", "3", "4", "5", "6"]
  },
  "דצמבר": {
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