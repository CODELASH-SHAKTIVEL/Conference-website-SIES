import React from 'react';
import '../Styles/About.css'; 
import aboutpic from '../assets/about.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="left">
        <img src={aboutpic} alt="About Institute" width="600" height="800" />
      </div>
      <div className="right">
        <h2>ABOUT THE INSTITUTE</h2>
        <p>
          Today, Jawahar Education Society’s A. C. Patil College of Engineering (ACPCE) is a premium Technical Institute offering graduate and post graduate professional Degrees in Engineering and Management and is approved by apex technical bodies, All India Council for Technical Education New Delhi (AICTE), recognized by Director of Technical Education Maharashtra State (DTE) and is affiliated to Mumbai University for last 31 years. Institute is also accredited by NAAC.  Here, in the campus more than 1800 undergraduates and graduate students are undergoing various professional Engineering and Management courses. The campus comprises seven Degree Engineering and Management Courses. ACPCE is consistently ranked as one of the most sought  after Engineering Institutes in Mumbai University.
        </p>
        <p>
          The institute provides quality engineering education in the modern fields of technology disciplines at UG viz.  Electrical Engineering, Mechanical Engineering, Electronics & Telecommunication, Computer Engineering, Artificial Intelligence & Data Science, Information Technology, Computer Science Engineering(Internet of Things and Cyber Security including Blockchain), Masters in Management Studies  and Ph.D. in Computer and Electrical Engineering. The institute aims to create skilled professionals and engineers for catering the needs of industries and society.
        </p>
        <h2>ABOUT ICATM-2024</h2>
        <p>
          International Conference on Advances in Technology  and Management -2024 is the 2nd International Conference organized by Jawahar Education Society’s A.C.Patil college of Engineering Kharghar, Navi Mumbai in association with University of Mumbai. The ‘International Conference’ spanning over 2 days is meticulously designed to bring together renowned academicians, honored researchers from distinguished institutions, Industry leaders and practitioners as well as doctoral students.
        </p>
        <h2>OBJECTIVES</h2>
        <p>
          Bring together professionals in the field of Science & Technology around the globe purpose of encouraging innovative ideas and sharing diversified knowledge.
        </p>
      </div>
    </div>
  );
}

export default About;
