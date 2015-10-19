// http://chimera.labs.oreilly.com/books/1230000000345/ch12.html#_choropleth


var furniColors =  {
  furniOrangeColor:'#FF7F00'
  , furniBeigeColor:'#F8F8F6'
  , furniBrownColor:'#B7B3A3'
  , furniDarkGrayColor:'#2B3033'
}

var width = 3000, height = 3500, circle_r = 200;

var svg = d3.select('body').append('svg')
          .attr("width",width)
          .attr("height",height)
          .style('background','#2B3033');
/*
var title = svg.append('g')
        .classed('title',true);

// add mom circle
title.append('circle')
      .attr({
          cx:width/1.6
          ,cy:d3.max([height*0.05,60+circle_r])
          ,r:circle_r
          ,fill:'none'
          ,stroke:'rgb(49,130,189)'
          ,'stroke-width':20
          ,opacity:0.80
      });
// add dad circle
title.append('circle')
      .attr({
          cx:width/2.8
          ,cy:d3.max([height*0.05,60+circle_r])
          ,r:circle_r
          ,fill:'none'
          ,stroke:'rgb(49,163,84)'
          ,'stroke-width':20
          ,opacity:0.80
      });
// add text to circles
title.append('text')
      .attr({
        'font-family':'sans-serif'
        ,'font-size':130
        ,fill:'white'
        ,x:width/2.8
        ,y:d3.max([height*0.05,60+circle_r])
        ,'text-anchor':'middle'
      })
      .text('Moms');

// add text to circles
title.append('text')
      .attr({
        'font-family':'sans-serif'
        ,'font-size':130
        ,fill:'white'
        ,x:width/1.6
        ,y:d3.max([height*0.05,60+circle_r])
        ,'text-anchor':'middle'
      })
      .text('Dads');

*/
// build the state level choropleth

/*
d3.json("data/us-states.json", function(geoJson) {
  d3.json("data/data_ABI.json", function(abi){
      d3.json("data/FIPS.json",function(fips){
        d3.csv('data/03_state.csv',function(stateArray){
        d3.json('data/03_state.csv.json',function(stateObj){
        d3.json('data/03_abbrev.csv.json',function(abbrevObj){
          console.log(stateArray)
          console.log(stateObj)
          console.log(abbrevObj)

          var types = ["2f0","2f1","2f10","2f11","2f12","2f13","2f14","2f2","2f3","2f4","2f5","2f6","2f7","2f8","2f9","2m0","2m1","2m10","2m11","2m12","2m13","2m14","2m2","2m3","2m4","2m5","2m6","2m7","2m8","2m9","3f0","3f1","3f10","3f11","3f12","3f13","3f14","3f2","3f3","3f4","3f5","3f6","3f7","3f8","3f9","3m0","3m1","3m10","3m11","3m12","3m13","3m14","3m2","3m3","3m4","3m5","3m6","3m7","3m8","3m9"]
*/    /*
          d3.select('body').append('p')
              .text('Select type:')
              .style('font-size',"300%");

          d3.select('body')
            .append("div")
              .classed("menuSelection",true)
            .append("select")
            .attr("id","menu");

          var rangeContainer = d3.select('body')
            .append('div')
              .classed('rangeContainer',true);

          rangeContainer.append('p')
              .text('Set range:')
              .style('font-size',"300%");

          rangeContainer.append('input')
              .attr('id','min')
              .classed('range',true)
              .attr('value',0.0)
              .attr('type','float');

          rangeContainer.append('input')
              .attr('id','max')
              .classed('range',true)
              .attr('value',18000)
              .attr('type','float');

          var menu = d3.select("#menu");

          var range = d3.select(".range");

          menu.selectAll("option")
              .data(types)
              .enter()
            .append("option")
              .attr("value",function(d){return d})
              .text(function(d){return d})
              .style("font-size","300%");
    */
