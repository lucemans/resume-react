import Skill from './objects/Skill';
import Repository from './objects/Repository';
import Company from './objects/Company';

export const Profile = {
    bio: {
        'NL': 'Mijn naam is Luc, op het moment dat ik dit schrijf (29 December 2020), ben ik al 18 jaar op deze aardbodem, waarvan ik de laatste 9 jaar fanatiek aan het programmeren ben geweest. Ik ben een nieuwsgierig individueel, die gek is op het maken en creeeren. In combinatie met een ontzettend doorzettingsvermogen ben ik tot elke taak in staat. Ik woon in Antwerpen, Belgie, en ben informatica student aan de Universiteit Antwerpen.',
        'EN': 'My name is Luc, at the time of writing this (December 29th 2020), I have been on this planet for 18 years, ofwhich I have spent the last 9 programming like a mad man. I am a curious individual, who loves to create epic stuff. Paired with a crazy level of determination I\'m the man for every job. I live in Antwerp, Belgium, and am a Computer Science student at the University of Antwerp.',
    },
    skills: [
        new Skill('react', 'http://reactjs.org/', require('../assets/skills/react.png'), /*'#61dafb'*/),
        new Skill('kubernetes', 'https://kubernetes.io', require('../assets/skills/kubernetes.svg')),
        new Skill('docker', 'https://docker.com', require('../assets/skills/docker.png')),
        new Skill('ubuntu', 'https://ubuntu.com', require('../assets/skills/ubuntu.png')),
        new Skill('javascript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', require('../assets/skills/javascript.svg')),
        new Skill('typescript', 'https://www.typescriptlang.org/', require('../assets/skills/typescript.svg')),
        new Skill('npm', 'https://www.npmjs.com/', require('../assets/skills/npm.svg')),
        new Skill('nodejs', 'https://nodejs.org/', require('../assets/skills/nodejs.png')),
        new Skill('deno', 'https://deno.land/', require('../assets/skills/deno.svg')),
        new Skill('sass/scss', 'https://sass-lang.com/', require('../assets/skills/sass.svg')),
        new Skill('bash', 'https://www.gnu.org/software/bash/', require('../assets/skills/bash.svg')),
        new Skill('git', 'https://git-scm.com/', require('../assets/skills/git.svg')),
        new Skill('angular', 'https://angular.io/', require('../assets/skills/angular.png')),
        new Skill('ansible', 'https://ansible.com/', require('../assets/skills/ansible.png')),
        new Skill('terraform', 'https://www.terraform.io/', require('../assets/skills/terraform.svg')),
        new Skill('java', 'https://www.java.com/', require('../assets/skills/java.svg')),
        new Skill('python', 'https://www.python.org/', require('../assets/skills/python.svg')),
        new Skill('parcel', 'https://parceljs.org/', require('../assets/skills/parcel.ico')),
    ],
    repositories: [
        new Repository('resume', 'This exact page you are looking at', 'https://github.com/lucemans/resume-react'),
        new Repository('dotansible', 'Machine Configuration with Ansible', 'https://github.com/lucemans/dotansible'),
        new Repository('dotserver', 'Server Configuration with Ansible', 'https://github.com/lucemans/dotserver'),
        new Repository('lcreate', 'Project Creation Tool', 'https://github.com/lucemans/generator-lcreate'),
    ],
    experience: [
        new Company('EForumFactory', 'Software Engineer', '2018 - Now', 'https://eforumfactory.be', require('../assets/experience/eff.png')),
        new Company('SHAPE American High School', 'Student', '2016 tot juni 2020', 'https://eforumfactory.be', require('../assets/experience/sahs.png')),
    ]
};

/**
 * react
 * kuberents
 * docker
 * angular
 * npm
 * nodejs
 * deno
 * pythong
 * javascript
 * typescript
 * sass/scss
 * git
 */