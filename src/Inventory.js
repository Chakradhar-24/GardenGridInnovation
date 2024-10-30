import React from 'react';
import './Inventory.css';

function Inventory() {
  return (
    <div className="inventory">
      <header className="header">
        <h1>Garden Grid</h1>
      </header>

      <nav className="tabs">
        <button className="tab">Home</button>
        <button className="tab active">Inventory</button>
        <button className="tab">Entries</button>
        <button className="tab">Resources</button>
        <button className="tab">Reports</button>

        <div className="search-bar">
          <label htmlFor="search">Search Bar:</label>
          <input type="text" id="search" />
        </div>
      </nav>

      <div className="filter-sort-section">
        <div className="filter-group">
          <h3>Filter By:</h3>
          <div className="filter-row">
            <div className="filter-item">
              <label>Category</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Condition</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Supplier</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Price</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Quantity</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Plant Type</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Stock</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Status</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
          </div>
        </div>

        <div className="sort-group">
          <h3>Sort By:</h3>
          <div className="filter-row">
            <div className="filter-item">
              <label>Category</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Condition</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Supplier</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Price</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Quantity</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Plant Type</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Stock</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
            <div className="filter-item">
              <label>Status</label>
              <select>
                <option>Dropdown</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="inventory-content">
        <p>** Inventory page images will be inserted here and formatted with CSS flexbox **</p>
      </div>

      <button className="export-button">Export to CSV</button>

      <footer className="footer">
        For technical support contact: <a href="mailto:222@garden.com">222@garden.com</a> or call 333-333-3333
      </footer>
    </div>
  );
}

export default Inventory;
