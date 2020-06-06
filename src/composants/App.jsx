import React, {useState} from 'react';
import Card from './Card';
import users from "../users"
import Users from "./Users"


function App() {
  const [myUsers, setUsers] = useState(users)
  const [name, setName] = useState("")

  const handleChange = (evt) => {
    setName(evt.target.value)
    setUsers(users.filter(user => user.noms.toLowerCase().includes(evt.target.value.toLowerCase())))
  }

  return (
    <div className="conataineur">
      <input type="text" value={name} onChange={ handleChange } />
      <Users users={myUsers}/>
    </div>
  );
}

export default App;
