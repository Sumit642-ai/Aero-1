import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import semesterSubjects from './semesterSubjects';

function SemesterPage() {
    const { id } = useParams();
    const subjects = semesterSubjects[parseInt(id)] || [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="subject-grid" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            justifyContent: 'center',
            marginTop: '40px'
        }}>
            {subjects.map((subject, index) => (
                <a
                    key={index}
                    href={subject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="subject-card"
                    style={{
                        width: '220px',
                        border: '2px solid #00ffcc',
                        borderRadius: '16px',
                        textAlign: 'center',
                        background: 'rgba(0,255,204,0.05)',
                        color: '#00ffcc',
                        textDecoration: 'none',
                        overflow: 'hidden',
                        transition: '0.3s',
                        backdropFilter: 'blur(6px)'
                    }}
                >
                    <img
                        src={subject.image}
                        alt={subject.name}
                        style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '20px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                        {subject.name}
                    </div>
                </a>
            ))}
        </div>

    );
}

export default SemesterPage;
