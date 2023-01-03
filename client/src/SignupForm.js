
import React, { useState } from "react";

export default function SignupForm({onLogin}){
const [newUsername, setNewUsername] = useState("");
const [newPassword, setNewPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [errors, setErrors] = useState([]);

function handleNewUserSubmit(e){
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUsername,
        password: newPassword,
        password_confirmation: passwordConfirmation,
      }),
      }).then((res)=>{
        if(res.ok){
          res.json().then((newUser)=>{
            onLogin(newUser)
            console.log(`New user ${newUser.username} created successfully!`)
          })
        }
        else {
          res.json().then((err)=> setErrors(err.errors))
        }
      })
      
    }
return (
    <>
 <form onSubmit={handleNewUserSubmit}>
 <label>
   Username:
 <input type="text" id="newUsername" name="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
 </label>
 <label>
   Password:
 <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
   </label>
 <label>
   Password Confirmation:
 <input type="password" id="passwordConfirmation" name="passwordConfirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
   </label>
   <label>
     <button type="submit">submit</button>
   </label>
   </form>
   </>
)
}