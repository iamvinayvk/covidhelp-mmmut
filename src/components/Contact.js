import React from "react";
import "../css/main.css";
import "../css/util.css";

function Contact() {
  return (
    <div>
      <div class="contact100-more flex-col-c-m custom-flex">
        <div class="dis-flex size1 p-b-47">
          <div class="txt1 p-r-25">
            <span class="lnr lnr-map-marker"></span>
          </div>

          <div class="flex-col size1">
            <span class="txt1 p-b-20">Address</span>
            <br />
            <br />

            <span class="txt2">
              Madan Mohan Malviya University of Technology, Gorakhpur, Uttar
              Pradesh
            </span>
          </div>
        </div>

        <div class="dis-flex size1 p-b-47">
          <div class="txt1 p-r-25">
            <span class="lnr lnr-phone-handset"></span>
          </div>

          <div class="flex-col size1">
            <span class="txt1 p-b-20">Call for Help!</span>
            <br />
            <br />
            <span class="txt3">Abhishek Upadhyay</span>
            <br />
            <span class="txt3">+91 8052940901</span>
            <br />
            <span class="txt3">Vatsal Kumar</span>
            <br />
            <span class="txt3">+91 9198762926</span>
            <br />
            <span class="txt3">Sanskar Srivastava</span>
            <br />
            <span class="txt3">+91 9140862568</span>
          </div>
        </div>

        <div class="dis-flex size1 p-b-47">
          <div class="txt1 p-r-25">
            <span class="lnr lnr-envelope"></span>
          </div>

          <div class="flex-col size2">
            <span class="txt1 p-b-20">General Support</span>
            <br />
            <br />

            <span class="txt3">
              <a href="mail">upadhyayprince599@gmail.com</a>
            </span>
            <br />
            <span class="txt3">
              <a href="mail">vatsalkumar47@gmail.com</a>
            </span>
            <br />
            <span class="txt3">
              <a href="mail">sanskar0703@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
