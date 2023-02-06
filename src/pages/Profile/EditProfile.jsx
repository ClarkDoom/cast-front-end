import { useState } from "react"
import { Link } from "react-router-dom"
import styles from './EditProfile.css'

const EditProfile = (props) => {
  
  const [photoData, setPhotoData] = useState({})
  
  const [form, setForm] = useState({
    pronouns: '',
    location: '',
    phoneNumber: '',
    email: '',
    website: ''
  })
  
  const handleProfileChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }
  
  const handleProfileSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfile(form)
  }

  // handle add skills
  const [talentForm, setTalentForm] = useState({
    unionStatus: 'Not Affiliated',
    hair: '',
    eyes: '',
    feet: '',
    inches: '',
    height: '',
    weight: '',
    about: '',
    skills: '',
    trades: ''
  })

  const handleTalentChange = ({target}) => {
    setTalentForm({...talentForm, [target.name]: target.value})
  }
  
  const handleTalentSubmit = (e) => {
    e.preventDefault()
    props.handleAddTalentProfile(talentForm)
  }


  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }



  // handle submit function from SignupForm.jsx
  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     await authService.signup(formData, photoData.photo)
  //     props.handleSignupOrLogin()
  //     navigate('/')
  //   } catch (err) {
  //     props.updateMessage(err.message)
  //   }
  // }

  
  return (
    <div>
      <h1>Edit Profile Component</h1> 

      <h2>Profile Details</h2>
      <form onSubmit={handleProfileSubmit}>
        <label htmlFor="pronouns-input">Pronouns</label>
        <select
          name="pronouns"
          id="pronouns-input"
          onChange={handleProfileChange}
          value={form.pronouns}
        >
          <option value="He/Him/His">He/Him/His</option>
          <option value="She/Her/Hers">She/Her/Hers</option>
          <option value="They/Them/Theirs">They/Them/Theirs</option>    
        </select>
        <label htmlFor="location-input">Location</label>
        <input
          type="text"
          name="location"
          id="location-input"
          onChange={handleProfileChange}
          value={form.location}
        />
        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phone-number-input"
          onChange={handleProfileChange}
          value={form.phoneNumber}
        />        
        <label htmlFor="website-input">Website</label>
        <input
          type="text"
          name="website"
          id="website-input"
          onChange={handleProfileChange}
          value={form.website}
        />
        <button type='submit'>Save</button> 
      </form>


      {/* talent account creation  */}
      <h2>Talent Account Details</h2>
      <form onSubmit={handleTalentSubmit}>

      <label htmlFor="photo-upload">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />

      <label htmlFor="union-status-input">Union Status</label>
        <select
          name="unionStatus"
          id="union-status-input"
          value={form.unionStatus}
          onChange={handleTalentChange}
        >
          <option value="SAG">SAG</option>
          <option value="AEA">AEA</option>
          <option value="Not Affiliated">Not Affiliated</option>
        </select>

        <label htmlFor="hair-input">Hair</label>
        <select
          name="hair"
          id="hair-input"
          value={form.hair}
          onChange={handleTalentChange}
        >
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="Blonde">Blonde</option>
          <option value="Red">Red</option>
          <option value="Grey">Grey</option>
          <option value="Other">Other</option>
        </select>
        
        <label htmlFor="eyes-input">Eyes</label>
        <select
          name="eyes"
          id="eyes-input"
          value={form.eyes}
          onChange={handleTalentChange}
        >
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="height-feet-input">Feet</label>
        <input 
          id='height-feet-input' 
          type="number" 
          value={form.feet}
          name="feet"
          onChange={handleTalentChange}
        />

        <label htmlFor="height-inches-input">Inches</label>
        <input 
          id='height-inches-input' 
          type="number" 
          name='inches'
          value={form.inches}
          onChange={handleTalentChange}
        />
        
        <label htmlFor="height">Height</label>

        {/* add class="hidden" */}

        <input 
          id='height' 
          type="number"
          name="height"
          value={form.height}
          onChange={handleTalentChange}
        />
        
        <label htmlFor="weight-input">Weight</label>
        <input 
          id='weight-input' 
          type="number" 
          value={form.weight}
          // onChange={handleTalentChange}
        />

        <label htmlFor="about-input">About</label>
        <textarea 
          name="about" 
          id="about-input" 
          cols="30" 
          rows="10"
          value={form.about}
          onChange={handleTalentChange}
        >
        </textarea>

        <label htmlFor="skills-input">Skills</label>
        <select
          name="skills"
          id="skills-input"
          // value={form.category}
          // onChange={handleChange}
        >
          <option value="Brown">Brown</option>
        </select>
        
        <label htmlFor="trades-input">Trades</label>
        <select
          name="trades"
          id="trades-input"
          // value={form.category}
          // onChange={handleChange}
        >
          <option value="Brown">Brown</option>
        </select>

        <label htmlFor="reel-input">Reel Link</label>
        <input 
          type="text" 
          id="reel-input" 
          name="reelLink"
          value={form.reelLink}
          onChange={handleTalentChange}
        />

        <button type="submit">Save</button>
      </form>

      {/* Once Talent account has been saved, show these buttons */}

      <Link to="">Add Experience</Link>
      <Link to="">Edit Education</Link>
      <Link to="">Edit Training</Link>

    </div>
  );
}

export default EditProfile;