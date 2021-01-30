import * as React from 'react';

export const VERSION = process.env.PROJECT_VERSION;

export default function Footer(): JSX.Element {
    
    return (
        <div className="footer">
            <div>Made by <a href="https://resume.lvk.sh">Luc van Kampen</a></div>
            <div className="web2">Interactive version available at https://resume.lvk.sh</div>
            <a className="version" href={"https://github.com/lucemans/resume-react/commit/" + VERSION}>Version { VERSION ? VERSION.substr(0, 7) : 'Unknown' }</a>
        </div>
    );
}