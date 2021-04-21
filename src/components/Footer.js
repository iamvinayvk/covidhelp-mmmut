import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div class="grid-container fluid">
          <div class="grid-x grid-padding-x align-center">
            <div class="cell text-center">
              <div class="menu-main-menu-container">
                <ul id="menu-main-menu-1" class="menu align-center">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5278">
                    <Link to="/">Urgent Help</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5132">
                    <Link to="/requestplasma">Request Plasma</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5160">
                    <Link to="/donateplasma">Donate Plasma</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5191">
                    <Link to="/requestbed">Request for Bed</Link>
                  </li>

                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5074">
                    <Link to="/requestoxygen">Request for Oxygen Cylinder</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5073">
                    <Link to="/requestvm">Request Vaccine/Medicine</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5073">
                    <Link to="/mentalhelp">Mental Help</Link>
                  </li>
                </ul>
              </div>{" "}
              <hr />
            </div>
          </div>
        </div>
      </footer>
      <p>
        <ul class="menu align-center">
          <li>
            <a
              href="#"
              target="_blank"
              title="Delhi Fights Corona Facebook Page"
            >
              <i class="fab fa-lg fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" title="Twitter">
              <i class="fab fa-lg fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" title="Instagram">
              <i class="fab fa-lg fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" title="Message on WhatsApp">
              <i class="fab fa-lg fa-whatsapp"></i>
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Footer;
