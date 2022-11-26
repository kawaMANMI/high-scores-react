import React from "react";
import allCountriesData from "./scoresData";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useState } from "react";
import ScoresInTable from "./ScoresInTable";

import "./App.css";

export default function ButtonToSort() {
  const [scoresData, setScoresData] = useState(allCountriesData);

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
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  }

  function sortAccordingScoresObjAscending(a, b) {
    if (a.s < b.s) {
      return -1;
    }
    if (a.s > b.s) {
      return 1;
    }
    return 0;
  }

  function sortAccordingScoresObjDescending(a, b) {
    if (a.s > b.s) {
      return -1;
    }
    if (a.s < b.s) {
      return 1;
    }
    return 0;
  }
  function sortAccordingToScoresAscending() {
    scoresData.map((countryData) =>
      countryData["scores"].sort(sortAccordingScoresObjAscending)
    );

    setScoresData([...scoresData]);
  }

  function sortAccordingToScoresDescending() {
    scoresData.map((countryData) =>
      countryData["scores"].sort(sortAccordingScoresObjDescending)
    );

    setScoresData([...scoresData]);
  }
  const [booCheckedScores, setBooCheckedScores] = useState(true);
  const [booCheckedCountries, setBooCheckedCountries] = useState(true);

  //  sortAccordingToScoresDescending();
  const sortingFunctionsScores = () => {
    if (booCheckedScores) {
      sortAccordingToScoresDescending();
    } else {
      sortAccordingToScoresAscending();
    }
    setBooCheckedScores(!booCheckedScores);
  };

  const sortingFunctionsCountries = () => {
    if (booCheckedCountries) {
      scoresData.sort(sortAccordingToName2);
    } else {
      scoresData.sort(sortAccordingToName);
    }
    setBooCheckedCountries(!booCheckedCountries);
  };
  return (
    <div>
      <div className="buttonContainer">
        <p>Sort According Scores</p>
        <BootstrapSwitchButton
          checked={booCheckedScores}
          width={200}
          onlabel="Ascending "
          offlabel="Descending"
          onChange={sortingFunctionsScores}
        />

        <p>Sort According Countries Name </p>
        <BootstrapSwitchButton
          checked={booCheckedCountries}
          width={200}
          onlabel="Ascending "
          offlabel="Descending"
          onChange={sortingFunctionsCountries}
        />
      </div>
      <ScoresInTable data={scoresData} />
    </div>
  );
}
