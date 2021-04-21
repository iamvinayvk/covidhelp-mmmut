import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/mmm_logo.png";

function Header() {
  return (
    <div>
      <header class="sticky-menu">
        <div class="grid-x grid-padding-x">
          <div class="cell auto small logo">
            <NavLink to="/">
              <img
                width="115"
                height="80"
                src={Logo}
                class="attachment-medium size-medium"
                alt=""
                loading="lazy"
              />
            </NavLink>
          </div>
          <div class="cell auto main-menu">
            <input type="checkbox" id="main-menu-control" class="hide" />
            <div class="menu-main-menu-container">
              <ul id="menu-main-menu" class="menu">
                <li
                  id="menu-item-5160"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5160"
                >
                  <NavLink to="/urgenthelp">Urgent Help!</NavLink>
                </li>
                <li
                  id="menu-item-5160"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5160"
                >
                  <NavLink to="/donateplasma"> Donate Plasma</NavLink>
                </li>
                <li
                  id="menu-item-5191"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5191"
                >
                  <NavLink to="/requestplasma"> Request Plasma</NavLink>
                </li>

                <li
                  id="menu-item-5073"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5073"
                >
                  <NavLink to="/requestbed"> Request Bed</NavLink>
                </li>

                <li
                  id="menu-item-5064"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5064"
                >
                  <NavLink to="/requestoxygen">
                    {" "}
                    Request Oxygen Cylinder
                  </NavLink>
                </li>
                <li
                  id="menu-item-5160"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5160"
                >
                  <NavLink to="/requestvm"> Request Medicine/Vaccine</NavLink>
                </li>
                <li
                  id="menu-item-5160"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5160"
                >
                  <NavLink to="/mentalhelp"> Mental Help</NavLink>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div class="cell auto small text-right menu-control hide-for-medium">
            <label for="main-menu-control" class="button secondary hollow">
              <i class="fa fa-bars"></i> Menu
            </label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
