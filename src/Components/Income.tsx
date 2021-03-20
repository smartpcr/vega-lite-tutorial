import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR, CIRCLE } from "vega-lite/build/src/mark";

export interface IIncomeProps {
    dataUrl: string;
}

export class Income extends React.Component<IIncomeProps> {
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
            width: 500,
            height: 300,
            mark: CIRCLE,
            encoding: {
                x: { field: "income", scale: {type: "log"} },
                y: { field: "health", type: "quantitative", scale: { zero: false }, axis: { minExtent: 30 } },
                size: { field: "population", type: "quantitative" },
                color: {value: "#000"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}