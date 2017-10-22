var w = 300;
var h = 120;
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

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i){
        return (i * (w / dataset.length));
    })
    .attr("y", function(d){
        return(h - s*d);
    })
    .attr("width", w / dataset.length - padding)
    .attr("height", function(d){
        return(s*d)
    })
    .attr("fill", function(d){
        //        return( "rgb(" + (10*d) + ",0 ,0)");
        return(colorPicker(d));
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
        return d;
    })
    .attrs({
        "text-anchor": "middle",
        "font-family": "sans-serif",
        x: function(d, i){
            return (i * w / dataset.length + w/(2*dataset.length));
        },
        y: function(d){
            return(h - 4*d - padding)
        }
    });
