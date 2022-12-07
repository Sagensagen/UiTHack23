import { useState } from "react";

import "./app.css";
function App() {
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const sendComplaint = () => {
    console.log("Sending complaint");
    const data = new FormData();
    data.append("email", email);
    data.append("complaint", complaint);
    fetch("http://localhost:5000/complaint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, complaint: complaint }),
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="formContainer">
          <div className="field" tabindex="1">
            <label for="email">
              <i className="far fa-envelope"></i>Your Email
            </label>
            <input
              name="email"
              type="text"
              placeholder="email@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field" tabindex="1">
            <label for="message">
              <i className="far fa-edit"></i>Your Message
            </label>
            <textarea
              name="message"
              placeholder="type here"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="reset" onClick={sendComplaint}>
            Send Me Message
          </button>
          <div className="social-media">
            <a
              className="fab fa-facebook-f"
              href="https://facebook.com/uzcho"
              target="blank_"
            ></a>
            <a
              className="fab fa-twitter"
              href="https://twitter.com/uzcho_"
              target="blank_"
            ></a>
            <a
              className="fab fa-instagram"
              href="https://www.instagram.com/uzcho_"
              target="blank_"
            ></a>
            <a
              className="fab fa-codepen"
              href="https://codepen.io/uzcho_"
              target="blank_"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
