import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { AREA, BAR } from "vega-lite/build/src/mark";

export interface IAreaChartProps {
    dataUrl: string;
}

export class AreaChart extends React.Component<IAreaChartProps> {
    public render(): JSX.Element {
        return <div>
            {this.GetDensityChart()}
        </div>;
    }

    private readonly GetDensityChart = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            transform: [
                {
                    density: "Body Mass (g)",
                    groupby: ["Species"],
                    extent: [2500, 6500]
                }
            ],
            width: 400,
            height: 80,
            mark: AREA,
            encoding: {
                x: { field: "value", type: "quantitative", title: "Body Mass (g)" },
                y: { field: "density", type: "quantitative", stack: "zero" },
                color: {field: "Species", type: "nominal"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}