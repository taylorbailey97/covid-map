import React from "react";
import MapChart from "./MapChart.js";
import CountryData from "./CountryData.js";
import NewsTicker from "./Ticker.js";
import CountryList from "./CountryList.js";
import Chart from "./Charts.js";
import "./App.css";

class DataSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      world: null,
      countries: [],
      articles: [],
      width: 1200,
      height: 600,
    };
    this.fetchData();
  }

  fetchData() {
    fetch(
      "https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&sort=cases&allowNull=false"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ countries: data });
      });

      fetch(
        "https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=false&allowNull=false"
      )
        .then((response) => response.json())
        .then((data) => {
          data["country"] = 'World';
          this.setState({ world: data });
        });
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=covid&freshness=Day&textFormat=Raw&safeSearch=Off",
      {
        method: "GET",
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-key":
            "069ab6f316msh1a227f3bd7426ccp1d1277jsn13fe827c35d4",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          useQueryString: true,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.value);
        this.setState({ articles: data.value });
      });
  }

  handleClick(country) {
    console.log(country);
    this.setState({ country: country });
  }

  render() {
    // window.addEventListener("resize", this.handleResize);
    return (
      <div>
        {/* <CountryList
          countries={this.state.list}
          onClick={(country) => this.handleClick(country)}
        /> */}
        <NewsTicker 
          articles={this.state.articles}
        />
        <MapChart
          onClick={(country) => this.handleClick(country)}
          data={this.state.countries}
          height={this.state.height}
          width={this.state.width}
        />
        <CountryData
          className="CountryData"
          country={this.state.country}
          onClick={(country) => this.handleClick(country)}
        />
        <CountryData
          className="CountryData"
          country={this.state.world}
          onClick={(country) => this.handleClick(country)}
        />
        {/* <Chart/> */}
      </div>
    );
  }
}

export default DataSelector;
