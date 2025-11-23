import React from 'react';

import IconButton from '@mui/material/IconButton';

function SocialIcon({ link, icon, label, disabled }) {
    return (
        <a
            target="_blank"
            aria-label={label}
            rel="noopener noreferrer"
            href={disabled ? undefined : link}
            style={{
                pointerEvents: disabled ? 'none' : 'auto',
                opacity: disabled ? 0.5 : 1,
            }}
        >
            {icon}
        </a>
    );
}

export default SocialIcon;