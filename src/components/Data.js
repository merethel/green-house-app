import React, { useState } from "react";

function Data({ data, setDataName, setNewData }) {
    const [activeTab, setActiveTab] = useState("humidity")

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
        setDataName(tabName)
    }


    return (
        <>
            <div className="tab-box">
                <div className="tab">
                    <button
                        className={activeTab === "humidity" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("humidity")}
                    >
                        Humidity
                    </button>
                    <button
                        className={activeTab === "temperature" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("temperature")}
                    >
                        Temperature
                    </button>
                    <button
                        className={activeTab === "co2" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("co2")}
                    >
                        CO2
                    </button>
                </div>

                <div
                    id="humidity"
                    className={activeTab === "humidity" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "humidity" ? "block" : "none" }}
                >
                    <div className="header-data">
                        <h3>Humidity</h3>
                    </div>
                    <div className="table-data">
                        <table>

                            <tbody>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>Humidity</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

                <div
                    id="temperature"
                    className={activeTab === "temperature" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "temperature" ? "block" : "none" }}
                >
                    <div className="header-data">
                        <h3>Temperature</h3>
                    </div>
                    <div className="table-data">
                        <table>

                            <tbody>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>Temperature</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>

                <div
                    id="co2"
                    className={activeTab === "co2" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "co2" ? "block" : "none" }}
                >
                    <div className="header-data">
                        <h3>CO2</h3>
                    </div>
                    <div className="table-data">
                        <table>

                            <thead>
                                <tr>
                                    <th>Date and Time</th>
                                    <th>CO2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                    {
                                        data.map(data => {
                                            return (
                                                <div className="group" key={data.date}>

                                                        <tr>
                                                            <td>{data.date}</td>
                                                            <td>{data.data}</td>
                                                        </tr>
                                                </div>
                                            )
                                        })
                                    }
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Data