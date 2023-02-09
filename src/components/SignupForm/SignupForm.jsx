import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import { useEffect } from 'react'
import Profile from '../../pages/Profile/Profile'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
console.log(props);
  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/profile/create',  {
        state: {
          signupType: isCd
        }
      })
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const [isCd, setIsCd] = useState(null)

  useEffect(() => {
    const signupTypeToBoolean = async () => {
      if(props.signupType === 'talent') {
        setIsCd(false)
      } else if(props.signupType === 'cd') {
        setIsCd(true)
      }
    }
    signupTypeToBoolean()
  },[props.signupType])

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      {
        (!isCd)
      &&
        <div className={styles.inputContainer}>
          <label htmlFor="photo-upload" className={styles.label}>
            Upload Headshot
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
      }
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          SIGN UP
        </button>
        <Link to="/">
          <button>CANCEL</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
