import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Aloqa xizmatlari</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/tulpor_osiyo?igsh=b2prbmtpa2Zlamoy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
             <a
              href="https://www.instagram.com/tulpor_osiyo?igsh=b2prbmtpa2Zlamoy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
             <a
              href="https://www.instagram.com/tulpor_osiyo?igsh=b2prbmtpa2Zlamoy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
             <a
              href="https://www.instagram.com/tulpor_osiyo?igsh=b2prbmtpa2Zlamoy&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
