import "./Navbar.css";

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>📦 Stock System</h2>
        </div>
        <div className="navbar-menu">
          <span className="navbar-user">{user?.email}</span>
          <button className="navbar-logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
