import { NavLink } from 'react-router-dom'
import female_icon from './../../../../../assets/female_icon.jpg'
const UserItem = (props) => {
  let addFriend = (id) => {
    props.addFriend(id)
  }
  let removeFriend = (id) => {
    props.removeFriend(id)
  }
  console.log({props})
  return (
    <div>
      <NavLink to={"/searchUsers/" + props.id}>
        <img src={props.photos.small != null ? props.photos.small : female_icon} width='40px' />
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
