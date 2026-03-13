import React from 'react'

const FriendPage = (props) => {
  const friend = props.friend;
  if (!friend) return <div>Friend not found</div>;
  return (
    <div>
      <div>Wrap</div>
      <div>{props.friend.name}</div>
      <div>ProfileInfo</div>
    </div>
  )
}

export default FriendPage
