import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { ProjectionType } from "vega";
import {BAR, CIRCLE, GEOSHAPE, TEXT} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export interface IWorldProps {
    geoJsonUrl: string;
}

export interface IWorldState {
    projection: ProjectionType;
}

export class World extends React.Component<IWorldProps, IWorldState> {
    constructor(props: IWorldProps) {
        super(props);
        this.state = {
            projection: "equalEarth"
        };
    }

    public render() {
        return <div>
            {this.getCommands()}
            {this.getMap()}
        </div>;
    }

    private readonly getCommands = (): JSX.Element => {
        const allProjections: ProjectionType[] = [
            "albers",
            "albersUsa",
            "azimuthalEqualArea",
            "azimuthalEquidistant",
            "conicConformal",
            "conicEqualArea",
            "conicEquidistant",
            "equalEarth",
            "equirectangular",
            "gnomonic",
            "mercator",
            "naturalEarth1",
            "orthographic",
            "stereographic",
            "transverseMercator"
        ];
        return <div>
            <select name="projection" onChange={e => this.setProjection(e.target.value as ProjectionType)}>
                {
                    allProjections.map((p, i) => {
                        return <option key={i} value={p}>{p}</option>
                    })
                }
            </select>
        </div>;
    }

    private readonly getMap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            title: "Countries",
            width: 600,
            height: 400,
            layer: [
                {
                    data: {
                        url: this.props.geoJsonUrl,
                        format: {
                            type: "topojson",
                            feature: "countries"
                        }
                    },
                    transform: [{ 
                        filter: "datum.id !== 10" // remove Antarctica
                    }],
                    projection: {
                        type: this.state.projection
                    },
                    mark: {
                        type: GEOSHAPE,
                        fill: "lightgray",
                        stroke: "white"
                    }
                }
            ]
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }

    private setProjection = (value: ProjectionType): void => {
        this.setState({ projection: value });
    }
}