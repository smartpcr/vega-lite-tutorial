import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR } from "vega-lite/build/src/mark";

export interface IPopulationProps {
    dataUrl: string;
}

export class Population extends React.Component<IPopulationProps> {
    public render(): JSX.Element {
        return <div>
            {this.getDistribution()}
            {this.getDistribution2()}
            {this.getGrouped()}
            {this.getOverlapped()}
            {this.getNormalizedBars()}
        </div>;
    }

    private readonly getDistribution = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: { step: 17 },
            mark: BAR,
            encoding: {
                y: { field: 'age' },
                x: { aggregate: "sum", field: "people", title: "population" }
            },
            data: { url: this.props.dataUrl },
            transform: [{ filter: "datum.year == 2000" }]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getDistribution2 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: { step: 17 },
            mark: BAR,
            encoding: {
                y: { field: "age", type: "ordinal", sort: "-x" },
                x: { aggregate: "sum", field: "people", title: "population" }
            },
            data: { url: this.props.dataUrl },
            transform: [{ filter: "datum.year == 2000" }]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getGrouped = (): JSX.Element => {
        const spec: VisualizationSpec = {
            height: { step: 12 },
            mark: BAR,
            encoding: {
                column: { field: "age", type: "ordinal", spacing: 10 },
                x: { field: "gender", axis: {title: ""} },
                y: { aggregate: "sum", field: "people", title: "population", axis: { grid: false } },
                color: { field: "gender", scale: {range: ["#675193", "#ca8861"]} }
            },
            data: { url: this.props.dataUrl },
            transform: [
                { filter: "datum.year == 2000" },
                { calculate: "datum.sex == 2 ? 'Female': 'Male'", as: "gender" }
            ],
            config: {
                view: { stroke: "transparent" },
                axis: {domainWidth: 1}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getOverlapped = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [
                { filter: "datum.year == 2000" },
                { calculate: "datum.sex == 2 ? 'Female': 'Male'", as: "gender" }
            ],
            height: { step: 17 },
            mark: BAR,
            encoding: {
                x: { field: "age", type: "ordinal" },
                y: { aggregate: "sum", field: "people", title: "population", axis: { grid: false }, stack: null},
                color: { field: "gender", scale: { range: ["#675193", "#ca8861"] } },
                opacity: {value: 0.6}
            },
            
            config: {
                view: { stroke: "transparent" },
                axis: {domainWidth: 1}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getNormalizedBars = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [
                { filter: "datum.year == 2000" },
                { calculate: "datum.sex == 2 ? 'Female': 'Male'", as: "gender" }
            ],
            width: { step: 17 },
            mark: BAR,
            encoding: {
                x: {field: "age"},
                y: {aggregate: "sum", field: "people", title: "population", stack: "normalize"},
                color: { field: "gender", scale: {range: ["#675193", "#ca8861"]} }
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}