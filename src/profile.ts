import Skill from './objects/Skill';
import Repository from './objects/Repository';
import Company from './objects/Company';
import Method from './objects/Method';

export const Profile = {
    bio: {
        'NL': 'Mijn naam is Luc, op het moment dat ik dit schrijf (29 December 2020), ben ik al 18 jaar op deze aardbodem, waarvan ik de laatste 9 jaar fanatiek aan het programmeren ben geweest. Ik ben een nieuwsgierig individueel, die gek is op het maken en creeeren. In combinatie met een ontzettend doorzettingsvermogen ben ik tot elke taak in staat. Ik woon in Antwerpen, Belgie, en ben informatica student aan de Universiteit Antwerpen.',
        'EN': 'My name is Luc, at the time of writing this (December 29th 2020), I have been on this planet for 18 years, ofwhich I have spent the last 9 programming like a mad man. I am a curious individual, who loves to create epic stuff. Paired with a crazy level of determination I\'m the man for every job. I live in Antwerp, Belgium, and am a Computer Science student at the University of Antwerp.',
    },
    skills: [
        new Skill('react', 'http://reactjs.org/', require('../assets/skills/react.png'), 'I use react for most of my websites, I have my own project-setup that I prefer and ive writen a yeoman generator to create my perfect starter project allowing me to bootstrap within a matter of seconds.'),
        new Skill('kubernetes', 'https://kubernetes.io', require('../assets/skills/kubernetes.svg'), 'I use kubernetes on my server computers and a few raspberry pi\'s at home, Aside from hosting my smart home system kubernetes runs all of my websites (including this one) plays a crucial role in my deployment process and allows for seamless update rollouts with healthchecks and other kinds of monitoring in addition to on-demand auto-scaling.'),
        new Skill('docker', 'https://docker.com', require('../assets/skills/docker.png'), 'Docker is an awesome tool to make `container` spec complaint containers that I can then deploy in any environment and perfectly isolated.'),
        new Skill('ubuntu', 'https://ubuntu.com', require('../assets/skills/ubuntu.png'), 'Ubuntu is my daily driver, I run the simple gnome desktop (as opposed to a tiling window manager) due to ease-of-use with web-development. My configuration for my ubuntu machines can be found in my `dotansible` repository. My computers have a cron job setup to automatically keep up to date with this repository (ansible-pull) so any new changes I would like to make I do there.'),
        new Skill('javascript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', require('../assets/skills/javascript.svg'), 'Javascript is my go-to language when it comes to quickly doing some task that needs to be done, be it sorting my emails, or mass renaming files. When it comes to professional projects that are supposed to be used in development I prefer to use typescript.'),
        new Skill('typescript', 'https://www.typescriptlang.org/', require('../assets/skills/typescript.svg'), 'Typescript is my go-to programming language for most of the projects I work on as it provides the crazy ability of javascript in combination with a type-safe coding style.'),
        new Skill('npm', 'https://www.npmjs.com/', require('../assets/skills/npm.svg'), ''),
        new Skill('yarn', 'https://www.yarnpkg.com/', require('../assets/skills/yarn.svg'), 'Yarn is my choice of package manager as its fast and I have gotten used to the CLI syntax.'),
        new Skill('nodejs', 'https://nodejs.org/', require('../assets/skills/nodejs.png'), 'NodeJS is the environment for running server-side javascript code. It tightly integrates with NPM to allow for javascript applications to run. NodeJS is behind the backend of most of my projects as it allows for javascript/typescript code execution, runs at an acceptable speed, and can access all of my databases and communication ports'),
        new Skill('deno', 'https://deno.land/', require('../assets/skills/deno.svg'), 'Deno is a secure runtime for javascript and typescript that built by Ryan Dahl that allows for javascript code to be run on the go, personally I use deno for quick tools and tasks where other developers would normaly turn to a language like python. Deno allows for small file sizes, no node_modules folder junk and faster execution through caching.'),
        new Skill('sass/scss', 'https://sass-lang.com/', require('../assets/skills/sass.svg'), 'SCSS and Sass are two CSS-Supersets that allow for nicer and more human-readable css code to be written. Personally and depending on the project I use one or the other (or sometimes both).'),
        new Skill('bash', 'https://www.gnu.org/software/bash/', require('../assets/skills/bash.svg'), 'Bash is the language behind most of my primitive automations or renaming tasks, I use it on a day to day basis not only for scripting but also simply for executing commands and pipe-ing around their output in the terminal.'),
        new Skill('git', 'https://git-scm.com/', require('../assets/skills/git.svg'), 'Git is a versioning tool that allows you to keep track of all the changes that you make to your project. Personally I use it to keep track of what changes have been made, collaborate with other developers, contribute to opensource projects where I can, and kickstart my CI/CD DevOps pipeline automations.'),
        new Skill('angular', 'https://angular.io/', require('../assets/skills/angular.png'), 'Angular is a framework for Single Page Applications that I have used for many of our in-house projects. Angular is a lot more opinionated that react although it is useful if you dont want to establish how a project\;s structure should be beforehand.'),
        new Skill('ansible', 'https://ansible.com/', require('../assets/skills/ansible.png'), 'Ansible is a tool for automating tasks on a multitude of machines. Personally I use ansible to keep my servers streamlined and to be able to keep them running regardless of the hardware. I also use ansible-pull to keep my development machines up-to-date by having them pull the latest changes every 10 minutes. All my customizations and the software I install on my development machines is automatically installed through ansible on all machines and this allows me to near-seamlesly switch between computers and have the same customizations etc.'),
        new Skill('terraform', 'https://www.terraform.io/', require('../assets/skills/terraform.svg'), 'Terraform is an awesome tool to spin up machines, I use it not only for the creation of virtual machines on Azure and other clouds but also to deploy to my kubernetes instances. If you are looking for anything `infrastructure-as-code` terraform is the man for the job.'),
        new Skill('java', 'https://www.java.com/', require('../assets/skills/java.svg'), 'Java is a fun language that was one of the first two languages I learnt, I used Java passionately to build minecraft mods, plugins, and modify the original minecraft client. For the first few years of my development life I built numerous minigames and gamemodes on minecraft servers within the dutch and international community.'),
        new Skill('python', 'https://www.python.org/', require('../assets/skills/python.svg'), 'Python is a great language for quickly writing some scripts to do tasks, although personally I use it more for machine learning and text-to-speach purposes. My personal home-assistant kevin actually uses a python script to express himself and communicate back to me. It does this through a task-queue system on a redis instance. This allows my other processes to stay nicely containerized and just post what they want the kevin-voice-daemon to say to the redis database.'),
        new Skill('parcel', 'https://parceljs.org/', require('../assets/skills/parcel.ico'), 'Parcel is a fantastic bundling tool that I use in 99% of my projects as it is fast, supports hot reloading, and simply works.'),
        new Skill('redis', 'https://redislabs.com/', require('../assets/skills/redis.svg'), 'Redis is a key-value datastore that can be used for caching, job-processing, and much much more. Personally I use redis for communication between microprocesses to allow for job-processing, queues, caching, and smart-home metrics.'),
        new Skill('mongodb', 'https://mongodb.org/', require('../assets/skills/mongo.svg'), 'MongoDB is an object database that allows you to store javascript objects in a collection. Its super handy for storing data that might change in form, or just for being a lazy programmer.')
    ],
    methods: [
        new Method('Containerization',
            `
            
            Yes I do realize that this is the LXC icon.
            `, require('../assets/methods/lxc.png')),
        new Method('DevOps', `
            Most of my projects (including my resume) are fully built and deployed through DevOps. Depending on the job I use varying systems: Github Actions, Azure, Gitlab, Jenkins, Circle CI, Travis, etc.
            For this project I chose to use Github actions to automatically build on every commit.
            The entire application gets built and packaged into a docker container, and is pushed to my private repository.
            Once its there the pipeline triggers a set of Terraform commands that in turn automatically perform a rolling update on my kubernetes cluster.
            This means that the application has an absolute zero seconds of downtime, and the update will happen as smooth as possible.
            In the even that the just built version doesnt pass the healthchecks the end user will never see it fail, and I will be alerted.
            This provides for a resielient way with zero-downtime and aside from the initial setup there is no further maintenance from my side.
            DevOps allow me to focus on the development of my code instead of spending (wasting) my time manually having to deploy and monitor the applications.
        `, require('../assets/methods/devops.png')),
        new Method('Agile Development', `
        
        `, require('../assets/methods/agile.png')),
        new Method('Mobile First', `
        
        `, require('../assets/methods/mobile.png')),
    ],
    repositories: [
        new Repository('resume', 'This exact page you are looking at', 'https://github.com/lucemans/resume-react'),
        new Repository('dotansible', 'Machine Configuration with Ansible', 'https://github.com/lucemans/dotansible'),
        new Repository('dotserver', 'Server Configuration with Ansible', 'https://github.com/lucemans/dotserver'),
        new Repository('generator-lcreate', 'Project Creation Tool', 'https://github.com/lucemans/generator-lcreate'),
    ],
    experience: [
        new Company('EForumFactory', 'Software Engineer', '2018 - Now', 'https://eforumfactory.be', require('../assets/experience/eff.png'), `
        
        `),
        new Company('SHAPE American High School', 'Student', '2016 tot juni 2020', 'https://www.dodea.edu/SHAPEHS/index.cfm', require('../assets/experience/sahs.png'), `
        
        `),
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