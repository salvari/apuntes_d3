var w = 400;
var h = 400;
var s = 4; // scale
var padding = 2;
var dataset = [5, 10, 13, 19, 21, 25, 11, 25, 22, 18, 7];
var svg = d3.select("body")
    .append("svg")
    .attrs({width:w, height:h});
//    .attr("width", w)
//    .attr("height", h);

function colorPicker(v) {
    if(v<=20) {return "#666666";}
    else  if (v>20) {return "#FF0033";}
}

monthlySales = [
    {"month":10, "sales":100},
    {"month":20, "sales":130},
    {"month":30, "sales":250},
    {"month":40, "sales":300},
    {"month":50, "sales":265},
    {"month":60, "sales":225},
    {"month":70, "sales":180},
    {"month":80, "sales":120},
    {"month":90, "sales":145},
    {"month":100, "sales":130}
];

var lineFun = d3.line()
    .x(function(d) { return 3*d.month; })
    .y(function(d) { return h - d.sales; })
    .curve(d3.curveLinear)
;

var svg = d3.select("body")
    .append("svg")
    .attrs({
        width: w,
        height: h
    })
;

var viz = svg.append("path")
    .attrs({
        d: lineFun(monthlySales),
        stroke: "purple",
        "stroke-width": 2,
        "fill": "none",
    });
