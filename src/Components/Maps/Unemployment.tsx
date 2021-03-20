import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import {BAR, GEOSHAPE, TEXT} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export interface IUnemploymentProps {
    dataUrl: string;
    geoJsonUrl: string;
}

export class Unemployment extends React.Component<IUnemploymentProps> {
    public render() {
        return <div>
            {this.getMap()}
        </div>;
    }

    private readonly getMap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            title: "Unemployment Rate",
            data: {
                url: this.props.geoJsonUrl,
                format: {
                    type: "topojson",
                    feature: "counties"
                }
            },
            transform: [{
                lookup: "id",
                from: {
                    data: {
                        url: this.props.dataUrl
                    },
                    key: "id",
                    fields: ["rate"]
                }
            }],
            width: 600,
            height: 400,
            mark: GEOSHAPE,
            projection: {
                type: "albersUsa"
            },
            encoding: {
                color: { field: "rate", type: "quantitative" }
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}