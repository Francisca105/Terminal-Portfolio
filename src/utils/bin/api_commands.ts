// // List of commands that require API calls

import { getJsonMe, getProjects, getReadme } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const skills = async (args: string[]): Promise<string> => {
  function mapping(skills, spaces = 0) {
    return skills.map((skill) => {return `${" ".repeat(spaces)}<span style="color: #fe6256;">-</span> ${skill.name} (${skill.level})`}).join('<br>');
  }

  function programmingMap(skill) {
    return skill.map((lang) => {
      let base = `<span style="color: #fe6256;">-</span> ${lang.name} (${lang.level})`;
      let related = lang.related
      if(related) {
        if(related.environments) {
          base += `<br>` + mapping(related.environments,1)
        }
        if(related.libraries) {
          base += `<br> Libraries:<br>` + mapping(related.libraries, 1)
        }
        if(related.frameworks) {
          base += `<br> Frameworks:<br>` + mapping(related.frameworks, 1)
        }
        base += `<br>`
      }
      return base
    }).join('<br>');
  }
  let me = await getJsonMe();
  let skills = me.skills;

  let hard_skills = skills.hard;
  let languages = mapping(hard_skills.languages)
  let programming = hard_skills.programming;

  let programming_languages = programmingMap(programming.languages)
  let markup = mapping(programming.markup_languages)
  let templating = mapping(programming.template_engines)
  let version_control = mapping(programming.version_control)
  let databases = programming.databases;
  let code_editors = mapping(programming.code_editors)
  let package_managers = mapping(programming.package_managers)
  let design_tools = mapping(programming.design_tools)
  let development_methodologies = mapping(programming.development_methodologies)
  let operating_systems = mapping(hard_skills.operating_systems)
  let data_serialization = mapping(programming.data_serialization)
  let soft_skills = skills.soft;

  return `<b>HARD SKILLS</b>
-----------
<b>Languages:</b><br>
${languages}<br><br>
<b>Programming:</b><br>
${programming_languages}<br>
${data_serialization}<br><br>
<b>Markup Languages & Templating:</b><br>
${markup}<br>
${templating}<br><br>
<b>Version Control & Package Managers:</b><br>
${version_control}<br>
${package_managers}<br><br>
<b>Databases:</b><br>
<u>SQL</u><br>
${mapping(databases.sql)}<br>
<u>NoSQL</u><br>
${mapping(databases.nosql)}<br>
<u>Tools</u><br>
${mapping(databases.tools)}<br><br>
<b>Code Editors & Design Tools:</b><br>
${code_editors}<br>
${design_tools}<br><br>
<b>Development Methodologies:</b><br>
${development_methodologies}<br><br>
<b>Operating Systems:</b><br>
${operating_systems}<br><br>

<b>SOFT SKILLS</b>
-----------<br>
<span style="color: #fe6256;">-</span> ${soft_skills.join('<br><span style="color: #fe6256;">-</span> ')}</span>
`
}