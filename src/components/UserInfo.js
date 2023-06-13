import React from 'react'

const UserInfo = ({ user }) => {
  return (
    <div className="user-info">
      <img src="images/icons/Notification.png" alt="bell-icon"></img>
      {user ? (
        <>
          <div className="user-avatar">
            <img src={`https://www.gravatar.com/avatar/${user.email}`} alt="User Avatar" />
          </div>
          <div className="info">
            <div className="greetings">welcome</div>
            <div className="user-name">{user.name}</div>
          </div>
        </>
      ) : (
        <div>Loading user data...</div>
      )}
    </div>
  )
}

export default UserInfo