// components/about.js
import React from 'react';

export default function About() {
    return 
(
        <section className="bg-primary text-white text-center py-5">
            <div className="container">
                <h2 className="display-4">Building Brands Together</h2>
                <p className="lead">
                    Our team of experts stays ahead of the curve with the latest trends and innovative technologies.
                </p>
                <div className="row">
                    < div className="col-md-4">
                        <img src="/path/to/image1.png" alt="Image 1" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/image2.png" alt="Image 2" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src="/path/to/image3.png" alt="Image 3" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}
