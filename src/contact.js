function Contact() {
    return (
        <div className="App">
            <div>
                <h1>Join us on our Mission to diagnose Melanoma effectilvely</h1>
                <table style={{marginLeft:"auto", marginRight:"auto"}}>
                    <tr>
                        <td><div style={{width:"100%", backgroundColor:"#d9acc8", fontSize:"30px", textAlign:"center"}}>  Recieve constant updates.  </div></td>
                        <td><img src='https://openasset.com/wp-content/uploads/2018/12/instagram-logo-png-transparent.png' style={{height:"80px"}}/></td>
                        
                    </tr>
                    <tr>     
                        <td><div style={{width:"100%", backgroundColor:"#c49670", fontSize:"30px", textAlign:"center"}}>  Watch our videos  </div></td>
                        <td><img src='https://www.seeklogo.net/wp-content/uploads/2016/06/YouTube-icon-big.png' style={{height:"50px"}}/></td>
                    </tr>
                    <tr>
                        <td><td><div style={{width:"100%", backgroundColor:"#d9acc8", fontSize:"30px", textAlign:"center"}}>  Talk to us on Twitter   </div></td></td>
                        <td><td><img src='https://clipartcraft.com/images/twitter-logo-transparent-background-2.png' style={{height:"60px"}}/></td></td>
                    </tr>
                    <tr> 
                        <td><div style={{width:"100%", backgroundColor:"#c49670", fontSize:"30px", textAlign:"center"}}>  Follow us on Facebook  </div></td>
                        <td><img src='https://www.freeiconspng.com/uploads/facebook-logo-facebook-logo-9.png' style={{height:"80px"}}/></td> 
                    </tr>
               </table>
            </div>
        </div>
    );
}

export default Contact