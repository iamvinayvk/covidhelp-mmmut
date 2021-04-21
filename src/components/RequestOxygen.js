import React from "react";

function RequestOxygen() {
  return (
    <div>
      <div class="wrap-contact100">
        <form
          class="contact100-form validate-form"
          method="POST"
          action="/submit"
        >
          <span
            style={{
              color: "#00738f",
              fontFamily: `"Poppins", sans-serif`,
              fontWeight: "bolder",
            }}
            class="contact100-form-title"
          >
            Request For Oxygen Cylinder
          </span>

          <label class="label-input100" for="first-name">
            Name of Patient *
          </label>
          <div
            class="wrap-input100 rs1-wrap-input100 validate-input"
            data-validate="Enter Name"
          >
            <input
              id="first-name"
              class="input100"
              type="text"
              name="first"
              placeholder="Enter Name of Patient"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="email">
            Age of Patient *
          </label>
          <div class="wrap-input100 validate-input" data-validate="Enter Age">
            <input
              id="email"
              class="input100"
              type="number"
              name="age"
              placeholder="Enter Age of Patient"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="phone">
            Enter Phone number
          </label>
          <div
            class="wrap-input100 validate-input"
            data-validate="Phone Number is required"
          >
            <input
              id="phone"
              class="input100"
              type="number"
              name="phone"
              placeholder="Eg. +91 98765 43210"
            />
            <span class="focus-input100"></span>
          </div>

          <label class="label-input100" for="amount">
            Address*
          </label>
          <div
            class="wrap-input100 validate-input"
            data-validate="Address is required"
          >
            <input
              type="text"
              id="message"
              class="input100"
              name="address"
              placeholder="Enter Address"
            />
            <span class="focus-input100"></span>
          </div>
          <label class="label-input100" for="amount">
            Help Needed!?
          </label>
          <div
            class="wrap-input100 validate-input"
            style={{ height: "100px" }}
            data-validate="Mention Help Needed"
          >
            <textarea
              type="text"
              id="message"
              class="input100"
              name="help"
              placeholder="Mention help needed from us"
            ></textarea>
            <span class="focus-input100"></span>
          </div>
          <label class="label-input100" for="amount">
            Send Reports before Submitting
          </label>
          <div class="contact100-form-btn">
            <a
              href="https://Wa.me/+91-9140862568"
              style={{ color: "cornsilk" }}
            >
              Send Report
            </a>
            <span class="focus-input100"></span>
          </div>

          <div class="container-contact100-form-btn">
            <button id="pay" class="contact100-form-btn">
              Submit Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestOxygen;
