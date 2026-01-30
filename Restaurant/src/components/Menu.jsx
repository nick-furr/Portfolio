import { useState } from 'react';

const menuData = {
    appetizers: [
        { id: 1, name: 'Pan-Seared Foie Gras', price: '$38', description: 'Caramelized apple, brioche, aged balsamic reduction', badge: "Chef's Choice", emoji: '🍽️' },
        { id: 2, name: 'Lobster Bisque', price: '$28', description: 'Maine lobster, cognac cream, chive oil', emoji: '🦞' },
        { id: 3, name: 'Truffle Risotto', price: '$32', description: 'Black truffle, parmesan, wild mushrooms', emoji: '🍄' },
        { id: 4, name: 'Oysters on Half Shell', price: '$24', description: 'Six fresh oysters, mignonette, lemon', emoji: '🦪' },
    ],
    mains: [
        { id: 1, name: 'Wagyu Beef Tenderloin', price: '$85', description: 'A5 Japanese wagyu, truffle butter, roasted bone marrow', badge: 'Signature', emoji: '🥩' },
        { id: 2, name: 'Pan-Roasted Duck Breast', price: '$52', description: 'Cherry gastrique, foie gras mousse, seasonal vegetables', emoji: '🦆' },
        { id: 3, name: 'Butter-Poached Lobster', price: '$78', description: 'Maine lobster tail, champagne beurre blanc, asparagus', emoji: '🦞' },
        { id: 4, name: 'Rack of Lamb', price: '$62', description: 'Herb-crusted New Zealand lamb, mint pesto, potato gratin', emoji: '🍖' },
    ],
    desserts: [
        { id: 1, name: 'Grand Chocolate Soufflé', price: '$18', description: 'Valrhona chocolate, vanilla crème anglaise', badge: 'House Favorite', emoji: '🍫' },
        { id: 2, name: 'Crème Brûlée', price: '$14', description: 'Madagascar vanilla bean, caramelized sugar crust', emoji: '🍮' },
        { id: 3, name: 'Tarte Tatin', price: '$16', description: 'Caramelized apple, puff pastry, Calvados ice cream', emoji: '🍎' },
        { id: 4, name: 'Cheese Selection', price: '$22', description: 'Artisanal French cheeses, honeycomb, fig compote', emoji: '🧀' },
    ],
    wine: [
        { id: 1, name: 'Château Margaux 2015', price: '$450', description: 'First Growth Bordeaux, rich cassis, elegant tannins', badge: 'Sommelier Pick', emoji: '🍷' },
        { id: 2, name: 'Dom Pérignon 2012', price: '$350', description: 'Prestige Champagne, toast, citrus, fine bubbles', emoji: '🍾' },
        { id: 3, name: 'Opus One 2018', price: '$395', description: 'Napa Valley blend, blackberry, violet, silky finish', emoji: '🍇' },
        { id: 4, name: 'Puligny-Montrachet 2019', price: '$185', description: 'Premier Cru Burgundy, mineral, white flowers, citrus', emoji: '🥂' },
    ],
};

const categories = [
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'wine', label: 'Wine Selection' },
];

function Menu() {
    const [activeCategory, setActiveCategory] = useState('appetizers');

    return (
        <section className="menu-section" id="menu">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Seasonal Menu</span>
                    <h2 className="section-title">Signature Dishes</h2>
                    <p className="section-subtitle">Crafted with the finest seasonal ingredients</p>
                </div>
                <div className="menu-content">
                    <div className="menu-categories">
                        <ul className="category-list">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <button
                                        className={`category-link ${activeCategory === cat.id ? 'active' : ''}`}
                                        onClick={() => setActiveCategory(cat.id)}
                                    >
                                        {cat.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="menu-items">
                        {menuData[activeCategory].map((item) => (
                            <div className="menu-item" key={item.id}>
                                <div className="item-image">
                                    {item.badge && <div className="item-badge">{item.badge}</div>}
                                    <span>{item.emoji}</span>
                                </div>
                                <div className="item-details">
                                    <div className="item-header">
                                        <h3 className="item-name">{item.name}</h3>
                                        <span className="item-price">{item.price}</span>
                                    </div>
                                    <p className="item-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
