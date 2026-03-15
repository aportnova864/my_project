import React from 'react'
import UserItem from './UserItem'
import axios from 'axios'
class SearchUsers extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      this.props.setUsers(response.data.items)
    })
  }
  render() {
    return (
      <div>
        All Users:
        {
          this.props.UsersData.map(user => (<UserItem
            key={user.id}
            name={user.name}
            id={user.id}
            addFriend={this.props.addFriend}
            removeFriend={this.props.removeFriend}
            isFriend={user.isFriend}
            setUsers={this.props.setUsers}
            photos={user.photos}
          />))
        }
      </div>
    )
  }
}
export default SearchUsers
