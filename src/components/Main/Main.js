import './Main.css';
import Typewriter from 'typewriter-effect';

const Main = () => {
  return (
    <main id='main-section' className='main-section'>
      <div className='profile-picture' data-aos='fade-down'>
        <img src='./images/profile-picture.png' alt='profile' />
      </div>
      <div className='statement' data-aos='fade-left'>
        <h1>
          <Typewriter
            options={{
              strings: ['Wittawas Kaewnisai', 'Full Stack Developer.'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p>
          I am a hardworking and highly motivated self-learning. Currently, I am
          also interested not only in software technology such as web technology
          but also in blockchain technology, especially smart contracts,
          decentralized finance. I believe strongly that blockchain technologies
          will become infrastructure in other platforms in the future.
          Therefore, my goal is a part of people who use those tools to enhance
          our world.
        </p>
        <a
          href='https://drive.google.com/file/d/1O70TOxmpITXeRmRK3lKQSqFG-MXyE2TD/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
          className='download-cv'
        >
          Checkout my resume!
        </a>
      </div>
    </main>
  );
};

export default Main;
