import React from "react";

import "./Navbar.css";

import NavbarItems from "./NavbarItems";

const Navbar = (props) => {
  const navbarItems = [
    {
      type: "Stays",
      icon: <i class="fa fa-bed" aria-hidden="true"></i>,
      active: true,
    },
    {
      type: "Flights",
      icon: <i class="fa fa-plane" aria-hidden="true"></i>,
      active: false,
    },
    {
      type: "Car rentals",
      icon: <i class="fa fa-car" aria-hidden="true"></i>,
      active: false,
    },
    {
      type: "Attractions",
      icon: <i class="fa fa-bed" aria-hidden="true"></i>,
      active: false,
    },
    {
      type: "Airport taxis",
      icon: <i class="fa fa-taxi" aria-hidden="true"></i>,
      active: false,
    },
  ];

  console.log(navbarItems);
  console.log(navbarItems[0].icon, navbarItems[0].type);

  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <h1>Booking Website</h1>
        <div className="buttonRL">
          <button className="register">Register</button>
          <button className="login">Login</button>
        </div>
        <div className="barItems">
          <NavbarItems
            type={navbarItems[0].type}
            icon={navbarItems[0].icon}
            active={navbarItems[0].active}
          />
          <NavbarItems
            type={navbarItems[1].type}
            icon={navbarItems[1].icon}
            active={navbarItems[1].active}
          />
          <NavbarItems
            type={navbarItems[2].type}
            icon={navbarItems[2].icon}
            active={navbarItems[2].active}
          />
          <NavbarItems
            type={navbarItems[3].type}
            icon={navbarItems[3].icon}
            active={navbarItems[3].active}
          />
          <NavbarItems
            type={navbarItems[4].type}
            icon={navbarItems[4].icon}
            active={navbarItems[4].active}
          />
        </div>
      </div>
      <header className="headerContent">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels-unlock instant savings or 10% or more
          with free acount
        </p>
        <div className="headerButton">
          <button>Sign in/Register</button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
