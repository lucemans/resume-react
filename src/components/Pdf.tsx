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
            Interactive version: https://resume.lvk.sh
        </div>
    );
}