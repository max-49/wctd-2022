import Logo from './Logo.png'

function Home() {
    return(
        <div className="parallax">
            {/* <div className="parallax"></div> */}
            <spacer type="vertical" width="100" height="100"> ♢ </spacer>
            <div className="flex-container">
                <div className="flex-child">
                    <img src={Logo} alt='' />
                    <p><i>Our mission is to detect the early stages of melanoma in a quick and accessible manner for healthcare providers. <br />What we're doing: creating an app that doctors can use to quickly detect melanoma.</i></p>
                </div>              
            </div>
            <spacer type="vertical" width="100" height="100"> ♢ </spacer>
            {/* <div className="parallax"></div> */}
        </div>
    );
}

export default Home;