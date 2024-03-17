import React from 'react';
import '../Styles/Home.css'
import '../Styles/Committee.css'
import '../Styles/Registration.css'

const Home = () => {
  return (
    <>
    <div className="container">
    </div>
    <div className="committee">
      <h2>CONFERENCE COMMITTEEs</h2>
      <div className="committee-members">
        <div className="member">
          <i className="fas fa-user-shield"></i>
          <p>CHIEF PATRONS<br/>Hon. Shri. Rohidasji Patil<br/>Founder, Jawahar Education Society</p>
        </div>
        <div className="member">
          <i className="fas fa-user-tie"></i>
          <p>PATRONS<br/>Hon. Shri. Vinay Patil<br/>Chairman, Jawahar Education Society</p>
        </div>
        <div className="member">
          <i className="fas fa-user-tie"></i>
          <p>PATRONS<br/>Hon. Shri. Kunal Patil<br/>Secretary, Jawahar Education Society</p>
        </div>
        <div className="member">
          <i className="fas fa-user-friends"></i>
          <p>CONFERENCE CHAIRPERSON<br/>Dr. V. N. Pawar<br/>Principal, A. C. Patil College of Engineering</p>
        </div>
        <div className="member">
          <i className="fas fa-user-friends"></i>
          <p>CONFERENCE CONVENOR<br/>Dr. M. M. Deshpande<br/>HoD, Department of Computer Engineering</p>
        </div>
        <div className="member">
          <i className="fas fa-user-friends"></i>
          <p>CONFERENCE CONVENOR<br/>Prof. S. P. Bansu<br/>HoD, Department of AI & Data Science</p>
        </div>
      </div>
    </div>
    <div className="papersubmission">
    <div className="schedule-table">
        <h2>PAPER SUBMISSION SCHEDULE</h2>
        <table>
          <tbody>
            <tr>
              <td className="activity">Call for Paper Submission:</td>
              <td className="date">5th March - 15th March 2024 (Hard Extension)</td>
            </tr>
            <tr>
              <td className="activity">Notification of Acceptance Date:</td>
              <td className="date">20th March 2024</td>
            </tr>
            <tr>
              <td className="activity">Final Paper Submission Date:</td>
              <td className="date">25th March 2024</td>
            </tr>
            <tr>
              <td className="activity">Final Registration & Payment Date:</td>
              <td className="date">25th March 2024</td>
            </tr>
            <tr>
              <td className="activity">Conference Date:</td>
              <td className="date">5th and 6th April 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div className="container3">
  <div className="registration-fees">
    <h2>REGISTRATION FEES & ONLINE PAYMENT</h2>
  </div>
  <div className="main-card">
    <div className="card">
      <h3>Industrialists</h3>
      <p>INR. 3000/-</p>
    </div>
    <div className="card">
      <h3>UG, PG & Research Scholars</h3>
      <p>INR. 2000/-</p>
    </div>
    <div className="card">
      <h3>Academicians</h3>
      <p>INR. 2000/-</p>
    </div>
    <div className="card">
      <h3>Foreign Authors</h3>
      <p>USD 50</p>
    </div>
  </div>
</div>
   </>
  );
}

export default Home;
