import { NavLink } from 'react-router-dom'

const UserItem = (props) => {
  let addFriend = (id) => {
    props.addFriend(id)
  }
  let removeFriend = (id) => {
    props.removeFriend(id)
  }
  return (
    <div>
      <NavLink to={"/searchUsers/" + props.id}>
        {props.name}
      </NavLink>
      {props.isFriend ? (
        <button onClick={() => {removeFriend(props.id)}}>
          Unfriend
        </button>
      ) : (
        <button onClick={() => { addFriend(props.id) }}>Add Friend</button>
        )}
    </div>
  )
}

export default UserItem
