import * as React from 'react';
import { render } from 'react-dom';
import { Logger } from '@lucemans/logger';
import App from './components/App';
import chalk from 'chalk';
import { Safari } from './components/Safari';
import { exit } from 'process';

// Gather the root element
const root = document.getElementById('root');

// Initialize our logger
export const logger = new Logger(chalk.hex('51ccff')('REACT'));

const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;
if (isSafari) {
    render(<Safari></Safari>, root);
    exit;
}
if (!isSafari) {
    console.log('NOT SAFARI');
    // Render our App
    render(<App></App>, root);
}
