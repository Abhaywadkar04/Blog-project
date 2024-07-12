import React from 'react';
import { Container, Logo, LogoutBtn, ThemeBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useTheme from '../../contexts/theme';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const { theme } = useTheme();

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className={`py-4 shadow-lg border-b-2 border-black ${theme === 'light' ? 'white' : 'bg-gray-800'}`}>
      <Container>
        <nav className="flex items-center">
          <div className="mr-8">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="md:m-4">
              <ThemeBtn />
            </div>
          </div>
      
          <ul className="flex ml-auto space-x-6">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`inline-block px-6 py-2 rounded-full duration-200 hover:bg-gray-500 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}


export default Header;
