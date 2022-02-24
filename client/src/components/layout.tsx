import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container mt-4">
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={{ marginRight: '20px' }}>
          Home
        </NavLink>
        <NavLink to="/charts">Charts</NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
