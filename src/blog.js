import Navbar from './navbar.js';
import Footer from './footer.js'
import './style.css';
function Blog(){
    return (
        <div>
            <table style={{marginLeft:"auto", marginRight:"auto", textAlign:"center"}}>
                <h2>Join us on our Mission to diagnose Melanoma effectively</h2>
                <h3>Keep up with the most recent updates</h3>
                <tr>
                    <div style= {{borderStyle:"double", borderWidth:"8px", backgroundColor:"#eccfe2", textAlign:"center", padding:"10px"}}>
                        <img src="https://static01.nyt.com/images/2012/12/04/nyregion/Y-HOSPITALS1/Y-HOSPITALS1-superJumbo.jpg" style={{width: "80%"}}></img>
                        <h3>1/28/2022</h3>
                        <p>Melanoma is the most dangerous type of skin cancer. while they only occur for 1% of skin cancer patients, it also causes the majority of deaths by skin cancer. Melanoma begins to infect the skin pigmentation cells called melanocytes but if left untreated it will worsen and affect lymph nodes, proteins which filter out harmful substances, and cause ulcers. If it is left for even longer it will spread to other parts of the body on the bloodstream, causing multiple other tumers. Given the sevarity of this cancer, early detection is absolutely nessesary. However this is othen difficult because of the absence of trained professionals. Hence First Look was born. With an manchine learning model, We diagnose melanoma with a startling accuracy. This can be used to detect melanoma easily and distinguish it from regular moles or skin blemishes.</p>
                    </div>
                    <br/>
                    <br/>
                    <div style= {{borderStyle:"double", borderWidth:"8px", backgroundColor:"#eccfe2", textAlign:"center", padding:"10px"}}>
                        <img src="https://www.verdict.co.uk/wp-content/uploads/2019/06/shutterstock_744393142.jpg" style={{width: "80%"}}></img>
                        <h3>1/29/2022</h3>
                        <p>The new first look ML machine has been trained and ready to detect melanoma. and best of all it is available to use FOR FREE on this website. So hurry up and bookmark this site. This is an incredible tool to help YOU SAVE more LIVES.</p>
                    </div>
                </tr>
            </table>
        </div>
        //citations
        /*https://www.cancer.org/cancer/melanoma-skin-cancer.html*/
    );
}

export default Blog;