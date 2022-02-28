import { Outlet, NavLink } from 'react-router-dom';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

const Layout = () => {
  const { fetchUser } = useActions();
  fetchUser();

  const user: any = useTypedSelector(({ auth }) => auth.user);

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
        <div>{user ? 'Logged In' : 'Not registered'} </div>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
