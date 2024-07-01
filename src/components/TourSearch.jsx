import React from "react";

const TourSearch = () => {
 return (
    <>
    <section className="tour-search">
        <div className="container">
         <form className="input-form">
           <div className="input-box">
            <label>Search Destination*</label>
            <input type="text" placeholder="Enter Destination" />
           </div>
           <div className="input-box">
            <label>Fax Number*</label>
            <input type="number" placeholder="No.of People" />
           </div>
           <div className="input-box">
            <label>Checkin Date*</label>
            <input type="date" placeholder="MM/DD/YYYY" />
           </div>
           <div className="input-box">
            <label>Checkout Date*</label>
            <input type="date" placeholder="MM/DD/YYYY" />
           </div>
           <button type="submit"className="btn btn-secondary">Inquire Now</button>
         </form>
        </div>
    </section>
    </>
 )
}
export default TourSearch