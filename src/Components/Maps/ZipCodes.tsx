import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import {BAR, CIRCLE, GEOSHAPE, TEXT} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export interface IZipCodesProps {
    dataUrl: string;
}

export class ZipCodes extends React.Component<IZipCodesProps> {
    public render() {
        return <div>
            {this.getMap()}
        </div>;
    }

    private readonly getMap = (): JSX.Element => {
        const spec: VisualizationSpec = {
            title: "Zip Codes",
            data: {
                url: this.props.dataUrl
            },
            transform: [{
                calculate: "substring(datum.zip_code, 0, 1)",
                as: "digit"
            }],
            projection: {
                type: "albersUsa"
            },
            width: 600,
            height: 400,
            mark: CIRCLE,
            encoding: {
                longitude: { field: "longitude", type: "quantitative" },
                latitude: { field: "latitude", type: "quantitative" },
                size: { value: 1 },
                color: {field: "digit", type: "nominal"}
            }
        };
        
        return <VegaLite spec={spec} actions={false} />;
    }
}