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
        mark: BAR,
        encoding: {
            x: { field: "a", type: Type.ordinal },
            y: { field: "b", type: Type.quantitative },
        },
        data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array
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
        values: [
            {
                question: "Question 1",
                type: "Strongly disagree",
                value: 24,
                percentage: 0.7,
            },
            {
                question: "Question 1",
                type: "Disagree",
                value: 294,
                percentage: 9.1,
            },
            {
                question: "Question 1",
                type: "Neither agree nor disagree",
                value: 594,
                percentage: 18.5,
            },
            {
                question: "Question 1",
                type: "Agree",
                value: 1927,
                percentage: 59.9,
            },
            {
                question: "Question 1",
                type: "Strongly agree",
                value: 376,
                percentage: 11.7,
            },
            {
                question: "Question 2",
                type: "Strongly disagree",
                value: 2,
                percentage: 18.2,
            },
            {
                question: "Question 2",
                type: "Disagree",
                value: 2,
                percentage: 18.2,
            },
            {
                question: "Question 2",
                type: "Neither agree nor disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 2",
                type: "Agree",
                value: 7,
                percentage: 63.6,
            },
            {
                question: "Question 2",
                type: "Strongly agree",
                value: 11,
                percentage: 0,
            },
            {
                question: "Question 3",
                type: "Strongly disagree",
                value: 2,
                percentage: 20,
            },
            {
                question: "Question 3",
                type: "Disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 3",
                type: "Neither agree nor disagree",
                value: 2,
                percentage: 20,
            },
            { question: "Question 3", type: "Agree", value: 4, percentage: 40 },
            {
                question: "Question 3",
                type: "Strongly agree",
                value: 2,
                percentage: 20,
            },
            {
                question: "Question 4",
                type: "Strongly disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 4",
                type: "Disagree",
                value: 2,
                percentage: 12.5,
            },
            {
                question: "Question 4",
                type: "Neither agree nor disagree",
                value: 1,
                percentage: 6.3,
            },
            {
                question: "Question 4",
                type: "Agree",
                value: 7,
                percentage: 43.8,
            },
            {
                question: "Question 4",
                type: "Strongly agree",
                value: 6,
                percentage: 37.5,
            },
            {
                question: "Question 5",
                type: "Strongly disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 5",
                type: "Disagree",
                value: 1,
                percentage: 4.2,
            },
            {
                question: "Question 5",
                type: "Neither agree nor disagree",
                value: 3,
                percentage: 12.5,
            },
            {
                question: "Question 5",
                type: "Agree",
                value: 16,
                percentage: 66.7,
            },
            {
                question: "Question 5",
                type: "Strongly agree",
                value: 4,
                percentage: 16.7,
            },
            {
                question: "Question 6",
                type: "Strongly disagree",
                value: 1,
                percentage: 6.3,
            },
            {
                question: "Question 6",
                type: "Disagree",
                value: 1,
                percentage: 6.3,
            },
            {
                question: "Question 6",
                type: "Neither agree nor disagree",
                value: 2,
                percentage: 12.5,
            },
            {
                question: "Question 6",
                type: "Agree",
                value: 9,
                percentage: 56.3,
            },
            {
                question: "Question 6",
                type: "Strongly agree",
                value: 3,
                percentage: 18.8,
            },
            {
                question: "Question 7",
                type: "Strongly disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 7",
                type: "Disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 7",
                type: "Neither agree nor disagree",
                value: 1,
                percentage: 20,
            },
            { question: "Question 7", type: "Agree", value: 4, percentage: 80 },
            {
                question: "Question 7",
                type: "Strongly agree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 8",
                type: "Strongly disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 8",
                type: "Disagree",
                value: 0,
                percentage: 0,
            },
            {
                question: "Question 8",
                type: "Neither agree nor disagree",
                value: 0,
                percentage: 0,
            },
            { question: "Question 8", type: "Agree", value: 0, percentage: 0 },
            {
                question: "Question 8",
                type: "Strongly agree",
                value: 2,
                percentage: 100,
            },
        ],
    };

    const spec3: VisualizationSpec = {
        width: 400,
        height: 200,
        mark: BAR,
        encoding: {
            y: { field: "task", type: Type.ordinal },
            x: { field: "start", type: Type.quantitative },
            x2: { field: "end", type: Type.quantitative },
        },
        data: data3,
        transform: [
            
        ]
    };

    return (
        <div>
            <VegaLite spec={spec} data={barData} actions={false} />
            <VegaLite spec={spec2} actions={false} />
        </div>
    );
};
