import TeamCard from './TeamCard';
import './About.css';
import sumit from "../assets/profile/sumit.jpg"
import zayed from "../assets/profile/zayed.jpg"

const credits = [
  {
    "name": "MD Zayed Ghanchi",
    "image": zayed,
    "socials": [
      "https://www.instagram.com/zayedmd_786",
      "https://github.com/Zayedmd12321",
      "mailto:mdzayedghanchi.24@kgpian.iitkgp.ac.in",
      "https://www.linkedin.com/in/md-zayed-ghanchi-bb999a325"
    ]
  },
  {
    "name": "Sumit Vijay Raut",
    "image": sumit,
    "socials": [
      "https://www.instagram.com/sumit_raut7422",
      "https://github.com/Sumit642-ai",
      "mailto:sumitraut.24@kgpian.iitkgp.ac.in",
      "https://www.linkedin.com/in/sumit74224"
    ]
  },
];

const About = ({ title, data }) => (
  <div className="teams-section">
    <h1>Credit</h1>
    <div className="team-row">
      {data.map((member, index) => (
        <TeamCard
          key={index}
          name={member.name}
          title={member.title}
          image={member.image}
          socials={member.socials}
        />
      ))}
    </div>
  </div>
);

const Teams = () => {
  return (
    <>
      <About title="Credit" data={credits} />
    </>
  );
};

export default Teams;
