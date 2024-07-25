import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface SponsorCardProps {
    name: string;
    image: string;
    description: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, image, description, github, linkedin, twitter, instagram }) => {
    return (
        <div className="sponsor-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="social-links">
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="github"><FaGithub /></a>}
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedin /></a>}
                {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer" className="twitter"><FaTwitter /></a>}
                {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>}
            </div>
        </div>
    );
};

export default SponsorCard;