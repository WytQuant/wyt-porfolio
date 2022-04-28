import './Project.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { SiJavascript, SiExpress, SiMongodb, SiPandas } from 'react-icons/si';

const Project = () => {
  return (
    <section id='project'>
      <h1 className='project-title' data-aos='fade-down'>
        Projects
      </h1>

      {/* first project */}
      <div className='project-container' data-aos='fade-left'>
        <div className='project-img'>
          <img src='./images/colmar.jpg' alt='colmar-project' />
        </div>
        <div className='project-text'>
          <h1 className='project-text-title'>Colmar Academy</h1>
          <p>
            This project is the static website and it was developed after I
            learned HTML and CSS for 1 week.
          </p>
          <div className='project-tools'>
            <div className='project-tool'>
              <p>HTML</p>
              <FaHtml5 />
            </div>
            <div className='project-tool'>
              <p>CSS</p>
              <FaCss3Alt />
            </div>
          </div>
          <div className='project-link'>
            <a
              className='github-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/WytQuant/WytQuant.github.io/tree/main/colmar-academy'
            >
              <FaGithub />
            </a>
            <a
              className='web-link'
              target='_blank'
              rel='noreferrer'
              href='https://wytquant.github.io/colmar-academy/'
            >
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      {/* second project */}
      <div className='project-container' data-aos='fade-right'>
        <div className='project-text project-text-left'>
          <h1 className='project-text-title'>Jamming</h1>
          <p>
            The jamming project was developed by using React after I learned
            about react around a few week. The jamming project can search songs
            on Spotify and record them into playlists easily by using APIs from
            Spotify.
          </p>
          <div className='project-tools'>
            <div className='project-tool'>
              <p>React.js</p>
              <FaReact />
            </div>
            <div className='project-tool'>
              <p>Javascript</p>
              <SiJavascript />
            </div>
          </div>
          <div className='project-link project-link-left'>
            <a
              className='github-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/WytQuant/jsd-jamming-assessment'
            >
              <FaGithub />
            </a>
            <a
              className='web-link'
              target='_blank'
              rel='noreferrer'
              href='http://wyt.surge.sh/'
            >
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
        <div className='project-img project-img-right'>
          <img src='./images/jamming.jpg' alt='colmar-project' />
        </div>
      </div>

      {/* third project */}
      <div className='project-container' data-aos='fade-left'>
        <div className='project-img'>
          <img src='./images/heartrate-project.png' alt='colmar-project' />
        </div>
        <div className='project-text'>
          <h1 className='project-text-title'>HeartRate</h1>
          <p>
            The HeartRate project was developed by using MERN stack. The
            HeartRate allows users to record, create edit, and delete their
            activities. In additional, It also can provide the news about
            Fitness and Nutrition to users.
          </p>
          <div className='project-tools'>
            <div className='project-tool'>
              <p>React.js</p>
              <FaReact />
            </div>
            <div className='project-tool'>
              <p>Node.js</p>
              <FaNodeJs />
            </div>
            <div className='project-tool'>
              <p>Express.js</p>
              <SiExpress />
            </div>
            <div className='project-tool'>
              <p>MongoDB</p>
              <SiMongodb />
            </div>
          </div>
          <div className='project-link'>
            <a
              className='github-link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/WytQuant/exercieswebapp-project'
            >
              <FaGithub />
            </a>
            <a
              className='web-link'
              target='_blank'
              rel='noreferrer'
              href='https://heartrateapp.vercel.app/'
            >
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      {/* Fourth project */}
      <div className='project-container' data-aos='fade-right'>
        <div className='project-text project-text-left'>
          <h1 className='project-text-title'>Fakenews Detection</h1>
          <p>
            For this project, I used machine learning for detecting fake news by
            using those news content. Data chose for training ML of this
            project, I got them from www.antifakenewscenter.com around 400
            datasets. Moreover, I selected many machine learning models for
            predicting which news is fake and picking up the best model that
            predicted accurately by comparing the accuracy of each model.
          </p>
          <div className='project-tools'>
            <div className='project-tool'>
              <p>Python</p>
              <FaPython />
            </div>
            <div className='project-tool'>
              <p>Pandas</p>
              <SiPandas />
            </div>
          </div>
          <div className='project-link project-link-left'>
            <a
              className='web-link'
              target='_blank'
              rel='noreferrer'
              href='https://medium.com/@g10.dse5/fake-news-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%96%E0%B8%B2%E0%B8%A1-ml-b9e07cfa5f75'
            >
              <BsBoxArrowUpRight />
            </a>
          </div>
        </div>
        <div className='project-img project-img-right'>
          <img src='./images/fakenews.jpg' alt='colmar-project' />
        </div>
      </div>
    </section>
  );
};

export default Project;
