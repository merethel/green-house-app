import React, { useState } from "react";

function Data({ data, setDataName, setNewData }) {
    const [activeTab, setActiveTab] = useState("tab1")

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
        setDataName(tabName)
        setNewData()
    }


    return (
        <>
            <div className="tab-box">
                <div className="tab">
                    <button
                        className={activeTab === "humidity" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("humidity")}
                    >
                        Tab 1
                    </button>
                    <button
                        className={activeTab === "temperature" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("temperature")}
                    >
                        Tab 2
                    </button>
                    <button
                        className={activeTab === "co2" ? "tablinks active" : "tablinks"}
                        onClick={() => handleTabClick("co2")}
                    >
                        Tab 3
                    </button>
                </div>

                <div
                    id="humidity"
                    className={activeTab === "humidity" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "humidity" ? "block" : "none" }}
                >
                    <h3>humidity</h3>
                    <div>
                        {
                            data.map(item => {
                                return (
                                    <>
                                        <div className="group" key={item}>
                                            <h3>{item}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <p>Content for Tab 1 goes here.</p>



                </div>

                <div
                    id="temperature"
                    className={activeTab === "temperature" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "temperature" ? "block" : "none" }}
                >
                    <h3>temperature</h3>
                    <div>
                        {
                            data.map(item => {
                                return (
                                    <>
                                        <div className="group" key={item}>
                                            <h3>{item}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <p>Content for Tab 2 goes here.</p>
                </div>

                <div
                    id="co2"
                    className={activeTab === "co2" ? "tabcontent show" : "tabcontent"}
                    style={{ display: activeTab === "co2" ? "block" : "none" }}
                >
                    <h3>co2</h3>
                    <div>
                        {
                            data.map(item => {
                                return (
                                    <>
                                        <div className="group" key={item}>
                                            <h3>{item}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <p>Content for Tab 3 goes here.</p>
                </div>
            </div>
        </>
    )
}

export default Data