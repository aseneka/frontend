import React from 'react';

// MenuPage Component: Displays the restaurant's menu categorized by Starters, Main Courses, Desserts, and Beverages.
const MenuPage = () => {
  return (
    <div className="page-content"> {/* Added a wrapper div for consistency */}
      <section id="menu" className="menu-section">
        <div className="menu-container">
          <h2 className="section-title menu-title">Our Delicious Menu</h2>

          <div className="menu-grid">
            {/* Starters */}
            <div className="menu-category">
              <h3 className="category-title">Starters</h3>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Bruschetta" alt="Bruschetta" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Bruschetta</h4>
                  <p className="item-description">Fresh tomatoes, basil, olive oil, and toasted baguette slices</p>
                  <span className="item-price">$8.50</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Caesar+Salad" alt="Caesar Salad" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Caesar Salad</h4>
                  <p className="item-description">Crisp romaine with homemade Caesar dressing</p>
                  <span className="item-price">$9.00</span>
                </div>
              </div>
            </div>

            {/* Main Courses */}
            <div className="menu-category">
              <h3 className="category-title">Main Courses</h3>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Grilled+Salmon" alt="Grilled Salmon" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Grilled Salmon</h4>
                  <p className="item-description">Served with lemon butter sauce and seasonal vegetables</p>
                  <span className="item-price">$22.00</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="\images\gallery-ribeye-steak.webp" alt="Ribeye Steak" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Ribeye Steak</h4>
                  <p className="item-description">12 oz prime cut with garlic mashed potatoes</p>
                  <span className="item-price">$28.00</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Vegetable+Risotto" alt="Vegetable Risotto" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Vegetable Risotto</h4>
                  <p className="item-description">Creamy Arborio rice with wild mushrooms</p>
                  <span className="item-price">$18.00</span>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div className="menu-category">
              <h3 className="category-title">Desserts</h3>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Tiramisu" alt="Tiramisu" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Tiramisu</h4>
                  <p className="item-description">Classic Italian dessert with mascarpone</p>
                  <span className="item-price">$7.50</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Cheesecake" alt="Cheesecake" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Cheesecake</h4>
                  <p className="item-description">Creamy cheesecake with berry compote</p>
                  <span className="item-price">$7.00</span>
                </div>
              </div>
            </div>

            {/* Beverages */}
            <div className="menu-category">
              <h3 className="category-title">Beverages</h3>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Red+Wine" alt="Red Wine" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Red Wine (Glass)</h4>
                  <p className="item-description">A selection of Italian reds</p>
                  <span className="item-price">$10.00</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=White+Wine" alt="White Wine" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">White Wine (Glass)</h4>
                  <p className="item-description">Crisp and refreshing</p>
                  <span className="item-price">$9.00</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Craft+Beer" alt="Craft Beer" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Craft Beer</h4>
                  <p className="item-description">Local artisan brews</p>
                  <span className="item-price">$6.00</span>
                </div>
              </div>
              <div className="menu-item">
                <img src="https://placehold.co/100x70/FDBA74/FFFFFF?text=Espresso" alt="Espresso" className="menu-item-image" />
                <div className="menu-item-details">
                  <h4 className="item-name">Espresso</h4>
                  <p className="item-description">Strong and aromatic</p>
                  <span className="item-price">$3.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
