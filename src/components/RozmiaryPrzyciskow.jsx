import React, { useState } from 'react';

const Button = ({ text="Kliknij mnie!" }) => {
    const [size, setSize] = useState('small');
    
    const sizeClassMap = {
        small: 'btn-sm',
        medium: '',
        large: 'btn-lg',
    };

    const sizeClass = sizeClassMap[size] || '';

    return (
        <div>
            <p style={{ fontSize: size === 'small' ? '12px' : size === 'medium' ? '16px' : '20px' }}>{text}</p>
            <div style={{ marginTop: '16px' }}>
                <button style={{ backgroundColor: "red" }} onClick={() => setSize('small')} className="btn btn-secondary">Small</button>
                <button style={{ backgroundColor: "green" }} onClick={() => setSize('medium')} className="btn btn-secondary">Medium</button>
                <button style={{ backgroundColor: "blue" }} onClick={() => setSize('large')} className="btn btn-secondary">Large</button>
            </div>
        </div>
    );
};

export default Button;