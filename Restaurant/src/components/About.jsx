function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <div className="image-placeholder chef-image">
                            <div className="image-overlay">
                                <span className="image-text">Chef Pierre Laurent</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="section-header-left">
                            <span className="section-tag">Our Story</span>
                            <h2 className="section-title">
                                Where Passion Meets<br />Culinary Excellence
                            </h2>
                        </div>
                        <div className="about-text">
                            <p className="about-description">
                                For over two decades, La Maison has been a destination for discerning diners
                                seeking an authentic fine dining experience. Under the guidance of Executive
                                Chef Pierre Laurent, our kitchen transforms seasonal, locally-sourced ingredients
                                into works of culinary art.
                            </p>
                            <p className="about-description">
                                Our philosophy is simple: respect the ingredients, honor tradition, and innovate
                                with purpose. Each dish tells a story, each flavor combination is carefully
                                orchestrated, and every guest experience is crafted to create lasting memories.
                            </p>
                            <div className="about-features">
                                <div className="feature-item">
                                    <span className="feature-icon">🌿</span>
                                    <div className="feature-text">
                                        <h4>Farm to Table</h4>
                                        <p>Locally sourced ingredients</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🍾</span>
                                    <div className="feature-text">
                                        <h4>Curated Wine List</h4>
                                        <p>Over 300 premium selections</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
