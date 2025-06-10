import React from 'react';
import './Card.scss';
import { LuInfo } from 'react-icons/lu';

function Card({ title, content, className }) {
    return (
        <div className={`custom-card ${className}`}>
            <span className="card-icon-top-right">
                <LuInfo />
            </span>
            <h3 className="card-title">{title}</h3>
            <p className="card-content">{content}</p>
        </div>
    );
}

export default Card;
