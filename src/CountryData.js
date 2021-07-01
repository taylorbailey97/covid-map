import React from "react";

class CountryData extends React.Component {
  addCommas(x) {
    if (x != null) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return null;
  }

  render() {
    const country = this.props.country;
    return (
      <div className="CountryData">
        {/* {country ? (
          <button onClick={() => this.props.onClick(null)}>
            clear country data
          </button>
        ) : (
          <></>
        )} */}
        <h1>{country ? country.country : "Select a country"}</h1>

        <div className="DataSections">
          {/* Today data */}
          <section className="Today">
            <h4>Today Data:</h4>

            <h5>Cases: {country ? this.addCommas(country.todayCases) : 0}</h5>

            <h5>Deaths: {country ? this.addCommas(country.todayDeaths) : 0}</h5>

            <h5>
              Recovered: {country ? this.addCommas(country.todayRecovered) : 0}
            </h5>
          </section>

          {/* Cumulative Data */}
          <section className="Current">
              <h4>Cumulative Data:</h4>

              <h5>Cases: {country ? this.addCommas(country.cases) : 0}</h5>

              <h5>Deaths: {country ? this.addCommas(country.deaths) : 0}</h5>

              <h5>
                Recovered: {country ? this.addCommas(country.recovered) : 0}
              </h5>
              <h5>
                Active cases: {country ? this.addCommas(country.active) : 0}
              </h5>

              <h5>
                Critical cases: {country ? this.addCommas(country.critical) : 0}
              </h5>
          </section>

          {/* Statistical Data */}
          <section className="Stats">
            <h4>Statistical Data:</h4>

            <h5>
              Population: {country ? this.addCommas(country.population) : 0}
            </h5>

            <h5>
              Cases per one million:{" "}
              {country ? this.addCommas(country.casesPerOneMillion) : 0}
            </h5>

            <h5>
              Deaths per one million:{" "}
              {country ? this.addCommas(country.deathsPerOneMillion) : 0}
            </h5>
          {/* </section>
          <section className="Stats"> */}
            {/* <br />
            <br /> */}
            <h5>
              Recovered per one million:{" "}
              {country ? this.addCommas(country.recoveredPerOneMillion) : 0}
            </h5>

            <h5>
              Tests per one million:{" "}
              {country ? this.addCommas(country.testsPerOneMillion) : 0}
            </h5>

            <h5>
              Critical per one million:{" "}
              {country ? this.addCommas(country.criticalPerOneMillion) : 0}
            </h5>
          </section>
        </div>
      </div>
    );
    // } else {
    //   return (
    //     <h1 className="CountryData">
    //       Please select a country to view it's data
    //     </h1>
    //   );
    // }
  }
}

export default CountryData;
