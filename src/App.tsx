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
import { Unemployment } from "./Components/Maps/Unemployment";
import { ZipCodes } from "./Components/Maps/ZipCodes";
import { Airports } from "./Components/Maps/Airports";
import { States } from "./Components/Maps/States";
import { World } from "./Components/Maps/World";

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
                <Unemployment dataUrl="data/unemployment.tsv" industryUrl="data/unemployment-across-industries.json" geoJsonUrl="data/us-10m.json" />
                <ZipCodes dataUrl="data/zipcodes.csv" />
                <Airports dataUrl="data/airports.csv" geoJsonUrl="data/us-10m.json" />
                <States dataUrl="data/us-state-capitals.json" geoJsonUrl="data/us-10m.json" />
                <World geoJsonUrl="data/world-110m.json" />
            </header>
        </div>
    );
}

export default App;
