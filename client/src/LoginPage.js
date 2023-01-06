import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginPage({ onLogin }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  
  function handleSubmit(e) {

    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {//logs the response object
      if (res.ok) {
        res.json().then((user) => onLogin(user
          ));
      } else {
        res.json().then((err) => {
          setErrors(err.errors.map((er)=> er));
          alert(`Error(s): ${err.errors}`);
          
        });
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          {/* <NavLink onClick={handleSubmit} className="nav-link" to="/">
        Log In
      </NavLink> */}
          <button type="submit">Log In</button>
        </label>
      </form>
    </>
  );
}

// import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label } from "./styles";

// function LoginPage({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   function handleSubmit(e) {
//   e.preventDefault();
//     setIsLoading(true);
//     fetch('/login', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({username, password}),
//     })
//     .then((res) => {
//       if (res.ok) {
//         res.json().then((user)=> onLogin(user));
//       }
//       else {
//         res.json().then((err)=> setErrors(err.errors));
//       }

//     })
//       }

// //     e.preventDefault();
// //     setIsLoading(true);
// //     fetch("/login", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ username, password }),
// //     }).then((r) => {
// //       setIsLoading(false);
// //       if (r.ok) {
// //         r.json().then((user) => onLogin(user));
// //       } else {
// //         r.json().then((err) => setErrors(err.errors));
// //       }
// //     });
// //   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       <FormField>
//         <Label htmlFor="username">Username</Label>
//         <Input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Label htmlFor="password">Password</Label>
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Button variant="fill" color="primary" type="submit">
//           {isLoading ? "Loading..." : "Login"}
//         </Button>
//       </FormField>
//     </form>

//   </>

//   );
// }

// export default LoginPage;
