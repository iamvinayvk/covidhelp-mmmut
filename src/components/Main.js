import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

function Main() {
  return (
    <div>
      <div class="cell medium-7 large-12">
        <div class="grid-x grid-padding-x">
          <div class="cell">
            <div class="grid-x grid-margin-x small-up-1 medium-up-1 large-up-4 key-resources">
              <Link
                to="/requestplasma"
                target=""
                title="Request Plasma"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img1})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Request Plasma</h3>
                </div>
              </Link>
              <Link
                to="/donateplasma"
                target=""
                title="COVID-19 Convalescent Plasma Donation"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img2})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Donate Plasma</h3>
                </div>
              </Link>
              <Link
                to="/"
                target=""
                title="Antigen Detection Test Centers for COVID-19"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img3})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Urgent Help</h3>
                </div>
              </Link>
              <Link to="/requestvm" target="" title="" class="cell card">
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img6})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Request For Vaccination / Medicine</h3>
                </div>
              </Link>
              <Link
                to="/requestbed"
                target=""
                title="Antigen Detection Test Centers for COVID-19"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img5})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Request For Bed</h3>
                </div>
              </Link>
              <Link
                to="/requestoxygen"
                target=""
                title="Antigen Detection Test Centers for COVID-19"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img4})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Request For Oxygen Cylinder</h3>
                </div>
              </Link>
              <Link
                to="/mentalhelp"
                target=""
                title="Antigen Detection Test Centers for COVID-19"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img5})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Mental Help</h3>
                </div>
              </Link>
              <Link
                to="/mentalhelp"
                target=""
                title="Antigen Detection Test Centers for COVID-19"
                class="cell card"
              >
                <div
                  class="image"
                  style={{
                    backgroundImage: `url(${img5})`,
                  }}
                ></div>
                <div class="card-section">
                  <h3>Covid Resources</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
