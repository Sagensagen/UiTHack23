import { useState } from "react";
import msg_error from "./assets/msg_error.png";
import "./app.css";
function App() {
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [showwarning, setshowwarning] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const sendComplaint = () => {
    const data = new FormData();
    data.append("email", email);
    data.append("complaint", complaint);
    fetch("http://motherload.td.org.uit.no:5000/complaint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, complaint: complaint }),
    }).then(setShowForm(false));
  };

  return (
    <div className="contentWrapper">
      <div className="window" style={{ margin: "32px", width: "250px" }}>
        <div className="title-bar">
          <div className="title-bar-text">Welcome</div>
        </div>
        <div className="window-body">
          <p>Free points!</p>
          <button onClick={() => setshowwarning(true)}>Get flag</button>
        </div>
      </div>
      {showwarning && (
        <div className="warning">
          <div className="window" style={{ margin: "32px", width: "400px" }}>
            <div className="title-bar">
              <div className="title-bar-text">
                Invalid flag status [##nANone~~]!
              </div>
            </div>
            <div className="window-body">
              <div style={{ display: "flex", flex_direction: "column" }}>
                <img
                  src={msg_error}
                  style={{ width: "45px", height: "45px" }}
                />
                <div style={{ padding: "0px 10px 0px 10px" }}>
                  <p>
                    This program has performed an illegal operation due to
                    missing flags.
                  </p>
                  <p>
                    If the problem persists, report the incident. We will handle
                    all incidents consecutively and with the utmost priority.
                  </p>
                </div>
                <div className="warningButtons">
                  <button onClick={() => setshowwarning(!showwarning)}>
                    close
                  </button>
                  <button onClick={() => setShowForm(true)}>Report</button>
                  <button disabled>debug</button>
                </div>
              </div>
              <div className="warningDescription window-body">
                Unhandled xsseption Type=Segmentation error vmState=0x00000000
                J9Generic_Signal_Number=00000004 xsseptionCode=c0000005
                xxseptionAddress=430514B E Flags=missing Handler1=7FEE9C40
                Handler2=7FEC98C0 InaccessibleAddress=00000000 EDI=000A7060
                ESI=43159598 EAX=00000000 EBX=001925EC ECX=00000001 EDX=4368FECC
                EIP=430514BE ESP=4368FED4 EBP=4368FED8 EFLAGS=00010246
                Module=failing_module.dll Module_base_address=43050000
                Offset_in_DLL=000014be Target=2_40_20081203_026494_lHdSMr
                (Windows 98 5.1 build 2600 Service Pack 2) CPU=x86 (2 logical
                CPUs) (0x7fe6b000 RAM)
                <br />
                In case of missing flags, please report the incident as our
                staff are holding the very updated assets on their session.
              </div>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="reportForm">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Report incident</div>
            </div>
            <div className="window-body">
              <div className="field-row-stacked" style={{ width: "200px" }}>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="field-row-stacked" style={{ width: "200px" }}>
                <label>Incident description</label>
                <textarea
                  id="text20"
                  rows="8"
                  type="text"
                  onChange={(e) => setComplaint(e.target.value)}
                ></textarea>
              </div>
              <button
                onClick={() => {
                  sendComplaint();
                }}
              >
                Send
              </button>

              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
