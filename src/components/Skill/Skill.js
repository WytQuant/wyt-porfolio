import './Skill.css';

const Skill = () => {
  return (
    <section id='skill'>
      <h1 className='skills-title' data-aos='fade-down'>
        My skills
      </h1>
      <div className='skills-container' data-aos='fade-left'>
        <div className='coding-skill'>
          <h2 className='coding-skill-title'>Coding skills</h2>
          <div className='coding-skill-container'>
            <img src='./images/html5-original.svg' alt='css' />
            <p>HTML</p>
          </div>
          <div className='coding-skill-container'>
            <img src='./images/css3-original.svg' alt='css' />
            <p>Cascading Style Sheets</p>
          </div>
          <div className='coding-skill-container'>
            <img src='./images/javascript-original.svg' alt='css' />
            <p>Javascript</p>
          </div>
          <div className='coding-skill-container'>
            <img src='./images/nodejs-original.svg' alt='css' />
            <p>Node.js</p>
          </div>
          <div className='coding-skill-container'>
            <img src='./images/react-original.svg' alt='css' />
            <p>React.js</p>
          </div>
          <div className='coding-skill-container'>
            <img src='./images/mongodb-original.svg' alt='css' />
            <p>MongoDB</p>
          </div>

          <div className='coding-skill-container'>
            <img src='./images/git-scm-icon.svg' alt='css' />
            <p>Git</p>
          </div>
        </div>
        <div className='soft-skill'>
          <h2 className='soft-skill-title'>Soft skills</h2>
          <div className='bsm-skill-container'>
            <p>Growth mindset</p>
          </div>
          <div className='bsm-skill-container'>
            <p>Teamwork</p>
          </div>
          <div className='bsm-skill-container'>
            <p>Proactiveness</p>
          </div>
          <div className='bsm-skill-container'>
            <p>Personal Responsibility</p>
          </div>
          <div className='bsm-skill-container'>
            <p>Persistence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
