import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavbarComponents() {
  const [navBarList, setNavbarList] = useState([
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "About",
      path: "/about",
      active: false,
    },
    {
      name: "Products",
      path: "/products",
      active: false,
    },
  ]);

  const handleOnClick = (item) => {
    setNavbarList((prevList) =>
      prevList.map((list) =>
        list.name === item.name
          ? { ...list, active: true }
          : { ...list, active: false }
      )
    );
  };

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://tmssl.akamaized.net//images/foto/galerie/ronaldo-cristiano-2017-real-madrid-ballon-d-or-2016-0026751808hjpg-1698686328-120749.jpg?lm=1698686338"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button as={Link} to="/register" >Register</Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          {navBarList.map((list, index) => (
            <Navbar.Link
              onClick={() => handleOnClick(list)}
              as={Link}
              to={list.path}
              active={list.active}
              key={index}
            >
              {list.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
