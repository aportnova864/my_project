import React from 'react'
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {
  let FriendsElements = props.FriendsPage.FriendsData.map(friend => (<FriendItem
    key={friend.id}
    name={friend.name}
    id={friend.id}
    removeFriend={props.removeFriend}
  />))
  return (
    <div>
      My Friends
      {FriendsElements}
    </div>
  )
}

export default Friends
