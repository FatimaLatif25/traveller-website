import React from "react";
import { card } from './Data'

const PopularDestination = () => {
    return (
        <>
            <section className="popular" id="destination">
                <div className="container">
                    <p className="section-subtitle">UNCOVER PLACE</p>
                    <h2 className="h2 section-title">Popular Destination</h2>
                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                        nemo, <br/> rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
                    </p>
                    <div className="popular-card">
                        {card.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="card-image">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="card-content">
                                    <div className="card-rating">
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star'></i>
                                        <i className='fas fa-star-half-alt'></i>
                                    </div>
                                    <p className="card-subtitle">
                                        <a href="#">{item.title}</a>
                                    </p>
                                    <h3 className="card-title">
                                        <a href="#">{item.card_title}</a>
                                    </h3>
                                    <p className="card-text">
                                        Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="btn btn-primary">More Destination</button>
                </div>
            </section>
        </>
    )
}
export default PopularDestination