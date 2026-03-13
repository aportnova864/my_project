import React from 'react'
import UserItem from './UserItem'

const SearchUsers = (props) => {
  let UsersElements = props.UsersData.map(user => (<UserItem
    name={user.name}
    id={user.id}
    addFriend={props.addFriend}
    removeFriend={props.removeFriend}
    isFriend={user.isFriend}
  />))
  return (
    <div>
      All Users:
      {UsersElements}
    </div>
  )
}

export default SearchUsers
