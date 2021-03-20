import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { AREA, BAR, CIRCLE, POINT, RECT } from "vega-lite/build/src/mark";

export interface IMovieProps {
    dataUrl: string;
}

export class Movie extends React.Component<IMovieProps> {
    public render(): JSX.Element {
        return <div>
            {this.getBarChart()}
            {this.getAreaChart()}
            {this.get2DHistogram()}
            {this.get2DHeatmap()}
            {this.getScatterPlot()}
        </div>;
    }

    private readonly getBarChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 200,
            height: { step: 16 },
            encoding: {
                y: { field: "Major Genre", type: "nominal", axis: null },
            },
            layer: [
                {
                    mark: { type: BAR, color: "#ddd" },
                    encoding: {
                        x: {
                            aggregate: "mean", 
                            field: "IMDB Rating",
                            scale: { domain: [0, 10] },
                            title: "Mean IMDB Ratings"
                        }
                    }
                },
                {
                    mark: {
                        type: "text",
                        align: "left",
                        x: 5
                    },
                    encoding: {
                        text: { field: "Major Genre" },
                        detail: {aggregate: "count"}
                    }
                }
            ]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getAreaChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [
                {
                    density: "IMDB Rating",
                    bandwidth: 0.3
                }
            ],
            width: 400,
            height: 100,
            mark: AREA,
            encoding: {
                x: {field: "value", title: "IMDB Rating", type: "quantitative"},
                y: { field: "density", type: "quantitative" }
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly get2DHistogram = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: CIRCLE,
            encoding: {
                x: {field: "IMDB Rating", bin: {maxbins: 10}},
                y: { field: "Rotten Tomatoes Rating", bin: { maxbins: 10 } },
                size: {aggregate: "count"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly get2DHeatmap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: RECT,
            encoding: {
                x: {field: "IMDB Rating", type: "quantitative", bin: {maxbins: 60}},
                y: { field: "Rotten Tomatoes Rating", type: "quantitative", bin: { maxbins: 40 } },
                color: {aggregate: "count", type: "quantitative"}
            },
            config: {view: {stroke: "transparent"}}
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getScatterPlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: POINT,
            encoding: {
                x: {field: "IMDB Rating", type: "quantitative"},
                y: { field: "Rotten Tomatoes Rating", type: "quantitative"},
                color: {
                    condition: {
                        test: "datum['IMDB Rating'] === null || datum['Rotten Tomatoes Rating'] === null",
                        value: "#aaa"
                    }
                }
            },
            config: {mark: {invalid: null}}
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}