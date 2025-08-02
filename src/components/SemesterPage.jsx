import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import semesterSubjects from './semesterSubjects';
import './SemesterPage.css';
import Footer from './Footer';

function SemesterPage() {
    const { id } = useParams();
    const subjects = semesterSubjects[parseInt(id)] || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="subject-grid">
                {subjects.map((subject, index) => {
                    const isComingSoon = subject.link.includes('your-link');

                    const handleClick = (e) => {
                        if (isComingSoon) {
                            e.preventDefault();
                            alert("Coming Soon");
                        }
                    };

                    return (
                        <a
                            key={index}
                            href={isComingSoon ? '#' : subject.link}
                            onClick={handleClick}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="subject-card"
                        >
                            <img
                                src={`/assets/sem${id}/${subject.code.toLowerCase()}.png`}
                                alt={subject.name}
                                className="subject-image"
                            />
                            <div className="subject-name">
                                {subject.name}
                            </div>
                        </a>
                    );
                })}
            </div>
            <Footer />
        </>
    );
}

export default SemesterPage;
