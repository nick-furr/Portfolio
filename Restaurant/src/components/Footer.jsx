function Footer() {
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
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">La Maison</h3>
                        <p className="footer-text">
                            Experience the finest in modern French cuisine with seasonal
                            ingredients and impeccable service.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><button onClick={() => scrollToSection('menu')}>Menu</button></li>
                            <li><button onClick={() => scrollToSection('reservations')}>Reservations</button></li>
                            <li><button onClick={() => scrollToSection('private')}>Private Dining</button></li>
                            <li><button onClick={() => scrollToSection('about')}>Our Story</button></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <p className="footer-text">123 Fine Dining Ave<br />New York, NY 10001</p>
                        <p className="footer-text">(555) 123-4567</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} La Maison. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
