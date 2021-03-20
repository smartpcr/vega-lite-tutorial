import { count } from "console";
import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR, LINE, TICK } from "vega-lite/build/src/mark";
import { Type } from "vega-lite/build/src/type";

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
            width: 400,
            height: { step: 17 },
            mark: BAR,
            encoding: {
                x: {aggregate: "sum", field: "yield"},
                y: { field: "variety" },
                color: {field: "site"}
                
            },
            data: { url: this.props.dataUrl }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}