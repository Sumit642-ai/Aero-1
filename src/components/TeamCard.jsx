import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import './TeamCard.css';

const TeamCard = ({ name, title, image, socials }) => {
  const getIconClass = (url) => {
    if (url.includes('github')) return 'fa-brands fa-github';
    if (url.includes('mailto')) return 'fas fa-envelope';
    if (url.includes('linkedin')) return 'fab fa-linkedin';
    if(url.includes('instagram')) return 'fa-brands fa-instagram'
    return 'fas fa-user';
  };

  return (
    <div className="hologram-card-box">
      <div className="hologram-card">

        <div className="card-content">
          <img
            src={`${image}`}
            alt={name}
            className="profile-img"
          />
          <h3 className="name">{name}</h3>
          <p className="title">{title}</p>
          <div className="social-icons">
            {socials.map((url, index) => (
              <a href={url} target="_blank" rel="noopener noreferrer" key={index}>
                <FontAwesomeIcon icon = {getIconClass(url)} className='social'/>
              </a>
            ))}
          </div>
          <div className="holo-beam"></div>
          <div className="particles"></div>
        </div>
      </div>

      <div className="projector-stack">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
      </div>
    </div>
  );
};

export default TeamCard;
