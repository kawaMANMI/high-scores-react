import React from "react";
import allCountriesData from "./scoresData";
export default function ScoresInTable() {
  function sortAccordingToName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function sortAccordingToName2(a, b) {
    if (a.s < b.s) {
      return -1;
    }
    if (a.s > b.s) {
      return 1;
    }
    return 0;
  }
  function sortAccordingToScores() {
    allCountriesData.map((countryData) =>
      countryData["scores"].sort(sortAccordingToName2)
    );
  }
  allCountriesData.sort(sortAccordingToName);
  sortAccordingToScores();

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
