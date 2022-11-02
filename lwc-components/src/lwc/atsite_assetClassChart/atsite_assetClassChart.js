import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import d3v6 from "@salesforce/resourceUrl/d3v6";

export default class Atsite_assetClassChart extends LightningElement {
    
    d3Initialized = false;
    
    renderedCallback() {
        if (this.d3Initialized) {
          return;
        }

        this.d3Initialized = true;
        Promise.all([loadScript(this, d3v6 + "/d3.min.js")])
          .then((values) => {
            this.initializeD3();
          })
          .catch((error) => {
            debugger;
            console.log("There has been some sort of error");
            console.log("Error:" + error);
          });
      }

      initializeD3()
      {
        debugger;
        const theme = "dark";

        const width = 300,
            height = 300,
            margin = 0;

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        const radius = Math.min(width, height) / 2 - margin


        // append the svg object to the div called 'my_dataviz'
        const svg = d3.select(this.template.querySelector('div'))
        .append("svg")
            .attr("width", width)
            .attr("height", height)
        .append("g")
            .attr("transform", `translate(${width/2},${height/2})`);
        // .attr("transform", `translate(${width/2},${height/2})rotate(-180)`);

        // Create dummy data
        const data = {Stocks: 45.2, Bonds: 12.80, Balanced:13.1, Cash:24.1, Other:4.8}

        // set the color scale
        const color = d3.scaleOrdinal()
        .domain(["Stocks", "Bonds", "Balanced", "Cash", "Other"])
        .range(["#5288AD","#7A9A02","#A12B2A", "#8B5AA3", "#D9CC5D"]);

        // Compute the position of each group on the pie:
        const pie = d3.pie()
        .sort(null) // Do not sort group by size
        .value(d => d[1])
        const data_ready = pie(Object.entries(data))
        const innerData = pie(Object.entries({a:100}))

        // The arc generator
        const arc = d3.arc()
        .innerRadius(radius * 0.75)         // This is the size of the donut hole
        .outerRadius(radius * 0.8)

        const innerRadiusColor = ["#FFFFFF", "#0A294A"];
        // Another arc that won't be drawn. Just for labels positioning
        const innerArc = d3.arc()
        .innerRadius(radius * 0.7)
        .outerRadius(0)
        

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
        .selectAll('allSlices')
        .data(data_ready)
        .join('path')
        .attr('d', arc)
        .attr('fill', d => color(d.data[1]))
        .attr("stroke", "white")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)
        
        
        
        svg
        .selectAll('allSlices')
        .data(innerData)
        .join('path')
        .attr('d', innerArc)
        .attr('fill', d => {
                return theme === "light" ? innerRadiusColor[0] : innerRadiusColor[1]
        })
        .style("opacity", 0.8)


        svg.append("text")
        .attr("text-anchor", "middle")
        .attr('font-size', '2em')
            .attr('y', 0)
        .text("$30,121,000");  
        
        svg.append("text")
        .attr("text-anchor", "middle")
        .attr('font-size', '1em')
            .attr('y', 20)
        .attr('x', -45)
        .text("Total Asset");  
            }
}