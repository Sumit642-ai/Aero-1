import React, { useEffect } from 'react';
import './Courses.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const semesters = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

function Courses() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const semesterPairs = [];
  for (let i = 0; i < semesters.length; i += 2) {
    semesterPairs.push(semesters.slice(i, i + 2));
  }

  const handleSemesterClick = (semIndex) => (e) => {
    if (semIndex === 0) {
      navigate(`/semester/${semIndex + 1}`);
    } else {
      e.preventDefault();
      alert('Coming Soon');
    }
  };

  return (
    <>
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
                {pair.map((sem, subIdx) => {
                  const semIndex = idx * 2 + subIdx;
                  return (
                    <div
                      key={subIdx}
                      className="semester-card animate-card glow robotic-font"
                      onClick={handleSemesterClick(semIndex)}
                      style={{ cursor: 'pointer' }}
                    >
                      <span>{sem}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div style={{ height: '100px' }}></div>
        </section>
      </motion.section>
      <Footer />
    </>
  );
}

export default Courses;
