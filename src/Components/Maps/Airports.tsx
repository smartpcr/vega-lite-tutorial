import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import {BAR, CIRCLE, GEOSHAPE, TEXT} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export interface IAirportsProps {
    dataUrl: string;
    geoJsonUrl: string;
}

export class Airports extends React.Component<IAirportsProps> {
    public render() {
        return <div>
            {this.getMap()}
        </div>;
    }

    private readonly getMap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            title: "Airports",
            width: 600,
            height: 400,
            layer: [
                {
                    data: {
                        url: this.props.geoJsonUrl,
                        format: {
                            type: "topojson",
                            feature: "states"
                        }
                    },
                    projection: {
                        type: "albersUsa"
                    },
                    mark: {
                        type: GEOSHAPE,
                        fill: "lightgray",
                        stroke: "white"
                    }
                },
                {
                    data: {
                        url: this.props.dataUrl
                    },
                    projection: {
                        type: "albersUsa"
                    },
                    mark: CIRCLE,
                    encoding: {
                        longitude: { field: "longitude", type: "quantitative" },
                        latitude: { field: "latitude", type: "quantitative" },
                        size: { value: 10 },
                        color: { value: "steelblue"}
                    }
                }
            ]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}