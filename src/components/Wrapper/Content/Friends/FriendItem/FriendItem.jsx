import React from 'react'
import { NavLink } from 'react-router-dom'

const FriendItem = (props) => {
  const removeFriend = (id) => {
    props.removeFriend(id);
  }
  return (
    <div>
      <NavLink to={"/friends/" + props.id}>
        {props.name}
      </NavLink>
      <button onClick={() => removeFriend(props.id)}>Unfriend</button>
    </div>
  )
}

export default FriendItem
