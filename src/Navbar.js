const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <div>
            <h1>My Reddit 187</h1>
        </div>
        <div className="dropdown-menu">
          {/* Dropdown menu items */}
        </div>
      </nav>
     );
}
 
export default Navbar;