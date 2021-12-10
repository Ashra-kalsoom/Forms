// import React, { useState } from "react";
// const Form = () => {
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [emailAddress, setEmailAddress] = useState();
//   const [password, setPassword] = useState();
//   const [gender, setGender] = useState();
//   const [age, setAge] = useState();
//   const submitHandler = (e) => {
//     let firstLine = document.getElementById("fname").value;
//     setFirstName(firstLine);

//     let secondLine = document.getElementById("lname").value;
//     setLastName(secondLine);

//     let fifthLine = document.getElementById("email").value;
//     setEmailAddress(fifthLine);

//     let sixthLine = document.getElementById("password").value;
//     setPassword(sixthLine);

//     let seventhLine = document.getElementById("age").value;
//     setAge(seventhLine);

//     let male = document.getElementById("male");
//     let female = document.getElementById("female");
//     if (male.checked) {
//       setGender(male.value);
//     }
//     if (female.checked) {
//       setGender(female.value);
//     }

//     e.preventDefault();
//   };
//   return (
//     <form>
//       <input
//         type="text"
//         name="firstName"
//         placeholder="First Name.."
//         id="fname"
//         className="form-control"
//         pattern="\d*"
//         title="Numbers only, please."
//       />
//       <br />
//       <input type="text" name="lastName" placeholder="Last Name.." id="lname" />
//       <br />
//       <input type="email" name="email" placeholder="Email.." id="email" />
//       <br />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password.."
//         id="password"
//       />
//       <br />
//       <label>Age</label>
//       <select id="age">
//         <option selected></option>

//         <option>26-45</option>
//         <option>16-25</option>
//         <option>46-55</option>
//       </select>

//       <br />
//       <label>Gender</label>
//       <br />
//       <input type="radio" name="gender" value="female" id="female" />
//       <label>Female</label>
//       <input type="radio" name="gender" value="male" id="male" />
//       <label>Male</label>
//       <br />
//       <button onClick={submitHandler} type="submit">
//         submit
//       </button>

//       <p id="answer">{firstName}</p>
//       <p id="answer">{lastName}</p>
//       <p id="answer">{emailAddress}</p>
//       <p id="answer">{password}</p>
//       <p id="answer">{age}</p>
//       <p id="answer">{gender}</p>
//     </form>
//   );
// };

// export default Form;
