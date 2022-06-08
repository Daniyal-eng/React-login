import React, { useState } from "react";

export default function App() {
  const [FormData, setFormData] = useState(() => {
    return {
      fname: "",
      lname: "",
      email: "",
      Phone: "",
    };
  });

  const InpEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const name = event.target.name;
    const value = event.target.value;

    setFormData((PreVal) => {

      return {
        ...PreVal,
        [name]: value,
      };

      // if (Tname === "fName") {
      //   return {
      //     fname: Tval,
      //     lname: PreVal.lname,
      //     email:PreVal.email,
      //     Phone:PreVal.Phone,
      //   };
      // } else if (Tname === "lName") {
      //   return {
      //     fname: PreVal.fname,
      //     lname: Tval,
      //     email:PreVal.email,
      //     Phone:PreVal.Phone,
      //   };
      // }

      // else if (Tname === "email") {
      //   return {
      //     fname: PreVal.fname,
      //     lname: PreVal.lname,
      //     email:Tval,
      //     Phone:PreVal.Phone,
      //   };
      // }

      // else if (Tname === "phone") {
      //   return {
      //     fname: PreVal.fname,
      //     lname: PreVal.lname,
      //     email: PreVal.email,
      //     Phone:Tval,
      //   };
      // }
    });
  }; //InputEvent end

  const Submits = (event) => {
    event.preventDefault();
    console.log(" Submits works");
  }; //submits ends

  return (
    <>
      <div className="Div-1">
        <form onSubmit={Submits}>
          <h1>
            Hello {FormData.fname} {FormData.lname}
          </h1>
          <h4>
            {FormData.email} {FormData.Phone}
          </h4>
          <input
            className="inp1"
            type="text"
            placeholder="Enter your First name"
            name="fname"
            onChange={InpEvent}
            value={FormData.fname}
          />
          <br />

          <input
            className="inp2"
            type="text"
            placeholder="Enter your last name"
            name="lname"
            onChange={InpEvent}
            value={FormData.lname}
          />
          <br />

          <input
            className="inp2"
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={InpEvent}
            autoComplete="off"
            value={FormData.email}
          />
          <br />

          <input
            className="inp2"
            type="number"
            placeholder="Enter your phone"
            name="Phone"
            onChange={InpEvent}
            value={FormData.Phone}
          />
          <br />

          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
