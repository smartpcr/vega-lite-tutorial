import React from "react";
import { VegaLite, VisualizationSpec } from "react-vega";
import { BAR } from "vega-lite/build/src/mark";
import { Type } from "vega-lite/build/src/type";

export const BarChart: React.FunctionComponent = (): JSX.Element => {
    const barData = {
        table: [
            { a: "A", b: 28 },
            { a: "B", b: 55 },
            { a: "C", b: 43 },
            { a: "D", b: 91 },
            { a: "E", b: 81 },
            { a: "F", b: 53 },
            { a: "G", b: 19 },
            { a: "H", b: 87 },
            { a: "I", b: 52 },
        ],
    };

    const spec: VisualizationSpec = {
        width: 400,
        height: 200,
        encoding: {
            x: { field: "a", type: Type.ordinal },
            y: { field: "b", type: Type.quantitative },
        },
        data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array
        layer: [
            {
                mark: {type: BAR, cornerRadiusTopLeft: 5, cornerRadiusTopRight: 5},
            },
            {
                mark: {
                    type: "text",
                    align: "left",
                    baseline: "middle",
                    dx: -2,
                    dy: -5
                },
                encoding: {
                    text: {field: "b", type: "quantitative"}
                }
            }
        ]
    };

    const data2 = {
        values: [
            { task: "A", start: 1, end: 3 },
            { task: "B", start: 3, end: 8 },
            { task: "C", start: 8, end: 10 },
        ],
    };

    const spec2: VisualizationSpec = {
        width: 400,
        height: 200,
        mark: BAR,
        encoding: {
            y: { field: "task", type: Type.ordinal },
            x: { field: "start", type: Type.quantitative },
            x2: { field: "end", type: Type.quantitative },
        },
        data: data2,
    };

    const data3 = {
        "values": [
            { "a": "A", "b": -28 }, { "a": "B", "b": 55 }, { "a": "C", "b": -33 },
            { "a": "D", "b": 91 }, { "a": "E", "b": 81 }, { "a": "F", "b": 53 },
            { "a": "G", "b": -19 }, { "a": "H", "b": 87 }, { "a": "I", "b": 52 }
        ]
    };

    const spec3: VisualizationSpec = {
        width: 400,
        height: 200,
        mark: BAR,
        encoding: {
            x: { field: "a", type: Type.nominal, axis: {domain: false, ticks: false, labelAngle: 0, labelPadding: 4} },
            y: {
                field: "b",
                type: Type.quantitative,
                axis: {
                    gridColor: {
                        condition: { test: "datum.value === 0", value: "#b00" },
                        value: "#aad"
                    }
                }
            }
        },
        data: data3,
    };

    return (
        <div>
            <VegaLite spec={spec} data={barData} actions={false} />
            <VegaLite spec={spec2} actions={false} />
            <VegaLite spec={spec3} actions={false} />
        </div>
    );
};
