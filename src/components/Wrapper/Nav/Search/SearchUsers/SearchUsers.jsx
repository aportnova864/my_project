import React from 'react'
import UserItem from './UserItem'
import axios from 'axios'
const SearchUsers = (props) => {
  let getUsers = () => {
    if (props.UsersData.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items)
      })
    }
  }
  let UsersElements = props.UsersData.map(user => (<UserItem
    key={user.id}
    name={user.name}
    id={user.id}
    addFriend={props.addFriend}
    removeFriend={props.removeFriend}
    isFriend={user.isFriend}
    setUsers={props.setUsers}
    photos={user.photos}
  />))
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      All Users:
      {UsersElements}
    </div>
  )
}
export default SearchUsers
