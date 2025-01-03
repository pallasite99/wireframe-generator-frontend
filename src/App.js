// src/App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
    const [inputData, setInputData] = useState({
        projectName: "",
        layoutType: "grid",
        pages: 1,
    });

    const [wireframe, setWireframe] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const generateWireframe = async () => {
        try {
            const response = await axios.post("http://localhost:5000/generate", inputData);
            setWireframe(response.data.wireframe);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="App">
            <h1>Wireframe Generator</h1>
            <form>
                <label>
                    Project Name:
                    <input
                        type="text"
                        name="projectName"
                        value={inputData.projectName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Layout Type:
                    <select
                        name="layoutType"
                        value={inputData.layoutType}
                        onChange={handleChange}
                    >
                        <option value="grid">Grid</option>
                        <option value="list">List</option>
                    </select>
                </label>
                <label>
                    Number of Pages:
                    <input
                        type="number"
                        name="pages"
                        value={inputData.pages}
                        onChange={handleChange}
                    />
                </label>
                <button type="button" onClick={generateWireframe}>
                    Generate Wireframe
                </button>
            </form>

            {wireframe && (
              <div className="wireframe-output">
                  <h2>Generated Wireframe</h2>
                  <pre className="pretty-json">
                      {JSON.stringify(wireframe, null, 2)}
                  </pre>
              </div>
            )}
        </div>
    );
};

export default App;
