import React from "react";
import Plot from "react-plotly.js";

const Visualizations = () => {
    return (
        <div>
            <h1>Analytics</h1>
            <Plot
                data={[
                    { x: ["Post 1", "Post 2"], y: [10, 20], type: "bar", marker: { color: "blue" } },
                ]}
                layout={{ title: "User Interactions" }}
            />
        </div>
    );
};

export default Visualizations;
