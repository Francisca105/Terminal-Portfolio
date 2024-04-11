// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

let descriptions = {
  "help": "Display help information.",
  "repo": "Open the Github repository.",
  "about": "Get to know me and my portfolio.",
  "resume": "Open the latest resume.",
  "donate": "Display donation information.",
  "email": "Open the default mail client.",
  "github": "Open the Github profile.",
  "linkedin": "Open the LinkedIn profile.",
  "youtube": "Open the Youtube channel.",
  "echo": "Print arguments.",
  "whoami": "Print the username.",
  "ls": "List directories.",
  "cd": "Change directory.",
  "sudo": "Open a surprise.",
  "banner": "Display the banner.",
  "projects": "Explore my projects.",
  "skills": "Discover my skills.",
  "contact": "Connect with me.",
  "education": "See my education.",
  "readme": "Open my Github README.",
  "sumfetch": "Display summary."
}

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    let key = Object.keys(bin).sort()[i - 1];
    c += key;
    if(descriptions[key]){
      c += ` - ${descriptions[key]}`;
    }

    c += '\n';
  }
  return `HELP\nBelow are all available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const youtube = async (args: string[]): Promise<string> => {
  window.open(`${config.social.youtube}`);
  return 'Opening the Youtube channel...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const contact = async (args: string[]): Promise<string> => {
  return `Contact me:
- Email: ${config.email}
- LinkedIn: ${config.social.linkedin}`
}

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `If you find my work helpful or valuable, consider supporting me through a donation. 
Your contribution helps me continue creating useful content and providing assistance to others.
  - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
  - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.buymeacoffee}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  // Colors: #00ff00 (green), #0000ff (blue), #ffffff (white)
  let directories = [
    { name: 'Documents', color: '#00ff00', link: 'https://github.com/Francisca105/'},
    { name: 'Downloads', color: '#00ff00', link: config.resume_url},
    { name: 'Pictures', color: '#ffffff', link: 'https://www.instagram.com/francisca.105/'},
    { name: 'Music', color: '#ffffff', link: 'https://open.spotify.com/user/21owtmjpw6zx5jmywjikjkjji?si=f10695935a0f4425'},
    { name: 'Videos', color: '#00ff00', link: 'https://www.youtube.com/@Francisca.105'},
  ];

  let list = '';
  directories.forEach((dir) => {
    list += `<li><span style="color: ${dir.color};"><a href="${dir.link}" target="_blank">${dir.name}</a></span></li>\n`;
  });
  return `<ul>${list}</ul>
<style>
/* Styling for hover effect */
span:hover {
  background-color: #333; /* Dark background color on hover */
}
</style>`;

};

export const cd = async (args: string[]): Promise<string> => {
  return `Unfortunately, there isn't enough space for more directories.
  If you'd like to help, you can type 'donate'.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
${config.ascii}

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
