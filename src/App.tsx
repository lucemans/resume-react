import * as React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { logger } from '.';
import profile from '../assets/profile.jpeg';
import { Profile } from './profile';
import { horisort } from './util/array.horisort';
import repo_icon from '../assets/repo.svg';
import PageSettingsInterface from './objects/PageSettings';
import Scrollbar from './scrollbar';

function setWindowSize(): number {
    return window.matchMedia('(max-width: 900px)').matches ? (window.matchMedia('(max-width: 700px)').matches ? (window.matchMedia('(max-width: 500px)').matches ? 0 : 1) : 2) : 3;
}

export const PageSettings = React.createContext<PageSettingsInterface>({
    dark: false
});

export default function App(): JSX.Element {

    const app = React.useRef<HTMLDivElement>();
    const [dark, setDark] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [language, setLanguage] = React.useState<'EN' | 'NL'>((window.navigator['userLanguage'] || window.navigator.language).toString().toUpperCase().includes('NL') ? 'NL' : 'EN');
    const [themeOverride, setThemeOverride] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(setWindowSize());

    // Load scroll from storage
    useEffect(() => {
        if (app.current) {
            app.current.scroll(0, +localStorage.getItem('scroll'));
        }
    }, [app]);

    // Language Update
    useEffect(() => {
        console.log(language);
    }, [language]);

    // On viewport size change
    useEffect(() => {
        console.log('isMobile: ' + isMobile);
    }, [isMobile]);

    // Initial page load
    useEffect(() => {
        logger.success('Successfully rendered App Component! Hooray 🎉');
        logger.success('Oh hey, welcome to the console person who is looking at my resume! 🎉');

        window.matchMedia('(prefers-color-scheme: dark)')
            .addListener((event: MediaQueryListEvent) => {
                setDark(!!event.matches);
            });
        window.matchMedia('(prefers-color-scheme: light)')
            .addListener((event: MediaQueryListEvent) => {
                setDark(!event.matches);
            });
        window.matchMedia('(max-width: 900px)')
            .addListener(() => {
                setIsMobile(setWindowSize());
            });
        window.matchMedia('(max-width: 600px)')
            .addListener(() => {
                setIsMobile(setWindowSize());
            });
        window.matchMedia('(max-width: 500px)')
            .addListener(() => {
                setIsMobile(setWindowSize());
            });
    }, [0]);

    if (isMobile == 0)
        return (
            <div className="app flex center">
                <div className="unsupported flex column center">
                    <span>Sorry</span>
                    <span>This page was not optimized for this resolution...</span>
                    <span>Please try it on a different device</span>
                </div>
            </div>
        );

    return (
        <PageSettings.Provider value={{ dark, language }}>
            <div className={'app' + (dark ? '' : ' light')} onScroll={(e) => {
                localStorage.setItem('scroll', e.currentTarget.scrollTop + '');
            }} ref={app}>
                <div className="theme">
                    <div className="switch"></div>
                </div>
                <div className="inner flex column stretch">
                    <div className="header">
                        <img className="profile" src={profile} alt="" />
                        <div className="right flex column">
                            <div className="name">Luc van Kampen</div>
                            <div className="sub">Software Engineer</div>
                        </div>
                    </div>

                    <div className="bio">
                        {Profile.bio[language]}
                    </div>

                    <Card label="Experience" colorClass={['c3']}>
                        <ul>
                            {
                                horisort(Profile.experience, 3).map(company => (
                                    <li key={company.label} className="company">
                                        <a href={company.url} className="flex between norotate" target="_blank" rel="noreferrer">
                                            <div className="left flex">
                                                <img src={company.image} alt="" />
                                                <div className="info flex column">
                                                    <span>{company.label}</span>
                                                    <span>{company.position}</span>
                                                </div>
                                            </div>
                                            <span className="right">{company.time}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>

                    <Card label="Skills" colorClass={['c1']}>
                        <ul>
                            {
                                horisort(Profile.skills, isMobile).map(skill => (
                                    <li key={skill.label} className="">
                                        <a href={skill.url} className="flex" target="_blank" rel="noreferrer">
                                            <img src={skill.image} alt="" />
                                            <span>{skill.label}</span>
                                        </a>
                                    </li>
                                ))
                            }
                            {/* <li key={'more'} className="more">
                            <a href={'#'} className="flex" target="_blank" rel="noreferrer">
                                <img src={'https://cdn0.iconfinder.com/data/icons/user-interface-255/100/more-512.png'} alt="" />
                                <span>{'and more'}</span>
                            </a>
                        </li> */}
                        </ul>
                    </Card>
                    <Card label="Repositories" colorClass={['c2']}>
                        <ul className="repos">
                            {
                                horisort(Profile.repositories, isMobile == 1 ? 1 : 2).map(repo => (
                                    <li key={repo.label} className="">
                                        <a href={repo.url} className="flex" target="_blank" rel="noreferrer">
                                            <div className="left">
                                                <span>
                                                    <img src={repo_icon} alt="" />
                                                    {repo.label}
                                                </span>
                                                <span>{repo.description}</span>
                                            </div>
                                            <div className="right">
                                                ➜
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>
                    <div className="theme flex column center">
                        {
                            themeOverride ?
                                (<span>You manually set this page to <span style={{ fontWeight: 'bolder' }}>{dark ? 'Dark' : 'Light'}</span> theme. <span className="toggle" onClick={() => { setDark(!dark); }}>Switch</span></span>)
                                :
                                (
                                    <Fragment>
                                        <span>Oh hey it appears you are using <span style={{ fontWeight: 'bolder' }}>{dark ? 'Dark' : 'Light'}</span> theme. <span className="toggle" onClick={() => { setDark(!dark); setThemeOverride(true); }}>Switch</span></span>
                                        <span>This page auto-updates depending on your browser preferences.</span>
                                    </Fragment>
                                )
                        }
                    </div>
                </div>
                <Scrollbar />
            </div >
        </PageSettings.Provider>
    );
}

function Card(args: { label: string, colorClass: string[], children: JSX.Element }) {

    return (
        <div className="card">
            <div className={'top ' + args.colorClass.join(' ')}>
                {args.label}
            </div>
            <div className="inside">
                {
                    args.children
                }
            </div>
        </div>
    );
}