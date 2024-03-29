import * as React from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { logger } from '..';
import profile from '../../assets/profile.jpeg';
import { Profile } from '../profile';
import { horisort, horisort2 } from '../util/array.horisort';
import repo_icon from '../../assets/repo.svg';
import repo_light_icon from '../../assets/repo_white.svg';
import PageSettingsInterface from '../objects/PageSettings';
import Scrollbar from '../extra/scrollbar';
import Footer from './Footer';
import contact from '../../assets/profile.jpeg';
import whatsapp from '../../assets/contact/whatsapp.svg';
import outlook from '../../assets/contact/outlook.svg';
import linkedin from '../../assets/contact/linkedin.svg';
import Banner from './Banner';
import { Pdf, Web } from './Pdf';

function setWindowSize(): number {
    return window.matchMedia('(max-width: 900px)').matches ? (window.matchMedia('(max-width: 700px)').matches ? (window.matchMedia('(max-width: 500px)').matches ? 0 : 1) : 2) : 3;
}

export const PageSettings = React.createContext<PageSettingsInterface>({
    dark: false,
    language: 'NL'
});

export default function App(): JSX.Element {

    const app = React.useRef<HTMLDivElement>();
    const [dark, setDark] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [language, setLanguage] = React.useState<'EN' | 'NL'>((window.navigator['userLanguage'] || window.navigator.language).toString().toUpperCase().includes('NL') ? 'NL' : 'EN');
    const [themeOverride, setThemeOverride] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(setWindowSize());

    const [activeHover, setActiveHover] = React.useState<null | { label: string, image: string, desc: string, id: string }>(null);
    const [activeClick, setActiveClick] = React.useState<null | { label: string, image: string, desc: string, id: string }>(null);

    const [settingsOpen, setSettingsOpen] = React.useState(false);

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

    // On color scheme change
    useEffect(() => {
        console.log('isDark: ' + dark);
        if (window['plausible']) {
            console.log('Logging Theme v1');
            window['plausible'](dark ? 'Dark Theme' : 'Light Theme');
        } else {
            console.log('Plausible not loaded yet');
            document.getElementById('plausiblescript').addEventListener('load', () => {
                console.log('Logging Theme v2');
                window['plausible'](dark ? 'Dark Theme' : 'Light Theme');
            });
        }
    }, [dark]);

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

        if (location.search.includes('pdf=yes')) {
            setTimeout(() => {
                console.log('downloading pdf straight away');
                window.print();
            }, 1000);
        }
    }, [0]);

    return (
        <PageSettings.Provider value={{ dark, language }}>
            <div className={'app' + (dark ? '' : ' light')} onScroll={(e) => {
                localStorage.setItem('scroll', e.currentTarget.scrollTop + '');
            }} ref={app}>
                <Banner />
                <div className="settings">
                    <div className="button" onClick={() => { setSettingsOpen(!settingsOpen); }}>
                        <div className="icon">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="caption">{language == 'EN' ? 'Preferences' : 'Voorkeuren'}</div>
                    </div>
                    <div className={'normal' + (settingsOpen ? ' visible' : '')}>
                        <div className="head">{language == 'EN' ? 'Preferences' : 'Voorkeuren'}</div>
                        <div className="option">
                            <span>Language</span>
                            <select name="" id="" value={language} onChange={(e) => {
                                setLanguage(e.currentTarget.value as 'EN' | 'NL' || 'EN');
                            }}>
                                <option value="NL">{language == 'EN' ? 'Dutch' : 'Nederlands'}</option>
                                <option value="EN">{language == 'EN' ? 'English' : 'Engels'}</option>
                            </select>
                        </div>
                        <div className="option">
                            <span>Dark Mode</span>
                            <div className={'switch' + (dark ? ' active' : '')} onClick={() => { setDark(!dark); }}><div className="inside"></div></div>
                        </div>
                    </div>
                </div>
                <Pdf />
                {
                    activeHover ? (
                        <div className="sidebar">
                            <div className="top">
                                <img src={activeHover.image} alt="" />
                                <div className="label">{activeHover.label}</div>
                            </div>
                            <div className="txt">
                                {activeHover.desc}
                            </div>
                        </div>
                    ) : activeClick && (
                        <div className="sidebar">
                            <div className="top">
                                <img src={activeClick.image} alt="" />
                                <div className="label">{activeClick.label}</div>
                            </div>
                            <div className="txt">
                                {activeClick.desc}
                            </div>
                        </div>
                    )
                }
                <div className="inner flex column stretch">
                    <div className="deprecated">
                        <div className="warning">Deprecation warning</div>
                        <div className="message">
                            This page is no longer in use nor is/will be receiving updates.<br />Please visit <a href="https://luc.contact">https://luc.contact</a> for a more up-to-date version.
                        </div>
                        <div className="signature">
                            ~ Luc
                        </div>
                    </div>
                    <div className="header">
                        <img className="profile" src={profile} alt="" />
                        <div className="right flex column">
                            <div className="name">Luc van Kampen</div>
                            <div className="sub">Fullstack Software Engineer</div>
                        </div>
                    </div>

                    <div className="bio">
                        {Profile.bio[language]}
                    </div>

                    <Card label="Experience" colorClass={['c3']}>
                        <ul>
                            {
                                Profile.experience.map(company => (
                                    <li key={company.label} className="company">
                                        <a href={company.url} className="flex between norotate" target="_blank" rel="noreferrer" onMouseEnter={() => {
                                            setActiveHover({
                                                id: 'experience_' + company.label,
                                                label: company.label,
                                                desc: company.description,
                                                image: company.image
                                            });
                                        }} onMouseLeave={() => {
                                            if (activeHover && activeHover.id == 'experience_' + company.label) {
                                                setActiveHover(null);
                                            }
                                        }}>
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

                    <Card label="Skills I have" colorClass={['c1']}>
                        <ul>
                            {
                                horisort2(Profile.skills, isMobile == 0 ? 2 : isMobile).map(skill => (
                                    <li key={skill.label} className={activeClick && activeClick.id == 'skill_' + skill.label ? 'active' : ''}>
                                        <a href={skill.url} className="flex" target="_blank" rel="noreferrer" onMouseEnter={() => {
                                            setActiveHover({
                                                id: 'skill_' + skill.label,
                                                label: skill.label,
                                                desc: skill.description,
                                                image: skill.image
                                            });
                                        }} onMouseLeave={() => {
                                            if (activeHover && activeHover.id == 'skill_' + skill.label) {
                                                setActiveHover(null);
                                            }
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (activeClick && activeClick.id == 'skill_' + skill.label) {
                                                setActiveClick(null);
                                            } else {
                                                setActiveClick({
                                                    id: 'skill_' + skill.label,
                                                    label: skill.label,
                                                    desc: skill.description,
                                                    image: skill.image
                                                });
                                            }
                                        }}>
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

                    <Card label="What I'm Learning Now" colorClass={['c1']}>
                        <ul>
                            {
                                horisort2(Profile.learning, isMobile == 0 ? 2 : isMobile).map(skill => (
                                    <li key={skill.label} className={activeClick && activeClick.id == 'skill_' + skill.label ? 'active' : ''}>
                                        <a href={skill.url} className="flex" target="_blank" rel="noreferrer" onMouseEnter={() => {
                                            setActiveHover({
                                                id: 'skill_' + skill.label,
                                                label: skill.label,
                                                desc: skill.description,
                                                image: skill.image
                                            });
                                        }} onMouseLeave={() => {
                                            if (activeHover && activeHover.id == 'skill_' + skill.label) {
                                                setActiveHover(null);
                                            }
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (activeClick && activeClick.id == 'skill_' + skill.label) {
                                                setActiveClick(null);
                                            } else {
                                                setActiveClick({
                                                    id: 'skill_' + skill.label,
                                                    label: skill.label,
                                                    desc: skill.description,
                                                    image: skill.image
                                                });
                                            }
                                        }}>
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
                    <Card label="Methodologies" colorClass={['c4']}>
                        <ul className="methods">
                            {
                                horisort(Profile.methods, isMobile == 1 ? 1 : 2).map(method => (
                                    <li key={method.label} className={activeClick && activeClick.id == 'method_' + method.label ? 'active' : ''}>
                                        <a href={method.label} className="flex" target="_blank" rel="noreferrer" onMouseEnter={() => {
                                            setActiveHover({
                                                id: 'method_' + method.label,
                                                label: method.label,
                                                desc: method.desc,
                                                image: method.image
                                            });
                                        }} onMouseLeave={() => {
                                            if (activeHover && activeHover.id == 'method_' + method.label) {
                                                setActiveHover(null);
                                            }
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (activeClick && activeClick.id == 'method_' + method.label) {
                                                setActiveClick(null);
                                            } else {
                                                setActiveClick({
                                                    id: 'method_' + method.label,
                                                    label: method.label,
                                                    desc: method.desc,
                                                    image: method.image
                                                });
                                            }
                                        }}>
                                            <img src={method.image} alt="" />
                                            <span>{method.label}</span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>
                    <Card label="My Repositories" colorClass={['c2']}>
                        <ul className="repos">
                            {
                                horisort(Profile.repositories, isMobile == 1 ? 1 : 2).map(repo => (
                                    <li key={repo.label} className="">
                                        <a href={repo.url} className="flex" target="_blank" rel="noreferrer">
                                            <div className="left">
                                                <span>
                                                    <img src={dark ? repo_light_icon : repo_icon} alt="" />
                                                    {repo.label}
                                                </span>
                                                <span>{repo.description}</span>
                                            </div>
                                            <div className="right" dangerouslySetInnerHTML={{ __html: '&#x279C;' }}>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </Card>
                    <div className="contact">

                        <img src={contact} alt="" className="icon" />
                        <div className="line">Want to contact me? Try these</div>
                        <div className="opts">
                            <a href="mail:luc@lucemans.nl" className="opt">
                                <img src={outlook} alt="" />
                                luc@lucemans.nl
                            </a>
                            <a href="tel:+3218925911" className="opt">
                                <img src={whatsapp} alt="" />
                                +31 618 925 911
                            </a>
                            <a href="https://www.linkedin.com/in/luc-van-kampen-303038186/" className="opt">
                                <img src={linkedin} alt="" />
                                Luc van Kampen
                            </a>
                        </div>

                    </div>
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

                    <Footer />

                    <Web />
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
