import chichi from './chichi.png'
import max from './max.png'
import anika from './anika.jpeg'

function About() {
    return (
        <div className="about-us">
            <div class="team-boxed">
                <div class="container">
                    <div class="intro">
                        <h2 class="text-center">Who We Are </h2>
                        <p class="text-center">Meet the team of innovators who made this revolutionary product a reality.</p>
                    </div>
                    <div class="row people">
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img src={anika} class="rounded-circle" alt='' id = "anika"/>
                                <h3 class="name">Anika Mahesh</h3>
                                <p class="title">Willows Preparatory School</p>
                                <p class="description">Anika Mahesh is a sophomore at Willows Preparatory School. As our website programmer and media specialist, she built our blog page, managed our social presence, and led the process of designing our machine learning model. </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img src={chichi} class="rounded-circle" alt='' id = "chichi" />
                                <h3 class="name">Chigozirim Ifebi</h3>
                                <p class="title">Elmont Memorial High School</p>
                                <p class="description">Chigozirim is a junior at Elmont Memorial High School. She partook in programming the webpage, more specifically the "About us" page and the footer design. She also assisted with the company's graphic design as the illustrator of the company's logo and app interface. </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img src={max} class="rounded-circle" alt='' />
                                <h3 class="name">Massimo Marino</h3>
                                <p class="title">John F. Kennedy High School</p>
                                <p class="description">Massimo is a junior at John F. Kennedy High School. His main role in this project was bringing all parts of the website together into one website and managing design across the entire website. He led the process of designing the front page and making other look uniform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default About;