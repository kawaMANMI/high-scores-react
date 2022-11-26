import React from "react";

export default function ScoresInTable(props) {
  return (
    <div>
      {props.data.map((countryData) => (
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
