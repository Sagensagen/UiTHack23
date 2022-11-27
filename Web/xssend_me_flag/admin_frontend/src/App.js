import { useEffect, useState } from "react";
import "./app.css";
import React from "react";

function App() {
  const [complaints, setComplaints] = useState();

  // "<img onerror='alert(\"Hacked!\");' src='invalid-image' />";
  const test = "<img onerror='alert(\"Hacked!\");' src='invalid-image' />";
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setComplaints(`${data[0][1]}`));
    // setComplaints(`${data[0].complaint}`);
  }, []);
  return (
    // <>

    <div dangerouslySetInnerHTML={{ __html: complaints }} />
    //   {complaints[2][1]}
    //   <div className="content">
    //     <script>alert('test');</script>
    //     <div>
    //       <h1>My pretty admin panel!</h1>
    //       <hr />
    //     </div>
    //     {complaints.map((complaint, key) => {
    //       return (
    //         <div className="card">
    //           {/* <div dangerouslySetInnerHTML={createMarkup(complaint[1])} /> */}
    //           {/* <div dangerouslySetInnerHTML={{ __html: complaint[1] }} /> */}
    //           {complaint[1]}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  );
}

export default App;
