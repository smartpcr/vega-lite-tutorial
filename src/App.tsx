import React from "react";
import "./App.css";
import { BarChart } from "./Components/BarChart";
import { Weather } from "./Components/Weather";
import { Population } from "./Components/Population";
import { Barley } from "./Components/Barley";
import { Survey } from "./Components/Survey";
import { Movie } from "./Components/Movie";
import { Histogram } from "./Components/Histogram";
import { AreaChart } from "./Components/AreaChart";
import { Cars } from "./Components/Cars";
import { Income } from "./Components/Income";
import { Disasters } from "./Components/Disasters";
import { Stocks } from "./Components/Stocks";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BarChart />
                <Weather dataUrl="data/seattle-weather.csv" />
                <Population dataUrl="https://vega.github.io/vega-lite/data/population.json" />
                <Barley dataUrl="https://vega.github.io/vega-lite/data/barley.json" />
                <Survey dataUrl="data/survey.json" />
                <Movie dataUrl="data/movies.json" />
                <Histogram dataUrl="data/bins.json" />
                <AreaChart dataUrl="data/penguins.json" />
                <Cars dataUrl="data/cars.json" />
                <Income dataUrl="data/gapminder-health-income.csv" />
                <Disasters dataUrl="data/disasters.csv" />
                <Stocks dataUrl="data/stocks.csv" />
            </header>
        </div>
    );
}

export default App;
