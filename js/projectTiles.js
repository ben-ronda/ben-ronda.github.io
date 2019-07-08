let projects = [
  {
    title: 'Weird History Podcast',
    description: `I built the majority of the homepage of this site's custom WordPress theme during the last week of my internship at Upswept Creative. I used the underscores theme as a starting point for the theme development. Used ACFPro to create slides in the WordPress interface which were then generated in the theme via a PHP loop.`,
    tags: ['WordPress', 'HTML', 'CSS'],
    link: 'http://www.interestingtimespodcast.com/'
  },
  {
    title: 'Dapper Stats',
    description:   `This is another Custom Wordpress theme that I built during my internship at Upswept Creative. I used the underscores as the base theme for the theme development.`,
    tags: ['WordPress', 'HTML', 'CSS'],
    link: 'http://dapperstats.com/'
  },
  {
    name:'ZenAlert',
    description: `This is a python script I wrote that calls the Zendesk Support API and plays an alert sound whenever a new ticket is recieved. To find out more about this project, view the README on the github repository.`,
    tags: ['Python'],
    link: 'https://github.com/ben-ronda/Zendesk_New_Ticket_Alert'
  }
];
let projectTiles = '';

const generateProjectTiles = projects => {
  let projectTile = '';
  console.log("before");
  for (let i = 0; i < projects.length; i += 1){
    projectTile += `
    <div class='project'>
      <h3>${projects[i].name}</h3>
      <p>${projects[i].description}</p>
      <div class='project-button'>
        <a href='${projects[i].link}' target="_blank" class="btn btn-default">View</a>
      </div>
    </div>`
    console.log('during');
  }
  console.log('after');
  return projectTile;
}

projectTiles = generateProjectTiles(projects);
document.querySelector('#projects').innerHTML = projectTiles;