/*

          geoJson.features.forEach(function(d,i){
              d.properties["comps"]=abi[fips[d.id]]
              d.properties["abbrev"]=fips[d.id]
              value =0
              if (abbrevObj.hasOwnProperty(fips[d.id])){
                if (abbrevObj[fips[d.id]].hasOwnProperty('moms')){
                    value = abbrevObj[fips[d.id]].moms
                }else{
                    value = 0
                }
              }
              d.properties['moms'] = value
              value =0
              if (abbrevObj[fips[d.id]]!=undefined){
                if (abbrevObj[fips[d.id]].hasOwnProperty('dads')){
                    value = abbrevObj[fips[d.id]].dads
                }else{
                    value = 0
                }
              }
              d.properties['dads'] = value
              value = 0
              if (abbrevObj[fips[d.id]]!=undefined){
                if (abbrevObj[fips[d.id]].hasOwnProperty('baseline')){
                    value = abbrevObj[fips[d.id]].baseline
                }else{
                    value = 0
                }
              }
              d.properties['baseline'] = value
              //var typesArray = d3.entries(abi[fips[d.id]])
              //typesArray.forEach(function(item,index){
              //    d.properties[item.key] = item.value
              //})
          });

          console.log(geoJson);

          function draw_map(min, max){

              var map = svg.append('g')
                  .attr('id','map')

              // A quantize scale functions as a linear scale, but it outputs values from within a discrete range.
              //var color = d3.scale.quantize()
              //    .domain([0,0.050])
              //    .range(["rgb(237,248,233)", "rgb(186,228,179)","rgb(116,196,118)", "rgb(49,163,84)","rgb(0,109,44)"]);

              //var color = d3.scale.linear()
              //    .domain([0,0.050])
              //    .range(["blue","red"]);
              var colorMom = d3.scale.quantize()
                  .domain([min, max])
                  .range(['rgb(229,245,224)','rgb(161,217,155)','rgb(49,163,84)']);
              var colorDad = d3.scale.quantize()
                  .domain([min, max])
                  .range(['rgb(222,235,247)','rgb(158,202,225)','rgb(49,130,189)']);

                  //.range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

              // use a specific algorithm for translating the 3D points to 2D.
              var projection = d3.geo.albersUsa()
                  .translate([width/2, height/2]) // centers the projection
                  .scale([2000]); // default scale value is 1,000. Anything smaller will shrink the map;

              // https://github.com/mbostock/d3/wiki/Geo-Projections
              // create a function that takes the geoJson features and draws the line
              var path = d3.geo.path()
                  .projection(projection); // sets the specfic algorithm to use

              // draw the paths based on the geoJson
              //console.log("-------------\n-------------")
              map.selectAll("path")
                 .data(geoJson.features)
                 .enter()
                 .append("path")
                 .attr("d", path)
                 .style("fill", function(d) {
                      // check if state is included in the mom & dad data
                      if (abbrevObj.hasOwnProperty(d.properties.abbrev)){
                          // check if dad is greater than mom
                          if (+abbrevObj[d.properties.abbrev].dads > +abbrevObj[d.properties.abbrev].moms){
                              return colorDad(+abbrevObj[d.properties.abbrev].dads)
                          }
                          else{
                              return colorMom(+abbrevObj[d.properties.abbrev].moms)
                          }
                      }
                 })
*/
                     /*
                      // return the value that
                      comp = current_selection
                      if (d.properties.comps != undefined){
                        if (d.properties.comps.hasOwnProperty(comp)){
                            var value = d.properties.comps[comp][0];
                            //console.log([d.properties.abbrev,value])
                            return color(value);
                        } else {
                            return "q10";
                        }
                      }else{
                          return "q10";
                      }
                 })*/
/*
                 .classed('state',true);
              // adjust location
              d3.select('#map')
                  .attr('transform','translate('+0 + ',' + -650+')');

          }
          //console.log("-------------\n-------------")
        var dad_range = d3.extent(stateArray, function(d) {if (+d.dads !=0) {return +d.dads;}})
        var mom_range = d3.extent(stateArray, function(d) {if (+d.moms !=0) {return +d.moms;}})
        var full_range = dad_range.concat(mom_range);
        //draw_map('2f13', full_range[0], full_range[1])
        draw_map(full_range[0], full_range[1])
*/
    /*
          menu.on("change", function(event) {

            var menuSelection = d3.select(this).selectAll("option:checked")[0][0].value
            var min = d3.select('#min')[0][0].value
            var max = d3.select('#max')[0][0].value
            draw_map(menuSelection,min,max)

          });

          d3.select('body').on("keydown",function() {
              if (d3.event.keyCode == "13"){
                  var menuSelection = d3.select(this).selectAll("option:checked")[0][0].value
                  var min = d3.select('#min')[0][0].value
                  var max = d3.select('#max')[0][0].value
                  draw_map(menuSelection,min,max)
              }
          })
    */
/*
      });
      });
      });
    });
  });
});
*/

// build pie arc
function build_arc(){
    var dataset = [ 1369007 ,594421 ];
    var pie = d3.layout.pie();
    var w = 700;
    var h = 700;
    var color = d3.scale.quantize()
            .domain([0,1])
            .range(['rgb(49,163,84)','rgb(49,130,189)']);

    var outerRadius = w / 2;
    var innerRadius = w/3;
    var arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

    //Create SVG element
    var arcContainer = svg.append('g')
            .attr('id','arcPie')
            .append("svg")
            .attr("width", w)
            .attr("height", h);
    //Set up groups
    var arcs = arcContainer.selectAll("g.arc")
            .data(pie(dataset))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");
    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr('opacity',0.80)
        .attr("d", arc);

    //Add values
    arcs.append("text")
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d) {
            return d.value;
        });


    // Adjust location
    d3.select('#arcPie',true)
        .attr('transform','translate('+width/5.8 + ',' + 1800 +')');

}
build_arc();

