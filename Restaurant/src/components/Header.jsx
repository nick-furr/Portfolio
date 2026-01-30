function Header() {
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
        <header className="main-header">
            <div className="header-container">
                <div className="logo">
                    <h1 className="logo-text">La Maison</h1>
                    <p className="logo-subtitle">Fine Dining</p>
                </div>
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li><button className="nav-link" onClick={() => scrollToSection('home')}>Home</button></li>
                        <li><button className="nav-link" onClick={() => scrollToSection('about')}>Our Story</button></li>
                        <li><button className="nav-link" onClick={() => scrollToSection('menu')}>Menu</button></li>
                        <li><button className="nav-link" onClick={() => scrollToSection('reservations')}>Reservations</button></li>
                        <li><button className="nav-link" onClick={() => scrollToSection('private')}>Private Dining</button></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="tel:+15551234567" className="reserve-btn">Reserve a Table</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
