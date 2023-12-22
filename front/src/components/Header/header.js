import "./header.css"


function Header() {
    return (
        <header>
            <div class="container">
                <div class="logo">
                    <img src="./calculator-600.png" alt="Man with Calculator"/>
                </div>
                <div class="title">
                    <h1 class="animate slideInRight title-text">Forex Algo Lab</h1>
                    <h3 class="animate slideInRight description"> A Simple Backtesting Application Powered By Flask and React</h3>
                </div>
            </div>
        </header>
    )
}

export default Header;