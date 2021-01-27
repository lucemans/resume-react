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

const ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') <= -1) {
        render(<Safari></Safari>, root);
        exit;
    }
}

// Render our App
render(<App></App>, root);