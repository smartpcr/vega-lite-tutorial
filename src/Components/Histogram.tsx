import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR } from "vega-lite/build/src/mark";

export interface IHistogramProps {
    dataUrl: string;
}

export class Histogram extends React.Component<IHistogramProps> {
    public render(): JSX.Element {
        return <div>
            {this.getBinnedBarchart()}
        </div>;
    }

    private readonly getBinnedBarchart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: BAR,
            encoding: {
                x: { field: "bin_start", bin: { binned: true, step: 2 } },
                x2: { field: "bin_end"},
                y: { field: "count", type: "quantitative", axis: null },
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}