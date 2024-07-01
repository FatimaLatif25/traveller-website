import React from "react";
import { packages } from './Data'

const TourPackages = () => {
    return (
        <>
            <section className="packages" id="packages">
                <div className="container">
                    <p className="section-subtitle">popular packages</p>
                    <h2 className="h2 section-title">checkout our packages</h2>
                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                        nemo, <br /> rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
                    </p>
                    <ul className="package-list">
                        {packages.map((pkg, index) => (
                            <li key={index}>
                                <div className="packages-card">

                                        <div className="card-banner">
                                            <img src={pkg.img} alt={pkg.title} />
                                        </div>
                                        <div className="card-content">
                                            <h3 className="h3 card-title">{pkg.card_title}</h3>
                                            <p className="card-text">{pkg.description}</p>
                                            <ul className="card-meta-list">
                                                <li className="card-meta-items">
                                                    <div className="meta-box">
                                                        <i className="fas fa-clock"></i>
                                                        <p className="text">{pkg.duration}</p>

                                                    </div>
                                                </li>
                                                <li className="card-meta-items">
                                                    <div className="meta-box">
                                                        <i className="fas fa-user"></i>
                                                        <p className="text">pax: {pkg.pax}</p>
                                                    </div>
                                                </li>
                                                <li className="card-meta-items">
                                                    <div className="meta-box">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                        <p className="text">{pkg.location}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-price">
                                            <div className="wrapper">
                                                <p className="review">({pkg.reviews} reviews)</p>
                                                <div className="card-rating">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star-half-alt'></i>
                                                </div>
                                            </div>
                                            <p className="price">
                                                ${pkg.price}
                                                <span> / per person</span>
                                            </p>
                                            <button className="btn btn-secondary">Book Now</button>
                                        </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button type="submit" className="btn btn-primary">More Destination</button>
                </div>
            </section>
        </>
    )
}
export default TourPackages