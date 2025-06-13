import React, { useEffect } from 'react';
import './Courses.css';
import { motion } from 'framer-motion';

const semesters = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const semesterPairs = [];
  for (let i = 0; i < semesters.length; i += 2) {
    semesterPairs.push(semesters.slice(i, i + 2));
  }

  return (
     <motion.section
      id="courses"
      className="courses-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <section className="courses scrollable-section" id="courses">
      <div className="semester-list">
        {semesterPairs.map((pair, idx) => (
          <div className="semester-row" key={idx}>
            {pair.map((sem, subIdx) => (
              <div className="semester-card animate-card glow robotic-font" key={subIdx}>
                <span>{sem}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ height: '100px' }}></div> {}
    </section>
    </motion.section>
  );
}

export default Courses;

