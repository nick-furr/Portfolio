const testimonials = [
    {
        id: 1,
        text: "An absolutely extraordinary dining experience. Every course was a masterpiece, and the wine pairings were perfection. The attention to detail is unmatched.",
        name: "James Sullivan",
        initials: "JS",
        rating: "★★★★★",
    },
    {
        id: 2,
        text: "Chef Laurent's creativity knows no bounds. Each dish tells a story and the presentation is simply stunning. La Maison is truly a gem.",
        name: "Maria Chen",
        initials: "MC",
        rating: "★★★★★",
    },
    {
        id: 3,
        text: "From the moment we walked in, we were treated like royalty. The service is impeccable, and the food is nothing short of exceptional. Worth every penny.",
        name: "Robert Williams",
        initials: "RW",
        rating: "★★★★★",
    },
];

function Testimonials() {
    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Testimonials</span>
                    <h2 className="section-title">Guest Experiences</h2>
                    <p className="section-subtitle">What our guests are saying</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div className="testimonial-card" key={testimonial.id}>
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="customer-info">
                                <div className="customer-avatar">{testimonial.initials}</div>
                                <div className="customer-details">
                                    <span className="customer-name">{testimonial.name}</span>
                                    <div className="rating">{testimonial.rating}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
