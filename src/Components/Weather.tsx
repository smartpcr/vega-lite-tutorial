import { count } from "console";
import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR, LINE, TICK } from "vega-lite/build/src/mark";
import { Type } from "vega-lite/build/src/type";

export interface IWeatherProps {
    dataUrl: string;
}

export class Weather extends React.Component<IWeatherProps> {
    public render(): JSX.Element {
        return <div>
            {this.getTicks()}
            {this.getBarChart()}
            {this.getBarChart2()}
            {this.getBarChart3()}
            {this.getLineChart()}
            {this.getLineChart2()}
            {this.getLineChart3()}
            {this.getLineChart4()}
        </div>;
    }

    private readonly getTicks = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 24,
            mark: TICK,
            encoding: {
                x: { field: 'precipitation', type: Type.quantitative }
            },
            data: { url: this.props.dataUrl }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getBarChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: BAR,
            encoding: {
                x: { bin: true, field: "precipitation" },
                y: { aggregate: "count" }
            },
            data: { url: this.props.dataUrl }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getBarChart2 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: BAR,
            encoding: {
                x: { timeUnit: "month", field: "date", type: "ordinal" },
                y: { aggregate: "count", type: "quantitative" },
                color: { field: "weather", type: "nominal" }
            },
            data: { url: this.props.dataUrl }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getBarChart3 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: {type: BAR, cornerRadiusTopLeft: 3, cornerRadiusTopRight: 3},
            encoding: {
                x: { timeUnit: "month", field: "date", type: "ordinal", title: "month of year" },
                y: { aggregate: "count", type: "quantitative" },
                color: {
                    field: "weather",
                    type: "nominal",
                    scale: {
                        domain: ["sun", "fog", "drizzle", "rain", "snow"],
                        range: ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
                    },
                    title: "weather type"
                }
            },
            data: { url: this.props.dataUrl }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getLineChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: LINE,
            encoding: {
                x: { timeUnit: "month", field: "date" },
                y: { aggregate: "mean", field: "precipitation" }
            },
            data: { url: this.props.dataUrl }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getLineChart2 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: LINE,
            encoding: {
                x: { timeUnit: "yearmonth", field: "date" },
                y: { aggregate: "max", field: "temp_max" }
            },
            data: { url: this.props.dataUrl },
            title: "max temp."
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getLineChart3 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: LINE,
            encoding: {
                x: { timeUnit: "year", field: "date" },
                y: { aggregate: "mean", field: "temp_max" }
            },
            data: { url: this.props.dataUrl },
            title: "temp change"
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getLineChart4 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            mark: LINE,
            encoding: {
                x: { timeUnit: "year", field: "date" },
                y: { aggregate: "mean", field: "temp_range" }
            },
            data: { url: this.props.dataUrl },
            transform: [
                { calculate: "datum.temp_max - datum.temp_min", as: "temp_range" }
            ],
            title: "temp range"
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}