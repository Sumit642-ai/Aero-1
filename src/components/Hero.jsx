import { Link } from 'react-router-dom';
import './Hero.css';
import shuttleImg from '../assets/shuttle.png';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero" id="hero" data-aos="fade-up" data-aos-duration="1500">
        <div className="hero-text">
          <h1>Study Material Platform</h1>
          <p>
              <Typewriter
                words={[
                  'For Aerospace Engineering Students',
                  'Built by Students, For Students',
                  'Learn. Build. Fly.'
                ]}

                loop={Infinity}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </p>
          <Link to="/materials" className="get-started-btn">Get Started</Link>

        </div>
        <img
          src={shuttleImg}
          alt="shuttle"
          className="shuttle"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        />

      </div>
    </motion.section>
  );
}

export default Hero;
