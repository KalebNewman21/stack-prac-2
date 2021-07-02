import React, {useState, useEffect} from 'react'
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState(null);

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get('./users').then((users) => setUsers(users)).catch((err) => console.log(err));
  }, [])

  function submitForm() {
    if (username === "") {
      alert("Enter Name")
      return;
    }
    if(email === ""){
      alert("Enter Email")
      return;
    }
    axios.post('./users', {
      username: username,
      email: email,
    })
    .then(function () {
      alert('Account Created Successfully')
      window.location.reload()
    })
    .catch(function () {
      alert("Nope")
    })

  }
  return(
    <>
      <h1>My Prject</h1>
      {users === null ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No User Available</p>
      ) : (
        <>
          <h2>Available Users</h2>
          <ol>
            {users.map((user, index) => (
              <li key={index}>
                Name: {user.name} - Email: {user.email}
              </li>
            ))}
          </ol>
        </>
      )}
      <form  onSubmit={submitForm}>
        <input
          onChange= {(e) => setUsername(e.target.value)}
          type="text"
          placceholder="Enter Your Name"/>
          <input
            onChange= {(e) => setEmail(e.target.value)}
            type="text"
            placceholder="Enter Your Email Address"/>
          <input type="submit"/>
      </form>
    </>
);

}
export default App
