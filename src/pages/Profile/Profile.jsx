import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import './Profile.css'

import * as profileService from '../../services/profileService'

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education"
import Training from "../../components/Training/Training";


const Profile = (props) => {
  
  const [profile, setProfile] = useState({})
  const [talentId, setTalentId] = useState(null)
  const [cdId, setCdId] = useState(null)
  console.log(profile);
  console.log();

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile(props.user.profile)
      setProfile(profileData)
      if(profileData.isCd) {
        setCdId(profileData.cdAccount)
      } else {
        setTalentId(profileData.talentAccount)
      }
    }
    fetchProfile()
  }, [props.user.profile])



  console.log('PROFILE', profile);
  console.log('TALENTID', talentId);
  console.log('CDID', cdId);
  
  if(!profile) return "loading"

  return ( 
    <section className="profileDetails">
      <h1 id="talentName">{profile.name}</h1>
      <p>{profile.pronouns}</p>
      {profile.photo && <img src={profile.photo} alt="user talent pic" ></img>}
      <p>Location: {profile.location}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Email: {props.user.email}</p>
      <a href={`${profile.website}`}>Visit {profile.name}'s website</a>
      {profile.cdAccount && <p>Company {profile.cdAccount.company}</p>}
      
      {profile.talentAccount
      
      &&

      <>

      <p>About: {profile.talentAccount.about}</p>
      <p>Union Status: {profile.talentAccount.unionStatus}</p>
      <p>Hair: {profile.talentAccount.hair}</p>
      <p>eyes: {profile.talentAccount.eyes}</p>
      <p>Height: {profile.talentAccount.height}</p>
      <p>Weight: {profile.talentAccount.weight}</p>
      <p>Skills: {profile.talentAccount.skills}</p>
      <p>Trades: {profile.talentAccount.trades}</p>

      <h2>Experience</h2>
      <Link className="add" to="/profile/add-experience" state={{talentId: talentId}}>Add Experience</Link>
      {profile.talentAccount.experience.map(experience => 
        <>
          <Experience 
            handleDeleteExperience={props.handleDeleteExperience} 
            key={experience._id} 
            experience={experience}
            talentId={talentId}  
          />
          <form onSubmit={()=> props.handleDeleteExperience(talentId._id, experience._id)}>
            <button id="remove" type='submit'>REMOVE RECORD</button>
          </form>  
        </>
      )}

      <h2>Education</h2> 
      <Link className="add" to="/profile/add-education" state={{talentId: talentId}}>Add Education</Link>
      {profile.talentAccount.education.map(education => 
        <>
          <Education 
            key={education._id} 
            education={education}
            talentId={talentId}
            handleDeleteEducation={props.handleDeleteEducation}
            />
            <form onSubmit={()=> props.handleDeleteEducation(talentId._id, education._id)}>
              <button id="remove" type='submit'>REMOVE RECORD</button>
            </form>  
        </>
      )}

      <h2>Training</h2> 
      <Link className="add" to="/profile/add-training" state={{talentId: talentId}}>Add Training</Link>
      {profile.talentAccount.training.map(training => 
        <>
          <Training 
            key={training._id} 
            training={training}
            talentId={talentId}
            handleDeleteTraining={props.handleDeleteTraining}
          />
          <form onSubmit={()=> props.handleDeleteTraining(talentId._id, training._id)}>
            <button id="remove" type='submit'>REMOVE RECORD</button>
          </form>  
        </>
      )}
      </>
      }
      {
        (profile.talentAccount === talentId)
      &&
        <Link 
          id="editLink"
          to="/profile/edit"
          state={{isCd: profile.isCd, talentId: talentId, cdId: cdId, profile: profile}}
        >
          Edit Profile
        </Link>
      }
    </section> 
  );
}

export default Profile;