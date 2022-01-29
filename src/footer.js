function Footer() {
    return (
        <div className="footer">
            <hr />
            <div className="card">
                <div className="card-body">
                    <div className="ui-bar">
                    </div>
                    <div className="footerbuttons">
                        {/* w3schools stuff */}
                        <a href="https://www.youtube.com/channel/UCSSbZRKHS72VuwhjX0-APKg" className="fa fa-youtube" alt="YouTube" target="_blank" rel="noreferrer">&#8205;</a>
                        <a href="https://www.instagram.com/rwc_2021/" className="fa fa-instagram" alt="Instagram" target="_blank" rel="noreferrer">&#8205;</a>
                        <a href="https://twitter.com/FacultyRwc" className="fa fa-twitter" alt="Twitter" target="_blank" rel="noreferrer">&#8205;</a>
                        <a href="https://www.facebook.com/joana.doe.334" className="fa fa-facebook" alt="Facebook" target="_blank" rel="noreferrer">&#8205;</a>
                    </div>
                    <div className="copyright">
                        <h6>wearefirstlook@gmail.com </h6>
                        <h6>All site content copyright &copy; 2021 RWC | RWC. All rights reserved.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;