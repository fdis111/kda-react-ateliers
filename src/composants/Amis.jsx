import React, {useState} from 'react';
import users from "../users";
import Users from "./Users";
import Navigation from "./Navigation"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



function Amis() {
  const [myUsers, setUsers] = useState(users)
  const [name, setName] = useState("")

  const handleChange = (evt) => {
    setName(evt.target.value)
    setUsers(users.filter(user => user.noms.toLowerCase().includes(evt.target.value.toLowerCase())))
  }

  return (
    <>
    <Navigation value={name} onChange={ handleChange } />
    <div className="conataineur">
      <Users users={myUsers}/>
    </div>
    </>
  );
}

export default Amis;