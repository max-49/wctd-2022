function Footer() {
    return (
        <div className="footer" style={{backgroundColor: "#B59286"}}>
        <div className="card" style={{backgroundColor: "#B59286"}}>
            <div className="card-body">
                {/* <div className="ui-bar">
                </div> */}
                <div className="footerbuttons">
                    {/* w3schools stuff */}
                    <a href="https://www.youtube.com/channel/UCpeWHQ0cHxD5KP7pPy07D8Q" className="fa fa-youtube" alt="YouTube" target="_blank" rel="noreferrer">&#8205;</a>
                    <a href="https://www.instagram.com/firstlookdermatologic/" className="fa fa-instagram" alt="Instagram" target="_blank" rel="noreferrer">&#8205;</a>
                    <a href="https://www.twitter.com/FirstLookDerma" className="fa fa-twitter" alt="Twitter" target="_blank" rel="noreferrer">&#8205;</a>
                    <a href="https://www.facebook.com/FirstLook-112298388026866/" className="fa fa-facebook" alt="Facebook" target="_blank" rel="noreferrer">&#8205;</a>
                </div>
                <div className="copyright">
                    <h6>wearefirstlook@gmail.com </h6>
                    <h6>All site content copyright &copy; 2022 FirstLook | FirstLook. All rights reserved.</h6>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;