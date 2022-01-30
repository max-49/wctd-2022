function Blog(){
    return (
        <div>
            <div className="text-center" style={{backgroundColor: "#E8DAD7", padding: "2%"}}>
                <h2>Keep up with our company as we find new and innovating ways to detect skin conditions using Machine Learning</h2>
                <hr />
            </div>
            <div className="text-center blog-container">
                <h3>Keep up with the most recent updates here:</h3>
                <div style= {{borderStyle:"double", borderWidth:"8px", backgroundColor:"#eccfe2", textAlign:"center", padding:"2%"}}>
                    <img alt='computer' src="https://www.verdict.co.uk/wp-content/uploads/2019/06/shutterstock_744393142.jpg" style={{width: "75%"}}></img>
                    <h3>1/29/2022</h3>
                    <p>Our ML algorithm has been trained and is ready to detect melanoma. What's best of all is that it is available to use FOR FREE on this website. Bookmark this website because this is an incredible tool that can save lives.</p>
                </div>
                <div style= {{borderStyle:"double", borderWidth:"8px", backgroundColor:"#eccfe2", textAlign:"center", padding:"2%"}}>
                    <img alt='hospital' src="https://static01.nyt.com/images/2012/12/04/nyregion/Y-HOSPITALS1/Y-HOSPITALS1-superJumbo.jpg" style={{width: "75%"}}></img>
                    <h3>1/28/2022</h3>
                    <p>Melanoma is the most dangerous type of skin cancer. While it is the diagnosis of only 1% of skin cancer patients, it is the type of skin cancer that causes the majority of deaths. Melanoma begins to infect the skin pigmentation cells called melanocytes, but if left untreated it will worsen and start to affect lymph nodes, proteins which filter out harmful substances, and cause ulcers. If it is left for even longer it will spread to other parts of the body through the bloodstream, causing multiple other tumors. Given the severity of this cancer, early detection is necessary. However, this is often difficult because of the absence of trained professionals. Thus, the birth of First Look. With a Machine Learning Algorithm, we are able to detect melanoma with a startling accuracy. This can be used to detect melanoma easily and distinguish it from regular moles or skin blemishes. </p>
                </div>
            </div>
        </div>
        //citations
        /*https://www.cancer.org/cancer/melanoma-skin-cancer.html*/
    );
}

export default Blog;

