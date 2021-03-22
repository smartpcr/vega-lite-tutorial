import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR, CIRCLE, POINT, RECT, TEXT } from "vega-lite/build/src/mark";

export interface ICarsProps {
    dataUrl: string;
}

export class Cars extends React.Component<ICarsProps> {
    public render(): JSX.Element {
        return <div>
            {this.getScatterPlot()}
            {this.getBubblePlot()}
            {this.getFilledCircles()}
            {this.getTextPlot()}
            {this.getHeatmapTable()}
        </div>;
    }

    private readonly getScatterPlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            data: { url: this.props.dataUrl },
            transform: [{
                calculate: "'https://www.google.com/search?q=' + datum.Name",
                as: "url"
            }],
            params: [{
                name: "CarOrigins",
                select: { type: "point", fields: ["Origin"] },
                bind: "legend"
            }],
            mark: POINT,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
                color: { field: "Origin", type: "nominal" },
                tooltip: { field: "Name", type: "nominal" },
                href: { field: "url", type: "nominal" },
                opacity: {
                    condition: { param: "CarOrigins", value: 1 },
                    value: 0.2
                }
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getBubblePlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            data: { url: this.props.dataUrl },
            params: [
                {
                    name: "brush",
                    select: { type: "interval" },
                },
                {
                    name: "paint",
                    select: {type: "point", on: "mouseover", nearest: true}
                }
            ],
            mark: POINT,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
                color: {
                    condition: { param: "brush", field: "Cylinders", type: "ordinal" },
                    value: "grey"
                },
                size: {
                    condition: { param: "paint", value: 300 },
                    value: 50
                },
                tooltip: {field: "Name", type: "nominal"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getFilledCircles = (): JSX.Element => {
        const spec: VisualizationSpec = {
            width: 400,
            height: 300,
            data: { url: this.props.dataUrl },
            params: [{
                name: "grid",
                select: { type: "interval" },
                bind: "scales"
            }],
            mark: CIRCLE,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
                size: { field: "Acceleration", type: "quantitative" },
                tooltip: {field: "Name", type: "nominal"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getTextPlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [{
                calculate: "datum.Origin[0]",
                as: "OriginInitial"
            }],
            width: 400,
            height: 300,
            mark: TEXT,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
                color: { field: "Origin", type: "nominal" },
                text: {field: "OriginInitial", type: "nominal"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getHeatmapTable = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [{
                aggregate: [{
                    op: "count",
                    as: "num_cars"
                }],
                groupby: ["Origin", "Cylinders"]
            }],
            width: 400,
            height: 300,
            mark: RECT,
            encoding: {
                y: { field: "Origin", type: "ordinal" },
                x: {field: "Cylinders", type: "ordinal"}
            },
            layer: [
                {
                    mark: RECT,
                    encoding: {
                        color: {
                            field: "num_cars",
                            type: "quantitative",
                            title: "# rec.",
                            legend: {direction: "horizontal", gradientLength: 120}
                        }
                    }
                },
                {
                    mark: TEXT,
                    encoding: {
                        text: { field: "num_cars", type: "quantitative" },
                        color: {
                            condition: { test: "datum['num_cars'] < 40", value: "black" },
                            value: "white"
                        }
                    }
                }
            ],
            config: {axis: {grid: true, tickBand: "extent"}}
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}