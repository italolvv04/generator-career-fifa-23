import styles from "../styles.module.css";
import { goToHome } from './navigation';

import * as mockTeams from "../Mock/teams.json";
import * as mockFormations from "../Mock/formations.json";
import * as mockInjuries from "../Mock/injuries.json";
import * as mockBudget from "../Mock/budget.json";
import * as mockPlayersContract from "../Mock/playersContract.json";
import * as mockPlayersForeigner from "../Mock/playersForeigner.json";
import * as mockScouts from "../Mock/scouts.json";
import * as mockPlayersAges from "../Mock/playersAges.json";

import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface Team {
  name: string;
  league: string;
  country: string;
  objectiveTeam: {
    ligaNacional: string;
    copaNacional: string;
    ligaInternacional?: string;
    rival: string;
  };
}

interface Formation {
  formation: string;
  description: string;
}

interface Injuries {
  description: string;
}

interface Budget {
  description: string;
}

interface PlayersContract {
  description: string;
}

interface PlayersForeigner {
  description: string;
}

interface Scouts {
  description: string;
}

interface PlayersAges {
  description: string;
}

interface MockData {
  teams: Team[];
  formations: Formation[];
  injuries: Injuries[];
  budget: Budget[];
  playersContract: PlayersContract[];
  playersForeigner: PlayersForeigner[];
  scouts: Scouts[];
  playersAges: PlayersAges[];
}

function getRandomTeam(teamsArray: Team[]): Team {
  const randomIndex = Math.floor(Math.random() * teamsArray.length);
  return teamsArray[randomIndex];
}

function getRandonFormation(formationsArray: Formation[]): Formation {
  const randomIndex = Math.floor(Math.random() * formationsArray.length);
  return formationsArray[randomIndex];
}

function getRandomInjury(injuriesArray: Injuries[]): Injuries {
  const randomIndex = Math.floor(Math.random() * injuriesArray.length);
  return injuriesArray[randomIndex];
}

function getRandomBudget(budgetArray: Budget[]): Budget {
  const randomIndex = Math.floor(Math.random() * budgetArray.length);
  return budgetArray[randomIndex];
}

function getRandomPlayerContract(
  playersContractArray: PlayersContract[]
): PlayersContract {
  const randomIndex = Math.floor(Math.random() * playersContractArray.length);
  return playersContractArray[randomIndex];
}

function getRandomPlayerForeigner(
  playersForeignerArray: PlayersForeigner[]
): PlayersForeigner {
  const randomIndex = Math.floor(Math.random() * playersForeignerArray.length);
  return playersForeignerArray[randomIndex];
}

function getRandomScout(scoutsArray: Scouts[]): Scouts {
  const randomIndex = Math.floor(Math.random() * scoutsArray.length);
  return scoutsArray[randomIndex];
}

function getRandomPlayerAge(playersAgesArray: PlayersAges[]): PlayersAges {
  const randomIndex = Math.floor(Math.random() * playersAgesArray.length);
  return playersAgesArray[randomIndex];
}

const Geral = () => {
  const [chosenTeam, setChosenTeam] = useState<Team | null>(null);

  const [chosenFormation, setChosenFormation] = useState<Formation | null>(
    null
  );
  const [chosenInjury, setChosenInjury] = useState<Injuries | null>(null);

  const [chosenBudget, setChosenBudget] = useState<Budget | null>(null);

  const [chosenPlayerContract, setChosenPlayerContract] =
    useState<PlayersContract | null>(null);

  const [chosenPlayerForeigner, setChosenPlayerForeigner] =
    useState<PlayersForeigner | null>(null);

  const [chosenScout, setChosenScout] = useState<Scouts | null>(null);

  const [chosenPlayerAge, setChosenPlayerAge] = useState<PlayersAges | null>(
    null
  );

  const handleGenerateClick = () => {
    const teamsArray = (mockTeams as MockData).teams;
    const randomTeam = getRandomTeam(teamsArray);
    setChosenTeam(randomTeam);    

    const formation = (mockFormations as MockData).formations;
    const randomFormation = getRandonFormation(formation);
    setChosenFormation(randomFormation);

    const injuries = (mockInjuries as MockData).injuries;
    const randomInjury = getRandomInjury(injuries);
    setChosenInjury(randomInjury);

    const budget = (mockBudget as MockData).budget;
    const randomBudget = getRandomBudget(budget);
    setChosenBudget(randomBudget);

    const playersContract = (mockPlayersContract as MockData).playersContract;
    const randomPlayerContract = getRandomPlayerContract(playersContract);
    setChosenPlayerContract(randomPlayerContract);

    const playersForeigner = (mockPlayersForeigner as MockData).playersForeigner;
    const randomPlayerForeigner = getRandomPlayerForeigner(playersForeigner);
    setChosenPlayerForeigner(randomPlayerForeigner);

    const scouts = (mockScouts as MockData).scouts;
    const randomScout = getRandomScout(scouts);
    setChosenScout(randomScout);

    const playersAges = (mockPlayersAges as MockData).playersAges;
    const randomPlayerAge = getRandomPlayerAge(playersAges);
    setChosenPlayerAge(randomPlayerAge);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button onClick={goToHome}>
          <FiArrowLeft />
        </button>
        <h1>Gerador Modo Carreira - FIFA 23</h1>
      </div>
      <div className={styles.areaGenerate}>
        <button onClick={handleGenerateClick}>Gerar modo carreira </button>
      </div>

      {chosenTeam && (
        <div className={styles.areaResult}>
          {chosenTeam && (
            <div>
              <h1> Time </h1>
              <span>
                {chosenTeam.name} ({chosenTeam.league})
              </span>
            </div>
          )}

          {chosenFormation && (
            <div>
              <h1> Formação </h1>
              <span>{chosenFormation.formation}</span>
              <br />
              <span>{chosenFormation.description}</span>
            </div>
          )}

          {chosenInjury && (
            <div>
              <h1> Lesão </h1>
              <span>{chosenInjury.description}</span>
            </div>
          )}

          {chosenTeam && (
            <div>
              <h1> Objetivos </h1>
              <span>
                <strong> Liga: </strong> {chosenTeam.objectiveTeam.ligaNacional}
                <br />
                <strong> Copa: </strong> {chosenTeam.objectiveTeam.copaNacional}
                <br />
                <strong> Internacionais: </strong> {chosenTeam.objectiveTeam?.ligaInternacional}
                <br />
                <strong> Rival: </strong> {chosenTeam.objectiveTeam.rival}
              </span>
            </div>
          )}

          {chosenBudget && (
            <div>
              <h1> Orçamento </h1>
              <span>{chosenBudget.description}</span>
            </div>
          )}

          {chosenPlayerContract && (
            <div>
              <h1> Contrato Jogador </h1>
              <span>{chosenPlayerContract.description}</span>
            </div>
          )}

          {chosenPlayerForeigner && (
            <div>
              <h1> Jogador Estrangeiro </h1>
              <span>{chosenPlayerForeigner.description}</span>
            </div>
          )}

          {chosenScout && (
            <div>
              <h1> Olheiro </h1>
              <span>{chosenScout.description}</span>
            </div>
          )}

          {chosenPlayerAge && (
            <div>
              <h1> Idade Jogador </h1>
              <span>{chosenPlayerAge.description}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Geral;
