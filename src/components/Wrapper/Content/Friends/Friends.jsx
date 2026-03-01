import React from 'react'
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {
  let FriendsElements = props.FriendsPage.FriendsData.map(friend=>(<FriendItem name = {friend.name} id = {friend.id}/>))
  return (
    <div>
      {FriendsElements}
    </div>
  )
}

export default Friends
