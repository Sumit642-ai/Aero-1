import TeamCard from './TeamCard';
import './about.css';
import sumit from "../assets/profile/sumit.jpg"
import zayed from "../assets/profile/zayed.jpg"

const credits = [
  {
    "name": "Sumit Raut",
    "image": sumit,
    "socials": [
      "https://www.instagram.com/sumit_raut7422",
      "https://www.facebook.com/profile.php?id=100087397276828&mibextid=ZbWKwL",
      "mailto:abhinavgothwal100@gmail.com",
      "https://www.linkedin.com/in/abhinav-gothwal-97a37119b/"
    ]
  },
  {
    "name": "MD Zayed Ghanchi",
    "image": zayed,
    "socials": [
      "https://www.instagram.com/zayedmd_786",
      "https://www.facebook.com/share/1BQnQ41jR9/",
      "mailto:mdzayedghanchi.24@kgpian.iitkgp.ac.in",
      "https://www.linkedin.com/in/md-zayed-ghanchi-bb999a325"
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
