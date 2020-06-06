import React from 'react';
import Card from './Card';

const Users = (props) => {
   return( 
    <div className="ui link cards">
        {
            props.users.map(user => <Card {...user}/>)
        }
    </div>
   )
}

export default Users