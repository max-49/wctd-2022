function Contact() {
    return (
        <div className="App">
            <div style= {{borderStyle:"double", borderWidth:"8px", backgroundColor:"#c49680", textAlign:"center", padding:"10px"}}>
                <h1 style={{textAlign:"center"}}>Join us on our Mission to diagnose Melanoma effectilvely</h1>
                <table style={{marginLeft:"auto", marginRight:"auto"}}>
                    <tr style={{width:"100%", backgroundColor:"#d9acc8", fontSize:"30px", textAlign:"center", borderStyle:"double", borderWidth:"8px", padding:"10px"}}>
                        <td>Recieve constant updates.</td>
                        <td><a href="https://www.instagram.com/firstlookdermatologic/"><img src='https://clipartcraft.com/images/instagram-logo-transparent-png-format-3.png' style={{height:"80px"}}/></a></td>
                        
                    </tr>
                    <tr style={{width:"100%", backgroundColor:"#c49670", fontSize:"30px", textAlign:"center" , borderStyle:"double", borderWidth:"8px", padding:"10px"}}>     
                        <td> Watch our videos  </td>
                        <td><a href="https://www.youtube.com/channel/UCpeWHQ0cHxD5KP7pPy07D8Q"><img src='https://all-4-one.com/wp-content/uploads/2020/12/youtube-icon-logo-logo-icon-png-svg.png' style={{height:"50px"}}/></a></td>
                    </tr>
                    <tr style={{width:"100%", backgroundColor:"#d9acc8", fontSize:"30px", textAlign:"center" , borderStyle:"double", borderWidth:"8px", padding:"10px"}}> 
                        <td>  Talk to us on Twitter   </td>
                        <td><a href="https://twitter.com/FirstLookDerma"><img src='https://clipartcraft.com/images/twitter-logo-transparent-background-2.png' style={{height:"50px"}}/></a></td>
                    </tr>
                    <tr style={{width:"100%", backgroundColor:"#c49670", fontSize:"30px", textAlign:"center" , borderStyle:"double", borderWidth:"8px", padding:"10px"}}> 
                        <td>  Follow us on Facebook  </td>
                        <td><a href="https://www.facebook.com/FirstLook-112298388026866/"><img src='https://www.freeiconspng.com/uploads/facebook-logo-facebook-logo-9.png' style={{height:"80px"}}/></a></td> 
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Contact;