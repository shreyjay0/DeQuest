import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as IMG from '../constants/img';
import Button from './Button';

const Sidebar = () => {
  const [eAccess, setEAccess] = React.useState(null);
  const sideItems = [
    {
      name: 'Home',
      icon: IMG.home,
      path: '/',
    },
    {
      name: 'Wallet',
      icon: IMG.diamond_nav,
      path: '/wallet',
    },
    { name: 'Profile', icon: IMG.profile_nav, path: '/profile' },
    {
      name: 'Get DeSo',
      icon: IMG.buy_deso,
      path: '/get-deso',
    },
    { name: 'Settings', icon: IMG.settings, path: '/settings' },
  ];
  useEffect(() => {
    if (localStorage.getItem('eAccess') === null) {
      localStorage.setItem('eAccess', 'true');
      setEAccess('true');
    }
    setEAccess(localStorage.getItem('eAccess'));
  }, []);

  const onClickDequest = () => {
    window.open('https://deso.io/de-request', '_blank');
  };

  const closeEarlyAccessBox = () => {
    localStorage.setItem('eAccess', 'false');
    setEAccess('false');
  };

  return (
    <aside className="sidebar w-64" ariaLabel="Sidebar">
      <div className="overflow-y-auto px-6 py-6 ">
        <nav>
          <ul className="space-y-3">
            {sideItems.map((item) => (
              <li>
                <NavLink
                  to={item.path}
                  className="flex items-center rounded-lg p-2 text-base font-semibold font-normal no-underline hover:bg-deq-blue-40 hover:text-deq-blue "
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-6 w-6 hover:text-deq-blue"
                  />
                  <span className="ml-2">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="" onClick={onClickDequest} />
        {eAccess === 'true' && (
          <div
            id="early-access-box"
            className="mt-6 rounded-lg bg-deq-blue-40 p-4"
            role="alert"
          >
            <div className="mb-3 flex items-center">
              <span className="mr-2 rounded bg-deq-red-40 px-2.5 py-0.5 text-sm font-semibold text-deq-red">
                Early Access
              </span>
              <button
                type="button"
                className="-mx-1.5 -my-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-deq-blue p-1 text-white hover:bg-blue-400 "
                onClick={() => closeEarlyAccessBox()}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-deq-blue">
              Sign up for early access and be the first to try when new features
              are added.
            </p>
            <a
              className="text-sm font-bold text-deq-blue underline hover:text-blue-800"
              href="/"
            >
              Get early access
            </a>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
