import { useState } from "react";
import { getHour, getTime } from "./modules/app";
import "./App.css";

function App() {
  const [moon, setMoon] = useState<number>(0);
  const [sun, setSun] = useState<number>(0);
  const [earth, setEarth] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    const calculatedResult = getHour(moon, sun, earth);
    const resultText = getTime(calculatedResult);
    setResult(resultText);
  };

  return (
    <div className="App">
      <h1>Calculateur d'heure en Corodinsite Jupiterienne</h1>
      <div className="inputs">
        <div>
          <label htmlFor="moon">Cadran de la lune :</label>
          <input
            id="moon"
            type="number"
            min="1"
            max="2"
            value={moon}
            onChange={(e) => setMoon(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="sun">Cadran du soleil :</label>
          <input
            id="sun"
            type="number"
            min="1"
            max="2"
            value={sun}
            onChange={(e) => setSun(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="earth">Cadran de la terre :</label>
          <input
            id="earth"
            type="number"
            min="1"
            max="2"
            value={earth}
            onChange={(e) => setEarth(Number(e.target.value))}
          />
        </div>
      </div>
      {earth !== 0 && sun !== 0 && moon !== 0 && (
        <button onClick={handleCalculate}>Calculer</button>
      )}

      {result !== null && (
        <div className="result">
          <h2>Résultat :</h2>
          <p id="result">{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
