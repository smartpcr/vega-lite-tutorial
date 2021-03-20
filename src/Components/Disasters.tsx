import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR, CIRCLE } from "vega-lite/build/src/mark";

export interface IDisastersProps {
    dataUrl: string;
}

export class Disasters extends React.Component<IDisastersProps> {
    public render(): JSX.Element {
        return <div>
            {this.getBubblePlot()}
        </div>;
    }

    private readonly getBubblePlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            params: [
                {
                    name: "view",
                    select: "interval",
                    bind: "scales"
                }
            ],
            width: 600,
            height: 400,
            mark: {
                type: CIRCLE,
                opacity: 0.8,
                stroke: "black",
                strokeWidth: 1
            },
            encoding: {
                x: { field: "Year", type: "temporal", axis: {grid: false} },
                y: { field: "Entity", type: "nominal", axis: {title: ""} },
                size: {
                    field: "Deaths",
                    type: "quantitative",
                    title: "Annual Global Deaths",
                    legend: { clipHeight: 30 },
                    scale: { rangeMax: 5000 }
                },
                color: {field: "Entity", type: "nominal", legend: null}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}