/*

// build line graph
function build_lines(){
    var margin = {top: 20, right: 80, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

    var parseDate = d3.time.format("%m/%d/%Y").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var color = d3.scale.ordinal()
        .range(['rgb(49,130,189)','rgb(49,163,84)']);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.audience_count); });

    var lineGraph = svg.append('g').attr('id','lineGraph')

    lineGraph.append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv("data/02_timeline.csv", function(error, data) {
      if (error) throw error;

      color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

      data.forEach(function(d) {
        d.date = parseDate(d.date);
      });

      var parent_color = color.domain().map(function(name) {
        return {
          name: name,
          values: data.map(function(d) {
            return {date: d.date, audience_count: +d[name]};
          })
        };
      });

      x.domain(d3.extent(data, function(d) { return d.date; }));

      y.domain([
        d3.min(parent_color, function(c) { return d3.min(c.values, function(v) { return v.audience_count; }); }),
        d3.max(parent_color, function(c) { return d3.max(c.values, function(v) { return v.audience_count; }); })
      ]);

      lineGraph.append("g")
          .attr("class", "lineGraph x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      lineGraph.append("g")
          .attr("class", "lineGraph y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("audience_count (ºF)");

      var parent = lineGraph.selectAll(".parent")
          .data(parent_color)
        .enter().append("g")
          .attr("class", "parent");

      parent.append("path")
          .attr("class", "lineGraph line")
          .attr("d", function(d) { return line(d.values); })
          .style("stroke", function(d) { return color(d.name); });

      parent.append("text")
          .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
          .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.audience_count) + ")"; })
          .attr("x", 3)
          .attr("dy", ".35em")
          .text(function(d) { return d.name; });
    });

    // adjust location
    d3.select('#lineGraph')
          .attr('transform','translate('+1600+','+1600+')')
}

build_lines();

*/

/*
function build_bars(){

    var margin = {top: 30, right: 10, bottom: 10, left: 10},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .range([0, width]);

    var y = d3.scale.ordinal()
        .rangeRoundBands([0, height], .2);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var bars = svg.append('g').attr('id','bars').append('svg')
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("data/sample.tsv", type, function(error, data) {
      x.domain(d3.extent(data, function(d) { return d.value; })).nice();
      y.domain(data.map(function(d) { return d.name; }));

      bars.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
          .attr("x", function(d) { return x(Math.min(0, d.value)); })
          .attr("y", function(d) { return y(d.name); })
          .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
          .attr("height", y.rangeBand());

      bars.append("g")
          .attr("class", "bars x axis")
          .call(xAxis)
          .attr('transform','translate( 0,'+height+')');

      bars.append("g")
          .attr("class", "bars y axis")
        .append("line")
          .attr("x1", x(0))
          .attr("x2", x(0))
          .attr("y2", height);
    });

    function type(d) {
      d.value = +d.value;
      return d;
    }
    d3.select('#bars').attr('transform','translate('+400+','+2700+')')
}

build_bars()
*/
var rateById = d3.map();
function build_choropleth(){
    var width = 960,
    height = 600;

    var quantize = d3.scale.quantize()
        .domain([0, .20])
        .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));

    var projection = d3.geo.albersUsa()
        .scale(3000)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);

    var countyChoropleth = svg.append('g')
        .attr('id','county_choropleth')
        .attr("width", width)
        .attr("height", height);

    queue()
        .defer(d3.json, "data/us_county.json")
        .defer(d3.tsv, "data/unemployment.tsv", function(d) { rateById.set(d.id, +d.rate); })
        .await(ready);

    function ready(error, us) {
      if (error) throw error;

      console.log(['us:',us])
      console.log(['choropleth rateById:',rateById])

      countyChoropleth.append("g")
          .attr("class", "counties")
        .selectAll("path")
          .data(topojson.feature(us, us.objects.counties).features)
        .enter().append("path")
          .attr("class", function(d) { return quantize(rateById.get(d.id)); })
          .classed('highlight',false)
          .attr('id', function(d) { return 'c'+d.id})
          .attr('highlight',false)
          .attr("d", path);

      countyChoropleth.append("path")
          .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
          .attr("class", "states")
          .attr("d", path);
    }

    d3.select(self.frameElement).style("height", height + "px");
    d3.select('#county_choropleth').attr('transform','translate('+1000+','+700+')')
}

build_choropleth()


