import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../Styles/CallForPaper.css'; 
import '../Styles/PaperSubmission.css'; 
import '../Styles/Guidelines.css'; 


const CallForPaper = () => {
  const themes = [
    "Artificial Intelligence & Machine learning",
    "Internet of Things (IoT)",
    "Block Chain & Cyber Security",
    "Quantum Computing",
    "Open Source Software",
    "Robotic Process Automation",
    "Data Sciences",
    "Pervasive and Ubiquitous Computing",
    "Advances in Signal Processing",
    "Power Electronics and Energy Conversion",
    "Educational Technologies",
    "Computer Vision",
    "Augmented Reality (AR) & Virtual Reality (VR)",
    "Wireless Communication and Networking",
    "Electrical Vehicles",
    "Semiconductor Technologies",
    "Lean Six Sigma",
    "Emerging Markets",
    "Smart City Applications",
    "E-Commerce",
    "Battery Technologies",
    "Renewable Energy",
    "Agricultural Technologies",
    "Fluid Flow And Heat Transfer In Green Technology",
    "Parallel and Distributed Computing",
    "Data and Text Analytics",
    "Electrical Machines and Drives",
    "Power systems",
    "Healthcare Technologies",
    "Additive Manufacturing"
  ];

  // Shuffle function to randomize the order of themes
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Randomize the order of themes
  const shuffledThemes = shuffleArray(themes);

  return (
    <>
    <div className="theme-container">
      <h2>Conference Theme</h2>
      <div className="theme-cards">
        {shuffledThemes.map((theme, index) => (
          <div key={index} className="theme-card">
            <h3>{theme}</h3>
          </div>
        ))}
      </div>
    </div>
    <div className="guidelines-container">
      <div className="submission-guidelines">
        <h2>Paper Submission Guidelines</h2>
        <ul>
          <li><FaCheckCircle className="icon" /> The number of pages in the paper should not exceed 6 pages.</li>
          <li><FaCheckCircle className="icon" /> Up to 25% of plagiarism is acceptable.</li>
          <li><FaCheckCircle className="icon" /> The Paper format is available on the conference website in the download section.</li>
          <li><FaCheckCircle className="icon" /> The authors of the accepted papers will be invited for oral presentation in the conference.</li>
          <li><FaCheckCircle className="icon" /> Registration of at least one author is compulsory.</li>
          <li><FaCheckCircle className="icon" /> All the oral papers presented in the conference will be submitted through CMT (Conference Management Toolkit).</li>
          <li><FaCheckCircle className="icon" /> Selected papers will be published in SCOPUS Indexed/UGC Care listed Journals (with additional modifications). Additional publication (in journal) costs are to be borne by the delegate if applicable.</li>
        </ul>
      </div>
      <div className="registration-guidelines">
        <h2>Successful Registration Guidelines</h2>
        <ul>
          <li><FaCheckCircle className="icon" /> For successful registration fill the registration form on the conference website after the acceptance notification only.</li>
          <li><FaCheckCircle className="icon" /> Email the following on icatm2024@acpce.ac.in</li>
          <li><FaCheckCircle className="icon" /> Alternately, Authors should submit a .pdf or .doc file of their papers in single line spacing for the purpose of review to icatm24@acpce.ac via Email.</li>
          <li><FaCheckCircle className="icon" /> The maximum length of the ready to print paper is limited to 8 pages in single line spacing single column format with 1.25” margin on the left side and 1” margin on all other sides.</li>
          <li><FaCheckCircle className="icon" /> The title of the paper on the first page must be in 14 size Times New Roman(TNR) bold font. The names of authors and affiliations in 11 size TNR font, abstract in 10 size TNR font. The headings and subheadings must be in 12, TNR font with one line space above and below the headings and subheadings. Heading will be bold but subheadings not bold. The headings and subheadings must follow a decimal number sequence. The main text must be 12, TNR font.</li>
          <li><FaCheckCircle className="icon" /> The Figures must be in .jpg format and to be put the place of the first reference. The Figures must be labeled at the bottom and the Tables must be labeled at the top. The Equations must be numbered at the end.</li>
          <li><FaCheckCircle className="icon" /> The References in 10 size TNR font must be arranged in a numbered list and the numbers to be used for referencing them in the main text. Their description must follow the sequence: Names of the authors, Title of the reference/book (in italic font), Name of the journal/publisher of the book, volume/edition, number, year, page numbers.</li>
        </ul>
      </div>
    </div>
  </>
  );
}

export default CallForPaper;

