import React from "react";
import Heading from "../Heading/Heading";

const Contact = () => {
    return(
        <section className="contact-section">
            <Heading title="contact" subTitle="Let's talk" />
            <div className="form__wraper">
                <div className="details__wrapper">
                    <div className="detail">
                        <h6 className="detail__heading">My address</h6>
                        <p className="detail__detail-s">Kirinyaga university, Kutus</p>
                    </div>
                    <div className="detail">
                        <h6 className="detail__heading">My email address</h6>
                        <p className="detail__detail-s">otwomadennis365@gmail.com</p>
                    </div>
                    <div className="detail">
                        <h6 className="detail__heading">My phone number</h6>
                        <p className="detail__detail-s">+254718762377 (preffered)</p>
                    </div>
                </div>
                <form action="/" className="form">
                    <div className="form__flex">
                        <div className="form__group form__group--half">
                            {/* <label htmlFor="name" className="form__group--label">full name</label> */}
                            <input type="text" className="form__group--input" placeholder="full name" required />
                        </div>
                        <div className="form__group form__group--half">
                            {/* <label htmlFor="name" className="form__group--label">email address</label> */}
                            <input type="email" className="form__group--input" placeholder="email address" required />
                        </div>
                    </div>
                    <div className="form__group">
                        {/* <label htmlFor="name" className="form__group--label">subject</label> */}
                        <input type="text" className="form__group--input" placeholder="subject" required />
                    </div>
                    <div className="form__group">
                        <textarea placeholder="your message here" required className="form__textarea"></textarea>
                    </div>
                    <p className="form__legend">
                        Am also open to suggestions, so please feel to send your critics.
                    </p>
                    <div className="form__group">
                        <button className="form__button" type="submit">submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;