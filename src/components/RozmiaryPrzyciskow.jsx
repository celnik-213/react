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
                <button onClick={() => setSize('small')} className="btn btn-secondary">Small</button>
                <button onClick={() => setSize('medium')} className="btn btn-secondary">Medium</button>
                <button onClick={() => setSize('large')} className="btn btn-secondary">Large</button>
            </div>
        </div>
    );
};

export default Button;