// Build selector
function build_selector(){
    var data = d3.range(800).map(Math.random);

    var unemp=[];

    d3.tsv("data/unemployment.tsv", function(unemployment) {
        console.log(['unemployment:',unemployment])
        unemployment.forEach(function(d){unemp.push(+d.rate);});
        //rateById.set(unemployment.id, +unemployment.rate);
        console.log(["rateById['1001']:",rateById._['1001']])
        console.log(['brush rateById:',rateById])
        console.log(['unemp:',unemp])
        var margin = {top: 194, right: 50, bottom: 214, left: 50},
            width = 2000 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom,
            centering = false,
            center,
            alpha = .2;

        var x = d3.scale.linear()
            .domain(d3.extent(unemp))
            .range([0, width]);

        var y = d3.random.normal(height / 2, height / 8);

        var brush = d3.svg.brush()
            .x(x)
            .extent([.15, .20])
            .on("brush", brushmove);

        var arc = d3.svg.arc()
            .outerRadius(height / 2)
            .startAngle(0)
            .endAngle(function(d, i) { return i ? -Math.PI : Math.PI; });

        var brush_selector = svg.append("g").attr('id','brush_selector')
          .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        brush_selector.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.svg.axis()
              .scale(x)
              .orient("bottom"));

        var dot = brush_selector.append("g")
            .attr("class", "dots")
          .selectAll("circle")
            .data(unemp)
          .enter().append("circle")
            .attr("transform", function(d) { return "translate(" + x(d) + "," + y() + ")"; })
            .attr("r", 5.5);

        var gBrush = brush_selector.append("g")
            .attr("class", "brush")
            .call(brush);

        gBrush.selectAll(".resize").append("path")
            .attr("transform", "translate(0," +  height / 2 + ")")
            .attr("d", arc);

        gBrush.selectAll("rect")
            .attr("height", height)
            .style('stroke','#fff7bc')
            .style('stroke-opacity',0.3);

        gBrush.select(".background")
            .on("mousedown.brush", brushcenter)
            .on("touchstart.brush", brushcenter);

        gBrush.call(brush.event);

        function brushmove() {
          var extent = brush.extent();
          dot.classed("selected", function(d) { return extent[0] <= d && d <= extent[1]; });
          console.log(['d3.entries stuff1',d3.entries(rateById._)])
          console.log(['d3.entries stuff',d3.entries(rateById._)])
          var myKeys = [];
          d3.entries(rateById._).filter(function(d){
            if (extent[0] <= d.value && d.value <= extent[1]){
                myKeys.push(d.key)
            }
          });
          console.log(['myKeys:',myKeys])

          // THIS BLOCK OF CODE IS BREAKING SOMETHING
          if (myKeys.length>0){
              myKeys.forEach(function(d){
                  console.log(d)
                  console.log(d3.select('#c'+d))
                  console.log(d3.select('#c'+d) != null)
                  if ( d3.select('#c'+d) != null){
                    console.log(d)
                      var mapClass = d3.select('#c'+d).attr('class');
                      var mapColor = mapClass.match('^q.* ').replace(' ','');
                      d3.select('#c4005').transition()
                            .duration(1000)
                            .style('fill','red');
                            d3.select('#c4005').transition()
                            .delay(1000).duration(3000)
                            .style('fill',mapColor);
                  }

              })
          }

        }

        function brushcenter() {
          var self = d3.select(window),
              target = d3.event.target,
              extent = brush.extent(),
              size = extent[1] - extent[0],
              domain = x.domain(),
              x0 = domain[0] + size / 2,
              x1 = domain[1] - size / 2;

          recenter(true);
          brushmove();

          if (d3.event.changedTouches) {
            self.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
          } else {
            self.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
          }

          function brushmove() {
            d3.event.stopPropagation();
            center = Math.max(x0, Math.min(x1, x.invert(d3.mouse(target)[0])));
            recenter(false);
          }

          function brushend() {
            brushmove();
            self.on(".brush", null);
          }
        }

        function recenter(smooth) {
          if (centering) return; // timer is active and already tweening
          if (!smooth) return void tween(1); // instantaneous jump
          centering = true;

          function tween(alpha) {
            var extent = brush.extent(),
                size = extent[1] - extent[0],
                center1 = center * alpha + (extent[0] + extent[1]) / 2 * (1 - alpha);

            gBrush
                .call(brush.extent([center1 - size / 2, center1 + size / 2]))
                .call(brush.event);

            return !(centering = Math.abs(center1 - center) > 1e-3);
          }

          d3.timer(function() {
            return tween(alpha);
          });
        }
        d3.select('#brush_selector')
          .attr('transform','translate('+500+','+0+')');

    });
}

build_selector()
