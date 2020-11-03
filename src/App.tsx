import React from "react"
import "./App.css"
import Timer from "./components/Timer"

function App() {
    const [isShow, setIsShow] = React.useState(false)
    return (
        <div id="wrapper">
            <header id="header"></header>
            <main id="main">
                <div className="container">
                    <input
                        onClick={() => setIsShow(!isShow)}
                        type="checkbox"
                        id="iconButton"
                    />
                    <label htmlFor="iconButton">
                        <div></div>
                    </label>
                    {isShow && <Timer />}
                </div>
            </main>
            <footer id="footer"></footer>
        </div>
    )
}

export default App
