import BookingForm from './BookingForm';

function Reservations() {
    return (
        <section className="booking-section" id="reservations">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Reservations</span>
                    <h2 className="section-title">Reserve Your Experience</h2>
                    <p className="section-subtitle">Book your table for an unforgettable evening</p>
                </div>
                <div className="booking-content">
                    <div className="booking-info-card">
                        <div className="info-section">
                            <h3 className="info-title">Contact Us</h3>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div>
                                    <p className="contact-label">Reservations</p>
                                    <a href="tel:+15551234567" className="contact-value">(555) 123-4567</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <a href="mailto:me@nickfurr.com" className="contact-value">me@nickfurr.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <p className="contact-label">Location</p>
                                    <p className="contact-value">123 Fine Dining Ave<br />New York, NY 10001</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-section">
                            <h3 className="info-title">Hours of Operation</h3>
                            <div className="hours-list">
                                <div className="hours-row">
                                    <span className="day">Tuesday - Thursday</span>
                                    <span className="time">5:30 PM - 10:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span className="day">Friday - Saturday</span>
                                    <span className="time">5:30 PM - 11:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span className="day">Sunday</span>
                                    <span className="time">5:00 PM - 9:00 PM</span>
                                </div>
                                <div className="hours-row closed">
                                    <span className="day">Monday</span>
                                    <span className="time">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}

export default Reservations;
