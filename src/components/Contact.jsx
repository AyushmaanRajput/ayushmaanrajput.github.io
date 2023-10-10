import React from "react";

export const Contact = () => {
  return (
    <div id="contact">
      <h2>You can find me on,</h2>
      <h3>
        Github:{" "}
        <a
          href="https://github.com/AyushmaanRajput"
          target="_blank"
          id="contact-github"
        >
          Click here
        </a>
      </h3>
      <h4>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/ayushmaan-rajput-8ba7ab279/"
          target="_blank"
          id="contact-linkedin"
        >
          Click here
        </a>
      </h4>
      <h4>
        Call Me On: <span id="contact-phone">+91 7523965419</span>
      </h4>
      <h4>
        Mail at: <span id="contact-email">ayushmaanrajput25feb@gmail.com</span>
      </h4>
    </div>
  );
};
