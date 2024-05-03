import React, { Fragment } from 'react';
import "./About.css";

const About = () => {
    return (
        <Fragment>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div   >
                        <h2 class="text-center">Outline</h2>
                        <hr></hr>
                        <div class="text-center">
                            <div class="col-sm-6 text-center">
                                <img src="picture2.png" alt="System setup" width="400" height="300" />
                            </div>
                            <div class="text-center">
                                <img src="picture3.png" alt="System setup" width="400" height="300" />
                            </div>
                        </div>
                        <h4>Abstract</h4><hr></hr>
                        <p>Quantifying cells in a defined region of biological tissue is critical for many clinical and preclinical studies, especially in pathology, toxicology, cancer, and behavior. Unbiased stereology is the state-of-art method for quantification of the total number and other morphometric parameters of stained objects in a defined region of biological tissue.  Manual stereology for total cell number estimate is time and labor intensive. Moreover, manual stereology is subjective due to variable training, fatigue, inter- and intra-rater variability, and other human factors. As part of a program to develop accurate, precise, and more efficient automatic approaches for quantifying morphometric changes in biological tissue, our work focuses on automating the unbiased stereology to estimate the total number of histologically stained cells with comparable accuracy to human experts, but with higher throughput efficiency and test-retest repeatability.</p>
                        <br/><br/><br/>
                        <div className="text-center">
                            {/* <span className="glyphicon glyphicon-globe logo slideanim"></span> */}
                            <div className="text-center">
                                    <img src="picture4.png" alt="System setup"  />
                            </div>
                            <br/><br/><br/>
                            {/* <div class="text-center">
                                    <img src="picture5.png" alt="System setup" width="400" height="300" />
                            </div> */}
                        </div>
                        
                        {/* <div class="text-center">
                            <img src="picture6.png" alt="System setup" width="800" height="300" />
                        </div> */}
                        {/* <br /><button className="btn btn-default btn-lg">Get in Touch</button> */}
                    </div>
                    {/* <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"></span>
                    </div> */}
                </div>
            </div>

            {/* <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>Our Values</h2><br />
                        <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                        <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
};

export default About;
