import React from "react";

function RequestPlasma() {
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
            Request Plasma
          </span>

          <label class="label-input100" for="first-name">
            Name *
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
            Age *
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
          <label class="label-input100" for="first-name">
            Blood Group *
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
              placeholder="Enter Blood Group"
            />
            <span class="focus-input100"></span>
          </div>
          <label class="label-input100" for="first-name">
            Date of Positive Covid Test *
          </label>
          <div
            class="wrap-input100 rs1-wrap-input100 validate-input"
            data-validate="Enter Name"
          >
            <input
              id="first-name"
              class="input100"
              type="date"
              name="date"
              placeholder="Enter Date"
            />
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

export default RequestPlasma;
