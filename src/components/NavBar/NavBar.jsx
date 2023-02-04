import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/talent'>Talent Search</Link></li>
          <li><Link to='lists'>Lists</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          {/* Items below here will be removed in final app */}
          <li><Link to='/profiles'>Profiles</Link></li>
          <li><Link to='/change-password'>Change Password</Link></li>
          <li><Link to='' onClick={handleLogout}>LOG OUT</Link></li>
        </ul>
      :
        <ul>
          <li><Link to='/login'>Log In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
