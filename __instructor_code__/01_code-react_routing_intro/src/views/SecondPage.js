import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'

const users = [
  { name: 'jose', age: 26, location: 'lisbon' },
  { name: 'santi', age: 25, location: 'buenos aires' },
  { name: 'becca', age: 25, location: 'london' }
];

function SecondPage(props) {
console.log(props.match.params)
    const [user, setUser] = useState(null)
    const {name} = props.match.params
  
  
  useEffect(()=>{
    const newUser = users.find(user => user.name === name)
    setUser(newUser)
  })

  return(
      (user ? (
        <div>
          <p>
            This is the second page for user with name {user.name}, age {user.age} and location {user.location}.
          </p>
        </div>
      )
      : ''
    )
  )
}

export default SecondPage;
