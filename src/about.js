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
                    </div>
                    <div class="row people">
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img src={anika} alt='' />
                                <h3 class="name">Anika Mahesh</h3>
                                <p class="title">Musician</p>
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img src={chichi} alt='' />
                                <h3 class="name">Chigozirim Ifebi</h3>
                                <p class="title">Artist</p>
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 item">
                            <div class="box"><img src={max} alt='' />
                                <h3 class="name">Massimo Marino</h3>
                                <p class="title">Stylist</p>
                                <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id. Etiam dictum feugiat tellus, a semper massa. </p>
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