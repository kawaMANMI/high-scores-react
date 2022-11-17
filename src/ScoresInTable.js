import React from "react";
import allCountriesData from "./scoresData";
export default function ScoresInTable() {
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  allCountriesData.sort(compare);
  return (
    <div>
      {allCountriesData.map((countryData) => (
        <table class="table  ">
          <tbody>
            <tr>
              <th colSpan={2}>{countryData.name}</th>
            </tr>
            {countryData["scores"].map((elm) => (
              <tr>
                <td>{elm.n}</td>
                <td>{elm.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
