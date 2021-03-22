import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { AREA, BAR, CIRCLE, LINE } from "vega-lite/build/src/mark";

export interface IStocksProps {
    dataUrl: string;
}

export class Stocks extends React.Component<IStocksProps> {
    public render(): JSX.Element {
        return (
            <div>
                {this.getAreaChart()}
                {this.getLineChart2()}
            </div>
        );
    }

    private readonly getAreaChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [
                {
                    filter: "datum.symbol==='MSFT'",
                },
                {
                    filter: {
                        field: "date",
                        timeUnit: "year",
                        range: [2006, 2009],
                    },
                }
            ],
            params: [
                {
                    name: "view",
                    select: {type: "interval", encodings: ["x"]}
                },
            ],
            width: 800,
            height: 300,
            mark: {
                type: AREA,
                line: { color: "darkgreen" },
                color: {
                    x1: 1,
                    y1: 1,
                    x2: 1,
                    y2: 0,
                    gradient: "linear",
                    stops: [
                        {
                            offset: 0,
                            color: "white"
                        },
                        {
                            offset: 1,
                            color: "darkgreen"
                        }
                    ]
                }
            },
            encoding: {
                x: {
                    field: "date",
                    type: "temporal",
                    axis: {
                        tickCount: 8,
                        labelAlign: "left",
                        labelExpr:
                            "[timeFormat(datum.value, '%b'), timeFormat(datum.value, '%m') == '01' ? timeFormat(datum.value, '%Y') : '']",
                        labelOffset: 4,
                        labelPadding: -24,
                        tickSize: 30,
                        gridDash: {
                            condition: {
                                test: {
                                    field: "value",
                                    timeUnit: "month",
                                    equal: 1,
                                },
                                value: [],
                            },
                            value: [2, 2],
                        },
                        tickDash: {
                            condition: {
                                test: {
                                    field: "value",
                                    timeUnit: "month",
                                    equal: 1,
                                },
                                value: [],
                            },
                            value: [2, 2],
                        },
                    },
                },
                y: { field: "price", type: "quantitative" },
            },
        };

        return <VegaLite spec={spec} actions={false} />;
    };

    private readonly getLineChart2 = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            params: [
                {
                    name: "view",
                    select: "interval",
                    bind: "scales",
                },
            ],
            width: 400,
            height: 300,
            mark: { type: LINE, point: { filled: false, fill: "white" } },
            encoding: {
                x: {
                    field: "date",
                    type: "temporal",
                },
                y: { field: "price", type: "quantitative" },
                color: { field: "symbol", type: "nominal" },
            },
        };

        return <VegaLite spec={spec} actions={false} />;
    };
}
