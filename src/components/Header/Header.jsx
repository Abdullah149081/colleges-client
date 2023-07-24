import { Avatar, Dropdown, Navbar } from "flowbite-react";

import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import ActiveLink from "./ActiveLink";

const Header = () => {
  const user = false;
  const handleLogOut = () => {};
  return (
    <div className="navbar-container">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="font-bubblegum  self-center whitespace-nowrap lg:text-xl font-semibold dark:text-white ">Colleges</span>
        </Navbar.Brand>

        <div className="flex  md:order-2">
          {user ? (
            <Dropdown className="mr-6" inline label={<Avatar alt="User settings" img={user?.photoURL} rounded />}>
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">{user?.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <button onClick={handleLogOut} type="button" className="text-left w-full ">
                  <span className="inline-flex items-center gap-2 font-extrabold ">
                    <FiLogOut className="w-4 h-4" />
                    logout
                  </span>
                </button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <CgProfile className="w-10 h-10" />
          )}
          <Navbar.Toggle className="ml-5" />
        </div>

        <Navbar.Collapse>
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/colleges">Colleges</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/admission">Admission</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/my-College">My College</ActiveLink>
          </li>

          {!user && (
            <li>
              <ActiveLink to="/login">Sign In</ActiveLink>
            </li>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
