import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR } from "vega-lite/build/src/mark";

export interface IBarleyProps {
    dataUrl: string;
}

export class Barley extends React.Component<IBarleyProps> {
    public render(): JSX.Element {
        return <div>
            {this.getBarChart()}
        </div>;
    }

    private readonly getBarChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: { step: 17 },
            mark: BAR,
            encoding: {
                x: {aggregate: "sum", field: "yield"},
                y: { field: "variety" },
                color: {field: "site"}
            },
            layer: [
                { mark: BAR },
                {
                    mark: {
                        type: "text",
                        align: "left",
                        baseline: "middle",
                        dx: 3
                    },
                    encoding: {
                        text: {field: "yield", type: "quantitative"}
                    }
                }
            ]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}