import React from 'react';

const Services = () => {
    return (
        <div id="services" className="container-fluid bg-grey">
            <h3>Publications</h3>
            <hr class="new1"></hr>
            {/* <h4>What we offer</h4> */}
            <br />


            <div className="container-fluid bg-grey">
                <div className="row">
                    
                    {/* <div className="col-sm-8">
                        <h2>Stereology</h2><br />
                        
                    </div> */}
                    <ol style={{ listStyleType: 'decimal' }}>
                        <li><a href="https://doi.org/10.1016/j.ntt.2024.107336">Morera, H., Dave, P., Kolinko, Y., Alahmari, S., Anderson, A., Denham, G., Davis, C., Riano, J., Goldgof, D., Hall, L. O., Harry, G. J., & Mouton, P. R. (2024). A novel deep learning-based method for automatic stereology of microglia cells from low magnification images. Neurotoxicology and Teratology, 102, 107336</a></li>
                        <li><a href="https://ieeexplore.ieee.org/abstract/document/10178757">H. Morera et al., "MIMO YOLO - A Multiple Input Multiple Output Model for Automatic Cell Counting," 2023 IEEE 36th International Symposium on Computer-Based Medical Systems (CBMS), L'Aquila, Italy, 2023, pp. 827-831, doi: 10.1109/CBMS58004.2023.00327.</a></li>
                        <li><a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12471/124710R/MIMO-U-Net--efficient-cell-segmentation-and-counting-in/10.1117/12.2655627.full">Dave, P., Kolinko, Y., Morera, H., Allen, K., Alahmari, S., Goldgof, D., Hall, L.O., & Mouton, P. R.. MIMO U-Net: efficient cell segmentation and counting in microscopy image sequences. In Medical Imaging 2023: Digital and Computational Pathology. SPIE</a></li><br/>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S0891061822000643">Dave, P., Goldgof, D., Hall, L. O., Kolinko, Y., Allen, K., Alahmari, S., & Mouton, P. R. (2022). A disector-based framework for the automatic optical fractionator. Journal of Chemical Neuroanatomy, 124, 102134.</a></li><br/>
                        <li><a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12032/120322K/Classification-of-global-microglia-proliferation-based-on-deep-learning-with/10.1117/12.2611581.full">Morera, H., Dave, P., Kolinko, Y., Allen, K., Alahmari, S., Goldgof, D., Hall, L.O., & Mouton, P. R. (2022, April). Classification of global microglia proliferation based on deep learning with local images. In Medical Imaging 2022: Image Processing (Vol. 12032, pp. 682-687). SPIE.</a></li><br/>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S0165027021000376">Dave, P., Alahmari, S., Goldgof, D., Hall, L. O., Morera, H., & Mouton, P. R. (2021). An adaptive digital stain separation method for deep learning-based automatic cell profile counts. Journal of Neuroscience Methods, 354, 109102.</a></li><br/>
                        <li>Alahmari, S. S., Goldgof, D., Hall, L., Phoulady, H. A., Patel, R. H., & Mouton, P. R. (2019). Automated cell counts on tissue sections by deep learning and unbiased stereology. Journal of chemical neuroanatomy, 96, 94-101.</li><br/>
                        <li>Alahmari, S. S., Goldgof, D., Hall, L. O., & Mouton, P. R. (2019, October). Automatic cell counting using active deep learning and unbiased stereology. In 2019 IEEE International Conference on Systems, Man and Cybernetics (SMC) (pp. 1708-1713). IEEE.  </li><br/>
                        <li>Phoulady, H. A., Goldgof, D., Hall, L. O., & Mouton, P. R. (2019). Automatic ground truth for deep learning stereology of immunostained neurons and microglia in mouse neocortex. Journal of chemical neuroanatomy, 98, 1-7.</li><br/>
                        <li>Phoulady, H. A., Goldgof, D., Hall, L. O., Nash, K. R., & Mouton, P. R. (2019). Automatic stereology of mean nuclear size of neurons using an active contour framework. Journal of chemical neuroanatomy, 96, 110-115.</li><br/>
                        <li>Alahmari, S., Goldgof, D., Hall, L., Dave, P., Phoulady, H. A., & Mouton, P. (2018, December). Iterative deep learning based unbiased stereology with human-in-the-loop. In 2018 17th IEEE International Conference on Machine Learning and Applications (ICMLA) (pp. 665-670). IEEE.</li><br/>
                        <li>Mouton, P. R., Phoulady, H. A., Goldgof, D., Hall, L. O., Gordon, M., & Morgan, D. (2017). Unbiased estimation of cell number using the automatic optical fractionator. Journal of chemical neuroanatomy, 80, A1-A8.</li><br/>
                        <li>Phoulady, H. A., Goldgof, D., Hall, L. O., & Mouton, P. R. (2017). A framework for nucleus and overlapping cytoplasm segmentation in cervical cytology extended depth of field and volume images. Computerized Medical Imaging and Graphics, 59, 38-49</li><br/>
                        <li>Phoulady, H. A., Goldgof, D. B., Hall, L. O., & Mouton, P. R. (2016, April). A new approach to detect and segment overlapping cells in multi-layer cervical cell volume images. In 2016 IEEE 13th International Symposium on Biomedical Imaging (ISBI) (pp. 201-204). IEEE.</li><br/>
                        <li>Phoulady, H. A., Goldgof, D. B., Hall, L. O., & Mouton, P. R. (2016, March). Nucleus segmentation in histology images with hierarchical multilevel thresholding. In Medical Imaging 2016: Digital Pathology (Vol. 9791, pp. 280-285). SPIE.</li><br/>
                        <li>Phoulady, H. A., Zhou, M., Goldgof, D. B., Hall, L. O., & Mouton, P. R. (2016, September). Automatic quantification and classification of cervical cancer via adaptive nucleus shape modeling. In 2016 IEEE International Conference on Image Processing (ICIP) (pp. 2658-2662). IEEE.</li><br/>
                        <li>Phoulady, H. A., Goldgof, D. B., Hall, L. O., & Mouton, P. R. (2015). An approach for overlapping cell segmentation in multi-layer cervical cell volumes. The second overlapping cervical cytology image segmentation challenge-IEEE ISBI.</li><br/>
                        <li>Phoulady, H. A., Chaudhury, B., Goldgof, D., Hall, L. O., Mouton, P. R., Hakam, A., & Siegel, E. M. (2014, October). Experiments with large ensembles for segmentation and classification of cervical cancer biopsy images. In 2014 IEEE International Conference on Systems, Man, and Cybernetics (SMC) (pp. 870-875). IEEE.</li><br/>
                    </ol>
                </div>
                
            </div>

            <h3>Posters</h3>
            <hr class="new1"></hr>
            <br />
            
            <div className="row container-fluid bg-white ">
                <ol style={{ listStyleType: 'decimal' }}>
                    <li>Mouton, P. R., Morera, H., Alahmari, S., Dave, P., Anderson, A.S., Hall, L.O., Kolinko, Y., Becker, A., Mobley, W.C, and Goldgof, D. Deep Learning-based Classification of Microglia Proliferation. Neuroscience 2022 abstracts.</li><br/>
                    <li>Dave, P., Goldgof, D., Hall, L.O., Kolinko, Y., Allen, K., Alahmari, S., Morera, H., Denham, G., Galvez, S., Becker, A., Albay, R., Mobley, W.C., and Mouton, P.R.. A novel automatic approach for total neuron counts using the unbiased disector method. Program No. P976.09. Neuroscience 2021 Abstracts, Virtual: Society for Neuroscience, 2021.</li><br/>
                    <li>Morera, H., Dave, P., Goldgof, D., Hall, L.O., Kolinko, Y., Allen, K., Alahmari, S., Albay, R., Becker, A., Mobley, W.C., and Mouton, P.R. Global estimates of microglial cell numbers using deep learning. Program No. P976.08. Neuroscience 2021 Abstracts, Virtual: Society for Neuroscience, 2021.</li><br/>
                    <li>Dave, P., Goldgof, D., Hall, L. O., Alahmari, S., & Mouton, P. R. (2019). Novel stain separation method for automatic stereology of immunostained tissue sections. Innovation in Aging, 3(Supplement 1).</li><br/>
                </ol>
            </div>

            <h3>Patents</h3>
            <hr class="new1"></hr>
            <br />
            
            <div className="row ">
                <ol style={{ listStyleType: 'decimal' }}>
                    <li>Dave, P., Goldgof, D., Hall, L. O., Kolinko, Y., Allen, K., Alahmari, S., & Mouton, P. R.  A disector-based framework for the automatic optical fractionator. U.S. Provisional Patent Application filed on 1 July 2022, USPTO #63/357,946 </li><br/>
                    <li>Morera, H., Dave, P., Kolinko, Y., Alahmari, S., Goldgof, D., Hall, L.O., and Mouton, P.R. Classification of Global Microglia Proliferation Based on Deep Learning with Local Images. U.S. Provisional Patent Application filed on 18 Mar 2022, USPTO # 63/321,557</li><br/>
                </ol>
            </div>


            {/* <div className="row slideanim">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-off logo-small"></span>
                    <h4>POWER</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-heart logo-small"></span>
                    <h4>LOVE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-lock logo-small"></span>
                    <h4>JOB DONE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div> */}
            {/* <br /><br />
            <div className="row slideanim">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-leaf logo-small"></span>
                    <h4>GREEN</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-certificate logo-small"></span>
                    <h4>CERTIFIED</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-wrench logo-small"></span>
                    <h4 style={{color: '#303030'}}>HARD WORK</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div> */}
        </div>
        
    )
}

export default Services;