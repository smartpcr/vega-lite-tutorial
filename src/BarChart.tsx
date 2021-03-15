import React from "react";
import { VegaLite } from "react-vega";
import {BAR} from 'vega-lite/build/src/mark';
import {Type} from 'vega-lite/build/src/type';

export const BarChart: React.FunctionComponent = (): JSX.Element => {
    const barData = {
        table: [
            { a: 'A', b: 28 },
            { a: 'B', b: 55 },
            { a: 'C', b: 43 },
            { a: 'D', b: 91 },
            { a: 'E', b: 81 },
            { a: 'F', b: 53 },
            { a: 'G', b: 19 },
            { a: 'H', b: 87 },
            { a: 'I', b: 52 },
        ],
    };

    const spec = {
        width: 400,
        height: 200,
        mark: BAR,
        encoding: {
            x: { field: 'a', type: Type.ordinal },
            y: { field: 'b', type: Type.quantitative },
        },
        data: { name: 'table' }, // note: vega-lite data attribute is a plain object instead of an array
    };
    
    return <VegaLite spec={spec} data={barData} />;
}