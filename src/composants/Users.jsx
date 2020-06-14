import React from 'react';
import Card from './Card';

const Users = (props) => {
   return( 
    <div className="ui link cards">
        {
            props.users.map((user, i) => <Card key={i} {...user}/>)
        }
    </div>
   )
}

export default Users