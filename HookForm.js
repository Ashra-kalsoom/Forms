import React from "react";

const HookForm = () => {
  return (
    <div className="App">
      <input type="text" name="firstName" placeholder="First Name.." />
      <br />
      <input type="text" name="lastName" placeholder="Last Name.." />
      <br />
      <input type="email" name="email" placeholder="Email.." />
      <br />
      <input type="password" name="password" placeholder="Password.." />
      <br />
      <input type="text" name="age" placeholder="Age" />
      <br />
      <label>Gender</label>
      <br />
      <input type="radio" name="gender" />
      <label>Male</label>
      <br />
      <input type="radio" name="gender" />
      <label>Female</label>
    </div>
  );
};

export default HookForm;
