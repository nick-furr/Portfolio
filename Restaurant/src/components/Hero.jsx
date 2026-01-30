function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 90;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className="hero-section" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <p className="hero-welcome">Welcome to</p>
                <h2 className="hero-title">
                    An Unforgettable<br />
                    <span className="highlight">Culinary Journey</span>
                </h2>
                <p className="hero-subtitle">
                    Experience the artistry of modern French cuisine<br />
                    in an elegant, intimate setting
                </p>
                <div className="hero-actions">
                    <button className="cta-button primary" onClick={() => scrollToSection('reservations')}>
                        Book Your Table
                    </button>
                    <button className="cta-button secondary" onClick={() => scrollToSection('menu')}>
                        View Menu
                    </button>
                </div>
                <div className="hero-awards">
                    <div className="award-item">
                        <span className="award-icon">⭐</span>
                        <span className="award-text">Michelin Recommended</span>
                    </div>
                    <div className="award-item">
                        <span className="award-icon">🍷</span>
                        <span className="award-text">Wine Spectator Award</span>
                    </div>
                    <div className="award-item">
                        <span className="award-icon">👨‍🍳</span>
                        <span className="award-text">Chef's Table Available</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
