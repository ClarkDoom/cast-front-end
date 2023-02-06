import { useState } from "react"

const EditProfile = (props) => {
  
  const [photoData, setPhotoData] = useState({})

  const [form, setForm] = useState({
    pronouns: '',
    location: '',
    phoneNumber: '',
    email: '',
    website: ''
  })

  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleEditProfile(form)
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
    <>
      <h1>Edit Profile Component</h1> 

      <form onSubmit={handleSubmit}>
        <label htmlFor="pronouns-input">Pronouns</label>
        <select
          name="pronouns"
          id="pronouns-input"
          onChange={handleChange}
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
          onChange={handleChange}
          value={form.location}
        />
        <label htmlFor="phone-number-input">Phone Number</label>
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phoneNumber"
          id="phone-number-input"
          onChange={handleChange}
          value={form.phoneNumber}
        />        
        <label htmlFor="website-input">Website</label>
        <input
          type="text"
          name="website"
          id="website-input"
          onChange={handleChange}
          value={form.website}
        />
        <button type='submit'>Save</button> 
      </form>

      {/* talent account creation  */}

      <form action="">

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
          // value={form.category}
          // onChange={handleChange}
        >
          <option value="SAG">SAG</option>
          <option value="AEA">AEA</option>
          <option value="Not Affiliated">Not Affiliated</option>
        </select>

        <label htmlFor="hair-input">Union Status</label>
        <select
          name="hair"
          id="hair-input"
          // value={form.category}
          // onChange={handleChange}
        >
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="Blonde">Blonde</option>
          <option value="Red">Red</option>
          <option value="Grey">Grey</option>
          <option value="Other">Other</option>
        </select>
        
        <label htmlFor="eyes-input">Union Status</label>
        <select
          name="eyes"
          id="eyes-input"
          // value={form.category}
          // onChange={handleChange}
        >
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="height-feet-input">Feet</label>
        <input id='height-feet-input' type="number" />

        <label htmlFor="height-inches-input">Inches</label>
        <input id='height-inches-input' type="number" />
        
        <label htmlFor="height">Height</label>
        <input id='height' type="number" class="hidden"/>
        
        <label htmlFor="weight-input">Weight</label>
        <input id='weight-input' type="number" />

        <label htmlFor="about-input">About</label>
        <textarea name="about-inpu" id="" cols="30" rows="10"></textarea>

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
        <input type="text" id="reel-input" name="reelLink"/>

        <button type="submit">Save</button>
      </form>

    </>
  );
}

export default EditProfile;