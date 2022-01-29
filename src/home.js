import Logo from './Logo.png'
import FadeInSection from './fade.js'
import doctors from './doctors.jpeg'

function Home() {
    return(
        <div className="parallax">
            {/* <div className="parallax"></div> */}
            <spacer type="vertical" width="100" height="100">&zwnj;</spacer>
            <FadeInSection>
                <div className="flex-container">
                    <div className="flex-child">
                        <img src={Logo} alt='' width="60%" />
                        <p><i>Our mission is to detect the early stages of melanoma in a quick and accessible manner for healthcare providers. <br />What we're doing: creating an app that doctors can use to quickly detect melanoma.</i></p>
                    </div>              
                </div>
            </FadeInSection>
            <spacer type="vertical" width="100" height="100">&zwnj;</spacer>
            <div style={{height: "5%"}}></div>
            <FadeInSection>
                <div className="flex-container">
                    <div className="flex-child">
                        <h3>Who are we?</h3>
                        <p>We are FirstLook, a new startup company that aims to expedite the way that certain skin conditions are detected, since early detection saves lives. Currently, we are focusing on melanoma, the most prevelant type of skin cancer, and creating a Machine Learning algorithm that can detect if a mark is melanoma or not based on a picture. In the future, we hope to expand our horizons to cover more types of skin conditions.</p>
                    </div>
                </div>
            </FadeInSection>
            <spacer type="vertical" width="100" height="100">&zwnj;</spacer>
            <div style={{height: "5%"}}></div>
            <FadeInSection>
                <div className="flex-container">
                    <div className="flex-child">
                        <h3>Our method</h3>
                        <p></p>
                    </div>
                </div>
            </FadeInSection>
            <spacer type="vertical" width="100" height="100">&zwnj;</spacer>
            {/* <div className="parallax"></div> */}
        </div>
    );
}

export default Home;