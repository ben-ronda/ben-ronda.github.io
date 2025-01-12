let projects = [
  {
    title:'Drupal Portfolio',
    description: `This is my Drupal 7 portfolio/sandbox. Here you can find a blog, projects, and code problems in the form of modules. I use this to try out new things I learn in Drupal.`,
    tags: ['Drupal', 'PHP'],
    link: 'http://live-ben-ronda.pantheonsite.io/',
    live: false
  },
  {
    title: 'Weird History Podcast',
    description: `I built the majority of the homepage of this site's custom WordPress theme during the last week of my internship at Upswept Creative. I used the underscores theme as a starting point for the theme development. Used ACFPro to create slides in the WordPress interface which were then generated in the theme via a PHP loop.`,
    tags: ['WordPress', 'HTML', 'CSS'],
    link: 'http://www.interestingtimespodcast.com/',
    live: true
  },
  {
    title: 'Dapper Stats',
    description:   `This is another Custom Wordpress theme that I built during my internship at Upswept Creative. I used the underscores as the base theme for the theme development.`,
    tags: ['WordPress', 'HTML', 'CSS'],
    link: 'http://dapperstats.com/',
    live: true
  },
  {
    title:'ZenAlert',
    description: `This is a python script I wrote that calls the Zendesk Support API and plays an alert sound whenever a new ticket is recieved. To find out more about this project, view the README on the github repository.`,
    tags: ['Python'],
    link: 'https://github.com/ben-ronda/Zendesk_New_Ticket_Alert',
    live: true
  }
];
let projectTiles = '';

const generateProjectTiles = projects => {
  let projectTile = '';
  for (let i = 0; i < projects.length; i += 1){
    if (projects[i].live === true){
      projectTile += `
      <div class="project">
      <h3>${projects[i].title}</h3>
      <p>${projects[i].description}</p>
      <div class="project-btn">
      <a href='${projects[i].link}' target="_blank" class="btn btn-default">View</a>
      </div>
      </div>
      `
    }
  }
  return projectTile;
}

projectTiles = generateProjectTiles(projects);
document.querySelector('#projects').innerHTML = projectTiles;
