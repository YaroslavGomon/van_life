import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  const setActiveStyle = isActive => ({
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: isActive ? 'underline' : 'none',
    color: isActive ? '#161616' : '#4d4d4d',
  });

  return (
    <>
      <nav className='host-nav'>
        <NavLink style={({ isActive }) => setActiveStyle(isActive)} to='.' end>
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => setActiveStyle(isActive)} to='income'>
          Income
        </NavLink>
        <NavLink style={({ isActive }) => setActiveStyle(isActive)} to='vans'>
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => setActiveStyle(isActive)} to='reviews'>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
