function Contact() {
    return (
        <div className="App">
            <div style= {{borderStyle:"outset", borderWidth:"8px", backgroundColor:"#f2e9ef", textAlign:"center", padding:"10px"}}>
                <h1 style={{textAlign:"center"}}>Keep up with us as we strive to better find ways to detect melanoma early.</h1>
                <br/><br/>
                <table style={{marginLeft:"auto", marginRight:"auto"}}>
                    <tr style={{width:"100%", backgroundColor:"#f9e1f1", fontSize:"30px", textAlign:"center", borderStyle:"double", borderWidth:"8px", padding:"10px"}}>
                        <td>Receive constant updates.</td>
                        <td><a href="https://www.instagram.com/firstlookdermatologic/"><img alt='' src='https://clipartcraft.com/images/instagram-logo-transparent-png-format-3.png' style={{height:"80px"}}/></a></td>
                        
                    </tr>
                    <tr style={{width:"100%", backgroundColor:"#faeee1", fontSize:"30px", textAlign:"center" , borderStyle:"double", borderWidth:"8px", padding:"10px"}}>     
                        <td> Watch our videos  </td>
                        <td><a href="https://www.youtube.com/channel/UCpeWHQ0cHxD5KP7pPy07D8Q"><img alt='' src='https://all-4-one.com/wp-content/uploads/2020/12/youtube-icon-logo-logo-icon-png-svg.png' style={{height:"50px"}}/></a></td>
                    </tr>
                    <tr style={{width:"100%", backgroundColor:"#f9e1f1", fontSize:"30px", textAlign:"center" , borderStyle:"double", borderWidth:"8px", padding:"10px"}}> 
                        <td>  Talk to us on Twitter   </td>
                        <td><a href="https://twitter.com/FirstLookDerma"><img alt='' src='https://clipartcraft.com/images/twitter-logo-transparent-background-2.png' style={{height:"50px"}}/></a></td>
                    </tr>
                    <tr style={{width:"100%", backgroundColor:"#faeee1", fontSize:"30px", textAlign:"center" , borderStyle:"double", borderWidth:"8px", padding:"10px"}}> 
                        <td>  Follow us on Facebook  </td>
                        <td><a href="https://www.facebook.com/FirstLook-112298388026866/"><img alt='' src='https://www.freepnglogos.com/uploads/facebook-logo-13.png' style={{height:"70px"}}/></a></td> 
                    </tr>
                </table>
            </div>
            <div style={{padding: "5%", backgroundColor: "#cdb8b6"}}>
                <h3>Donate to our cause and help fund the future of medical innovation!</h3>
                <form onSubmit={(e) => {alert('Your donation has been submitted! Thank you for your generous donation.'); e.preventDefault(); window.location.reload(false);}}>
                    <div class="mb-3">
                        <label for="card" class="form-label">Credit Card Number</label>
                        <input type="text" class="form-control" maxlength="16" id="card" required />
                        <label for="date" class="form-label">Expiration Date</label>
                        <input type="month" class="form-control" id="date" required />
                        <label for="cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" maxlength="3" id="cvv" required />
                    </div>
                    <div class="mb-3">
                        <h5>Donation amount (any amount is appreciated!)</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" selected />
                            <label class="form-check-label" for="flexRadioDefault1">$5</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">$10</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">$25</label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">$50</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;