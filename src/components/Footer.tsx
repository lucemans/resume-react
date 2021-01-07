import * as React from 'react';

export default function Footer(): JSX.Element {
    
    return (
        <div className="footer">
            <div>Made by <a href="https://resume.lvk.sh">Luc van Kampen</a></div>
            <div className="version">Version { process.env.PROJECT_VERSION || 'Unknown' }</div>
        </div>
    );
}