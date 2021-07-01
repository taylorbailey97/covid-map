import React from "react";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleXYPlot
} from "react-vis";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      world: [],
      country: [],
    };

    this.fetchData()
  }

  fetchData() {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=3")
      .then((response) => response.json())
      .then((data) => {
        let arr = [];
        for (var [key, value] of Object.entries(data.cases)) {
          arr.push({ x: new Date(key), y: (value / 1000000) });
        }
        console.log(arr);
        this.setState({
          world: arr,
        });
      });
  }

  render() {
    const data = this.state.world;
    return (
      // <div className="Chart">
        data.length > 0 ?
          <FlexibleXYPlot width={1200} height={800} className="Chart">
            <HorizontalGridLines />
            <LineSeries data={this.state.world} stroke="red" />
            <XAxis
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
              tickTotal={4}
            />
            <YAxis
              tickTotal={10}
              title="Cases count (millions)"
              style={{
                line: { stroke: "#ADDDE1" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
              }}
              tickFormat="date"
            />
          </FlexibleXYPlot>
        :
          <p>"Loading data"</p>
        
      // </div>
    );
  }
}

export default Chart;
