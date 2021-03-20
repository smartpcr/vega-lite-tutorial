import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BarChart } from "./Components/BarChart";
import { Weather } from "./Components/Weather";
import { Population } from "./Components/Population";
import { Barley } from "./Components/Barley";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <BarChart />
                <Weather dataUrl="data/seattle-weather.csv" />
                <Population dataUrl="https://vega.github.io/vega-lite/data/population.json" />
                <Barley dataUrl="https://vega.github.io/vega-lite/data/barley.json" />
            </header>
        </div>
    );
}

export default App;
