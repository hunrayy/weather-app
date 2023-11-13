import React from "react"
const Weather = () => {
    return(
        <>
        <div className="app">
            <div className="overlay">
                <div className="container">
                    <div className="section section__inputs">
                        <input type="text" name="city" placeholder="Enter City..." />
                        <button>0F</button>
                    </div>

                    <div className="section section__temperature">
                        <div className="icon">
                            <h3>London, GB</h3>
                            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather icon" />
                            <h3>Cloudy</h3>

                        </div>
                        <div className="temperature">
                            <h1>340C</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}

export default Weather