import React from "react";
import { galleries } from './Data'

const PhotoGallery = () => {
    return (
        <>
            <section className="galleries" id="galleries">
                <div className="container">
                    <p className="section-subtitle">photo gallery</p>
                    <h2 className="h2 section-title">Photo's from travellers</h2>
                    <p className="section-text">
                        Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                        nemo, <br /> rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
                    </p>
                    <ul className="gallery-list">
                        {galleries.map((gallery, index) => (
                            <li key={index}>
                                <div className="gallery-items">
                                    <img src={gallery.img} alt={gallery.title} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}
export default PhotoGallery