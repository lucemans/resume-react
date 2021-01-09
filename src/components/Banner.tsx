import * as React from 'react';

export default function Banner(): JSX.Element {

    const [clicked, setClicked] = React.useState(!!localStorage.getItem('resume_banner') || true);
    
    return (
        <div className={clicked ? 'banner hide' : 'banner'}>

            <div className="inside">
                

                <div className="button">Understood</div>
            </div>
            {/* <div>Made by <a href="https://resume.lvk.sh">Luc van Kampen</a></div> */}
        </div>
    );
}