//cocaine totals
my_data = [
  ['x', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
  ["Drug Incidents in San Francisco", 9917, 9897, 8533, 9069, 10560, 11648, 11950 /*,9205,	6935,	6445,	6775,	5409,	4248,	1101*/ ],

];


var my_chart_parameters = {
  "data": {
    "x": "x",
    "columns": my_data,
    "selection": {
      "enabled": true
    }
  },
  "point": {
    "r": 5,
    "focus": {
      "expand": {
        "r": 7,
        "enabled": true
      }
    }
  },
  "grid": {
    "x": {
      "show": false,
      "type": 'timeseries'
    },
    "y": {
      "show": true
    }
  },
  "tooltip": {
    "show": true,
    "grouped": false
  }
};

var my_chart_object = c3.generate(my_chart_parameters);

//----------------------------------------------------------------
//------------------------BEGIN SLIDES------------------------------

var slide_0 = function() {
	my_chart_object.regions.remove();
  document.getElementById("message").innerHTML = "Drug incidents reported by the San Francisco Police Department rose by nearly 50% between 2005-2009.";
};

var slide_1 = function() {
  //document.getElementById("start_btn").disabled = true;
  my_chart_object.load({
    columns: [
      ["Drug Incidents in San Francisco", 9917, 9897, 8533, 9069, 10560, 11648, 11950, 9205, 6935, 6445, 6775, 5409, 4248, 1101]
    ]
  });
  document.getElementById("message").innerHTML = "After 2009, however, the SFPD has consisently reported fewer and fewer drug incidents.";
};

var slide_2 = function() {

  my_chart_object.load({
    columns: [
        ["Cocaine", 3681, 3832, 3428, 3631, 4054, 4310, 4024, 2643, 1954, 1363, 1275, 971, 678, 160]
        //["Marijuana", 1894, 1779, 1269, 1391, 1935, 2221, 2455, 2059, 1398, 1395, 1371, 1191, 892, 255]
        // ["Heroin", 662,	643,	511,	512,	687,	732,	790,	599,	425,	468,	481,	387,	370,	90]
      ]
      //unload: ['Drug Incidents']
  });


  document.getElementById("message").innerHTML = "Let's take a look at cocaine use around the city of San Francisco.";

};

var slide_3 = function() {

  my_chart_object.transform("bar");

  my_chart_object.load({
    columns: [
      //cocaine
      ["BAYVIEW", 376, 482, 335, 359, 274, 212, 204, 174, 201, 162, 143, 79, 63, 18],
      ["CENTRAL", 66, 66, 52, 65, 108, 131, 110, 50, 27, 33, 25, 43, 35, 4],
      ["INGLESIDE", 109, 95, 83, 101, 119, 88, 75, 105, 62, 34, 30, 32, 34, 4],
      ["MISSION", 1072, 826, 636, 693, 660, 759, 657, 531, 347, 189, 179, 122, 90, 16],
      ["NORTHERN", 249, 303, 282, 329, 320, 245, 274, 229, 182, 112, 140, 152, 119, 17],
      ["PARK", 35, 39, 58, 63, 35, 30, 28, 18, 21, 18, 11, 15, 8, 0],
      ["RICHMOND", 30, 39, 17, 34, 26, 17, 21, 10, 8, 17, 12, 17, 7, 1],
      ["SOUTHERN", 574, 590, 394, 514, 632, 535, 416, 397, 243, 124, 170, 92, 81, 23],
      ["TARAVAL", 86, 101, 83, 58, 57, 52, 35, 27, 27, 19, 16, 8, 6, 1],
      ["TENDERLOIN", 1084, 1291, 1488, 1415, 1823, 2241, 2204, 1102, 836, 655, 549, 411, 235, 76]
    ],
    unload: ['Drug Incidents in San Francisco', 'Cocaine']
  });
  my_chart_object.groups([
    ["BAYVIEW", "CENTRAL", "INGLESIDE", "MISSION", "NORTHERN", "PARK", "RICHMOND", "SOUTHERN", "TARAVAL", "TENDERLOIN"]
  ]);
  document.getElementById("message").innerHTML = "Here are the reported cocaine incidents for each district recognized by the SFPD.";
};

var slide_4 = function() {
  my_chart_object.focus("TENDERLOIN");
  document.getElementById("message").innerHTML = "This is the Tenderloin District, which consistently leads the city in reported cocaine incidents.";

};

var slide_5 = function() {
  my_chart_object.load({
    columns: [

      ["Narcotics", 680, 701, 630, 463, 728, 1036, 884, 482, 370, 300, 346, 215, 169, 38],
      ["Methamphetamine", 87, 90, 111, 71, 92, 93, 126, 138, 94, 142, 162, 142, 153, 42],
      ["Marijuana", 367, 373, 262, 231, 290, 438, 415, 307, 173, 145, 137, 107, 128, 40],
      ["Heroin", 114, 114, 187, 196, 383, 427, 434, 319, 225, 250, 251, 172, 184, 40],
      ["Cocaine", 1084, 1291, 1488, 1415, 1823, 2241, 2204, 1102, 836, 655, 549, 411, 235, 76],
      ["Other", 994, 1039, 998, 818, 1202, 1697, 1655, 1021, 869, 827, 686, 402, 388, 83]
    ],
    unload: ['BAYVIEW', 'CENTRAL', "INGLESIDE", "MISSION", "NORTHERN", "PARK", "RICHMOND", "SOUTHERN", "TARAVAL", "TENDERLOIN"]
  });
  my_chart_object.groups([
    ["Methamphetamine", "Marijuana", "Heroin", "Cocaine", "Narcotics", "Other"]
  ]);

  document.getElementById("message").innerHTML = "In the Tenderloin, every drug has been reported fewer times by the SFPD since 2009.";

};

var slide_6 = function() {
  my_chart_object.focus("Methamphetamine");
  document.getElementById("message").innerHTML = "...except methamphetamine.";
};

var slide_7 = function() {
  my_chart_object.load({
    unload: ["Marijuana", "Heroin", "Cocaine", "Narcotics", "Other"]
  });
  document.getElementById("message").innerHTML = "Methamphetamine has increased in the Tenderloin, despite the overall drop in reported drug cases across the board.";
};



var slide_8 = function() {
  my_chart_object.load({
    columns: [
      ["BAYVIEW", 68, 79, 63, 46, 55, 30, 47, 88, 79, 108, 97, 67, 56, 12],
      ["CENTRAL", 56, 47, 40, 40, 33, 38, 64, 65, 40, 67, 63, 90, 56, 9],
      ["INGLESIDE", 34, 46, 48, 55, 61, 77, 73, 128, 84, 83, 112, 103, 65, 13],
      ["MISSION", 103, 93, 88, 96, 68, 74, 133, 186, 152, 179, 221, 193, 187, 44],
      ["NORTHERN", 137, 143, 120, 97, 111, 63, 108, 165, 150, 201, 211, 172, 111, 31],
      ["PARK", 24, 29, 42, 24, 31, 36, 35, 35, 26, 39, 48, 63, 30, 9],
      ["RICHMOND", 19, 15, 10, 12, 21, 11, 17, 17, 30, 34, 48, 48, 16, 7],
      ["SOUTHERN", 191, 97, 140, 112, 106, 131, 202, 259, 163, 184, 304, 190, 142, 47],
      ["TARAVAL", 31, 19, 31, 19, 20, 35, 38, 27, 38, 44, 58, 42, 20, 2],
      ["TENDERLOIN", 87, 90, 111, 71, 92, 93, 126, 138, 94, 142, 162, 142, 153, 42]
    ],
    unload: ["Methamphetamine"]
  });
  my_chart_object.groups([
    ["BAYVIEW", "CENTRAL", "INGLESIDE", "MISSION", "NORTHERN", "PARK", "RICHMOND", "SOUTHERN", "TARAVAL", "TENDERLOIN"]
  ]);
  document.getElementById("message").innerHTML = "In the city as a whole, Methamphetamine shows a middling positive slope, bucking the trend of decreasing SFPD reports.";
};

var slide_9 = function() {
  my_chart_object.load({
    columns: [
      ["BAYVIEW", 886, 1123, 785, 820, 793, 595, 713, 662, 659, 693, 606, 440, 438, 113],
      ["CENTRAL", 324, 324, 175, 228, 304, 401, 396, 265, 188, 228, 237, 350, 211, 38],
      ["INGLESIDE", 364, 359, 318, 361, 474, 415, 407, 577, 336, 316, 343, 305, 219, 38],
      ["MISSION", 2098, 1930, 1580, 1937, 1548, 1672, 1510, 1386, 980, 843, 1036, 826, 654, 160],
      ["NORTHERN", 774, 868, 748, 908, 921, 712, 808, 756, 588, 556, 719, 613, 507, 133],
      ["PARK", 383, 330, 356, 410, 576, 489, 630, 465, 357, 420, 379, 362, 250, 77],
      ["RICHMOND", 146, 154, 90, 167, 180, 139, 187, 218, 143, 189, 171, 170, 63, 25],
      ["SOUTHERN", 2052, 1666, 1206, 1304, 1758, 1975, 2039, 1743, 1227, 941, 1297, 960, 702, 214],
      ["TARAVAL", 244, 236, 229, 203, 216, 354, 426, 246, 260, 240, 202, 149, 116, 22],
      ["TENDERLOIN", 2646, 2907, 3046, 2731, 3790, 4896, 4834, 2887, 2197, 2019, 1785, 1234, 1088, 281]
    ]
  });
  document.getElementById("message").innerHTML = "Across the whole city, here's how all drug incidents were split among the districts.";
};

var slide_10 = function() {
  my_chart_object.groups([
    ["BAYVIEW", "CENTRAL", "INGLESIDE", "MISSION", "NORTHERN", "PARK", "RICHMOND", "SOUTHERN", "TARAVAL"],
    ["TENDERLOIN"]
  ]);
  document.getElementById("message").innerHTML = "The Tenderloin alone compared to the rest of San Francisco.";
};

var slide_11 = function() {
  my_chart_object.load({
    columns: [
      ["Drug Incidents in San Francisco", 9917, 9897, 8533, 9069, 10560, 11648, 11950, 9205, 6935, 6445, 6775, 5409, 4248, 1101]
    ],
    unload: ["BAYVIEW", "CENTRAL", "INGLESIDE", "MISSION", "NORTHERN", "PARK", "RICHMOND", "SOUTHERN", "TARAVAL", "TENDERLOIN"]
  });
  document.getElementById("message").innerHTML = "Reported cases in 2009 nearly hit 12,000, but by 2015 it was below 4,500. What could have caused this?";
};


var slide_12 = function() {
  //my_chart_object.transform("line");
  my_chart_object.regions([{
    start: 2009,
    end: 2011
  }]);
  document.getElementById("message").innerHTML = 'The California Bureau of Narcotics Enforcement, founded in 1927, faced severe budget cuts in 2009 that then-Attorney General Jerry Brown referred to as "a terrible budgeting decision." The BNE was officially shut down in 2011.';
};
//----------------------------------------------------------------
//------------------------END SLIDES------------------------------
var slides = [slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6, slide_7, slide_8, slide_9, slide_10, slide_11, slide_12];

// cycle through slides

var current_slide = 0;

var run = function() {
  slides[current_slide]();
  current_slide += 1;

  if (current_slide === 1) {
    document.getElementById("start_btn").innerHTML = "Start";
  } else if (current_slide === slides.length) {
    current_slide = 0;
    document.getElementById("start_btn").innerHTML = "Replay";
  } else {
    document.getElementById("start_btn").innerHTML = "Continue";
  }
};

// button event handler

document.getElementById('start_btn').addEventListener("click", run);

// init

run();
