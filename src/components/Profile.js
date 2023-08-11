import React from 'react';
import img from './img.jpg';
const Profile=()=>{
    return(
      <div>
        <section id="profile" className="section profile-section">
        <div className="profile-content">
          <img src={img} alt="Profile" ></img>
          <div className="profile-text">
            <h2>Hello, I'm Kaviya Priya M </h2>
            <p>Passionate about creating elegant web experiences.</p>

            
          </div>
        </div>
        </section>
      </div>
    );
}
export default Profile;