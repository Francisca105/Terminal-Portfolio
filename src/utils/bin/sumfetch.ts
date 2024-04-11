import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
    return `<div>
  <img src="https://avatars.githubusercontent.com/u/65908870?v=4" alt="Me" style="float: left; margin-right: 10px; border-radius: 50%; width: 100%; max-width: 350px; height: auto; margin-top: 20px;">
  <span>
     sumfetch: summary display
    -----------
     ABOUT
     ${config.name}
    ﰩ ${config.ps1_hostname}
     <u><a href="${config.resume_url}" target="_blank">resume</a></u>
    爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
    -----------
     CONTACT 
     <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
     <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
     <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    -----------
     DONATE 
     <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
     <u><a href="${config.donate_urls.buymeacoffee}" target="_blank">${config.donate_urls.buymeacoffee}</a></u>
  </span>
</div>

`;
};

export default sumfetch;
