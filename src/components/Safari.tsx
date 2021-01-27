import * as React from 'react';

export function Safari(): JSX.Element {

    return (
        <div className="safari">
            It appears you are using an outdated version of <span>Safari</span><br></br>
            Please install something like <a href="https://brave.com/">Brave Browser</a> or <a href="https://www.google.com/chrome/">Google Chrome</a>
        </div>
    );
}