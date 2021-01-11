import * as React from 'react';
import { Web } from './Pdf';

export const VERSION = process.env.PROJECT_VERSION;

export default function Footer(): JSX.Element {
    
    return (
        <div className="footer">
            <div>Made by <a href="https://resume.lvk.sh">Luc van Kampen</a></div>
            <Web />
            <a className="version" href={"https://github.com/lucemans/resume-react/commit/" + VERSION}>Version { VERSION ? VERSION.substr(0, 7) : 'Unknown' }</a>
        </div>
    );
}