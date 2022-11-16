import React from "react";
import allCountriesData from "./scoresData";
export default function ScoresInTable() {
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
