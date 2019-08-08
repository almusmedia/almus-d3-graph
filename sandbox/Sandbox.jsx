import React from "react";
import "./styles.css";
import Graph from "../src/components/graph/Graph";

export default class Sandbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                links: [
                    {
                        source: "First",
                        target: "Second",
                        label: "432233334",
                        fontColor: "red",
                        strokeWidth: 3,
                        semanticStrokeWidth: true,
                        highlightColor: "green",
                    },
                ],
                nodes: [
                    {
                        id: "First",
                        x: 100,
                        y: 100,
                        size: 300,
                    },
                    {
                        id: "Second",
                        x: 300,
                        y: 200,
                        size: 100,
                    },
                    {
                        id: "Third",
                        x: 400,
                        y: 200,
                        size: 200,
                    },
                    {
                        id: "Forth",
                        x: 500,
                        y: 200,
                        size: 400,
                    },
                ],
                focusedNodeId: "Second",
            },
            config: {
                directed: true,
                staticGraph: true,
                linkHighlightBehavior: true,
                nodeHighlightBehavior: true,
                node: {
                    highlightColor: "#dd0000",
                    strokeWidth: 1,
                    labelProperty: node => {
                        return (
                            <text>
                                <tspan x="0">{node.id}</tspan>
                                <tspan x="0" dy="1.2em">
                                    {133234.23}
                                </tspan>
                            </text>
                        );
                    },
                },
                link: {
                    renderLabel: true,
                    markerId: "marker-large",
                    strokeWidth: 1,
                },
                height: window.innerHeight,
                width: window.innerWidth,
            },
        };
    }

    render() {
        return <Graph ref="graph" id="test" data={this.state.data} config={this.state.config} />;
    }
}
