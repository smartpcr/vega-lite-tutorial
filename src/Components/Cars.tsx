import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR, CIRCLE, POINT } from "vega-lite/build/src/mark";

export interface ICarsProps {
    dataUrl: string;
}

export class Cars extends React.Component<ICarsProps> {
    public render(): JSX.Element {
        return <div>
            {this.getScatterPlot()}
            {this.getBubblePlot()}
            {this.getFilledCircles()}
        </div>;
    }

    private readonly getScatterPlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: POINT,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getBubblePlot = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: POINT,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
                size: {field: "Acceleration", type: "quantitative"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private readonly getFilledCircles = (): JSX.Element => {
        const spec: VisualizationSpec = {
            data: { url: this.props.dataUrl },
            width: 400,
            height: 300,
            mark: CIRCLE,
            encoding: {
                x: { field: "Horsepower", type: "quantitative" },
                y: { field: "Miles_per_Gallon", type: "quantitative" },
                size: {field: "Acceleration", type: "quantitative"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}