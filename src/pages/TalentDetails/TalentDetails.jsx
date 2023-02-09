import { useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import styles from "./TalentDetails.module.css"

// Services
import * as talentService from "../../services/talentService"
// import * as profileService from "../../services/profileService"

// components
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Training from "../../components/Training/Training";
import Icon from "../../components/Icon/Icon"

const TalentDetails = (props) => {
  const { talentId } = useParams()

  const [form, setForm] = useState({
    _id: ''
  })
  const location = useLocation()
  const talent = location.state?.talent

  console.log("talent", talent)
  
  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddToList(form._id, talent._id)
  }
  console.log('STATE TALENT', talent);
  return (
    <>
      <div className={styles.talentDetailsContainer}>
        <div className={styles.topRow}>
          <button className={styles.backBtn}><Icon name='Back' /></button>
          <div className={styles.nameGroup}>
            <h1>{talent.name}</h1>
            <h6>{talent.profile?.pronouns}</h6>
          </div>
          <button className={styles.editBtn}><Icon name='Edit' /></button>
        </div>
        {/* this commented out div seems to be making things act wonky. */}
        {/* <div className={styles.headshotDeatils}></div> */}
          <img className={styles.headshotImg} src={talent.profile.photo} alt="headshot" />

          <div className={styles.actorDetails}>
            <p>Union Status: {talent.unionStatus}</p>
            <p>Location: {talent.profile.location}</p>
          </div>

          <div className={styles.line}>
            <p>Weight: {talent.weight}</p>
            <p>Height: {talent.height}</p>
          </div>

          <div className={styles.line}>
            <p>Eyes: {talent.eyes}</p>
            <p>Hair: {talent.hair}</p>
          </div>
            <p>About: {talent.about}</p>
          {/* </div> */}
        </div>

        <div className={styles.buttonLinks}>
          <Icon name='Reels' />
          <Icon name='Calendar' />
          <Icon name='Add' />
        </div>

        {talent.experience.map((experience, idx) => 
          <Experience key={idx} experience={experience}/>  
        )}
        {talent.education.map((education, idx) => 
          <Education key={idx} education={education}/>  
        )}
        {talent.training.map((training, idx) => 
          <Training key={idx} training={training}/>  
        )}
      
        <form onSubmit={handleSubmit}>
            <select
                required
                name='_id'
                value={form._id}
                onChange={handleChange}
                placeholder={`select a list`}
            >
              <option>Select a List</option>
              {props.lists.map(list => (
                <option key={list._id} value={list._id}>{list.titleOfList}</option>
              ))}
            </select>
            <button type='submit'>Add to List!</button>
        </form>
    </>
  )
}

export default TalentDetails;