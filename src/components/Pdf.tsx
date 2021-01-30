import * as React from 'react';

export const VERSION = process.env.PROJECT_VERSION;

export function Pdf(): JSX.Element {

    return (
        <a className="pdf" onClick={(e) => {
            e.preventDefault();
            window.print();
        }}>
            Also available as PDF
        </a>
    );
}

export function Web(): JSX.Element {

    return (
        <div className="web">
            View this document with more information for each item at
            <div className="link">https://resume.lvk.sh</div>
            And the source code at
            <div className="link2">https://github.com/lucemans/resume-react</div>
        </div>
    );
}