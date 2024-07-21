import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link className='site-logo' to='/'>
        #VANLIFE
      </Link>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/host'>
          Host
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
          About
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/vans'>
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
