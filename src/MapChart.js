import React from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.005, 100.0])
  .range(["#ffedea", "#ff5233"]);

class MapChart extends React.Component {
  render() {
    const data = this.props.data;
    const height = this.props.height;
    const width = this.props.width;
    return (
      <div className="MapBox">
        <ComposableMap
          width={width}
          height={height}
          // projectionConfig={{
          //   scale: 157,
          // }}
          className="Map"
        >
          <ZoomableGroup zoom={1.25}>
            {data.length > 0 && (
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const d = data.find((s) => {
                      return s.countryInfo.iso3 === geo.properties.ISO_A3;
                    });
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        stroke={"white"}
                        strokeWidth={0.5}
                        fill={d ? colorScale(d.cases * 0.00005) : "#F5F4F6"}
                        style={{
                          pressed: {
                            fill: "blue",
                            border: "none",
                          },
                          hover: {
                            fill: "white",
                          },
                        }}
                        onClick={() => this.props.onClick(d ? d : null)}
                      />
                    );
                  })
                }
              </Geographies>
            )}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    );
  }
}

export default MapChart;
