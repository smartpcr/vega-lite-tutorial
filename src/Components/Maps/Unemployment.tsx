import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import {AREA, BAR, GEOSHAPE, TEXT} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export interface IUnemploymentProps {
    dataUrl: string;
    industryUrl: string;
    geoJsonUrl: string;
}

export class Unemployment extends React.Component<IUnemploymentProps> {
    public render() {
        return <div>
            {this.getAreaMap()}
            {this.getMap()}
        </div>;
    }

    private readonly getAreaMap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            title: "Unemployment by Industries",
            width: 600,
            height: 400,
            data: {url: this.props.industryUrl},
            params: [
                {
                    name: "industry",
                    select: { type: "point", fields: ["series"] },
                    bind: "legend"
                }
            ],
            mark: AREA,
            encoding: {
                x: { timeUnit: "yearmonth", field: "date", axis: { domain: false, format: "%Y", tickSize: 0 } },
                y: { aggregate: "sum", field: "count", stack: "center", axis: null },
                color: { field: "series", scale: { scheme: "category20b" } },
                opacity: {
                    condition: { param: "industry", value: 1 },
                    value: 0.2
                }
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
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