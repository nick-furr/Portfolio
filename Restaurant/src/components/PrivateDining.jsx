function PrivateDining() {
    return (
        <section className="private-dining-section" id="private">
            <div className="container">
                <div className="private-grid">
                    <div className="private-content">
                        <span className="section-tag">Private Events</span>
                        <h2 className="section-title-white">Exclusive Private Dining</h2>
                        <p className="private-description">
                            Host your special occasion in our intimate private dining room. Whether it's a
                            corporate event, anniversary celebration, or intimate gathering, our dedicated
                            team will create a personalized experience tailored to your needs.
                        </p>
                        <ul className="private-features">
                            <li>Accommodates up to 20 guests</li>
                            <li>Customized tasting menus</li>
                            <li>Personal sommelier service</li>
                            <li>Audio/visual equipment available</li>
                        </ul>
                        <a href="mailto:me@nickfurr.com" className="cta-button primary">
                            Inquire About Events
                        </a>
                    </div>
                    <div className="private-image">
                        <div className="image-placeholder private-room"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrivateDining;
