import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import {BAR, CIRCLE, GEOSHAPE, TEXT} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export interface IStatesProps {
    dataUrl: string;
    geoJsonUrl: string;
}

export class States extends React.Component<IStatesProps> {
    public render() {
        return <div>
            {this.getMap()}
        </div>;
    }

    private readonly getMap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            title: "State Capitals",
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
                    encoding: {
                        longitude: { field: "lon", type: "quantitative" },
                        latitude: { field: "lat", type: "quantitative" },
                    },
                    layer: [
                        {
                            mark: { type: CIRCLE, color: "orange"}
                        },
                        {
                            mark: { type: TEXT, dy: -10 },
                            encoding: {
                                text: { field: "city", type: "nominal"}
                            }
                        }
                    ]
                }
            ]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}