import React from "react";

class CountryList extends React.Component {
  filterList(evt) {
    const newList = this.props.list.filter((x) =>
      x.country.toLowerCase().includes(evt.target.value.toLowerCase())
    );
    this.setState({ list: newList });
  }

  render() {
    return (
      <aside className="CountryList">
        <input type="text" onKeyUp={this.filterList}></input>
        <ul>
          {this.props.list.map(function (country) {
            return (
              <li
                key={country.country}
                onClick={() => this.props.onClick(country)}
              >
                {country.country}
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}

export default CountryList;
