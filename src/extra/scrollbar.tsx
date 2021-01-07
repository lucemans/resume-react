import * as React from 'react';
import { PageSettings } from '../components/App';

const scrollbar_dark = `
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #555;
}

::-webkit-scrollbar-thumb {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
    background: #888;
    cursor: pointer;
}`;
const scrollbar_light = `
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
    cursor: pointer;
}`;

export default function Scrollbar(): JSX.Element {

    const settings = React.useContext(PageSettings);

    return settings.dark ? (
        <style>
            {scrollbar_dark}
        </style>
    ) : (
        <style>
            {scrollbar_light}
        </style>
    );
}

/*
Created: 05:46 Tue 29 December 2020
Location: resume-react
*/