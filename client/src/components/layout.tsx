import { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

const Layout = () => {
  const { fetchUser } = useActions();
  useEffect(() => {
    fetchUser();
  }, []);

  const auth: any = useTypedSelector(({ auth }) => auth);

  const displayLogin = () => {
    if (auth === null) return <div>nullll</div>;
    else if (auth === false)
      return (
        <a href="/auth/google" className="button">
          Login with Google
        </a>
      );
    else
      return (
        <div className="is-flex is-align-items-center">
          <div className="mr-4">{auth.name}</div>
          <a href="/api/logout" className="button">
            Logout
          </a>
        </div>
      );
  };

  return (
    <div className="container mt-4">
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '0.7rem',
        }}
        className="is-flex is-align-items-center is-justify-content-space-between"
      >
        <div>
          <NavLink to={auth ? '/charts' : '/'} style={{ marginRight: '20px' }}>
            STC App
          </NavLink>
        </div>

        {displayLogin()}
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
