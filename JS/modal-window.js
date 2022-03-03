const projects = [
  {
    title: 'Multi-Post Stories \n Gain+Glory',
    imgMobile: '/assets/images/modal-mobile-img.png',
    imgDesktop: '/assets/images/modal-desktop-img.png',
    technologies: [
      'Ruby on rails',
      'css',
      'JavaScipt',
      'html',
    ],
    live_version: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories \n Gain+Glory',
    imgMobile: '/assets/images/modal-mobile-img.png',
    imgDesktop: '/assets/images/modal-desktop-img.png',
    technologies: [
      'Ruby on rails',
      'css',
      'JavaScipt',
      'html',
    ],
    live_version: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories \n Gain+Glory',
    imgMobile: '/assets/images/modal-mobile-img.png',
    imgDesktop: '/assets/images/modal-desktop-img.png',
    technologies: [
      'Ruby on rails',
      'css',
      'JavaScipt',
      'html',
    ],
    live_version: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories \n Gain+Glory',
    imgMobile: '/assets/images/modal-mobile-img.png',
    imgDesktop: '/assets/images/modal-desktop-img.png',
    technologies: [
      'Ruby on rails',
      'css',
      'JavaScipt',
      'html',
    ],
    live_version: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories \n Gain+Glory',
    imgMobile: '/assets/images/modal-mobile-img.png',
    imgDesktop: '/assets/images/modal-desktop-img.png',
    technologies: [
      'Ruby on rails',
      'css',
      'JavaScipt',
      'html',
    ],
    live_version: '',
    source: '',
  },
  {
    title: 'Multi-Post Stories \n Gain+Glory',
    imgMobile: '/assets/images/modal-mobile-img.png',
    imgDesktop: '/assets/images/modal-desktop-img.png',
    technologies: [
      'Ruby on rails',
      'css',
      'JavaScipt',
      'html',
    ],
    live_version: '',
    source: '',
  },
];

/* create dynamic work section */
const section = document.createElement('section');
section.id = 'work-section';
section.className = 'work-section-container';

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const workSection = document.createElement('div');
const sectionTitle = document.createElement('h1');

function creatProject(projectNum) {
  const workSectionCard = document.createElement('div');
  workSectionCard.className = 'work-section-card';
  const imgArea = document.createElement('div');
  imgArea.className = 'image-area';
  const descArea = document.createElement('div');
  descArea.className = 'desc-area';
  const cardTitle = document.createElement('div');
  cardTitle.className = 'card-title';
  const prjName = document.createElement('h4');
  prjName.textContent = projectNum.title;
  const lableContainer = document.createElement('ul');
  lableContainer.className = 'card-lable-container';

  projectNum.technologies.forEach((tech) => {
    const lable = document.createElement('li');
    lable.textContent = tech;
    lable.className = 'card-lable';
    lableContainer.appendChild(lable);
  });

  const button = document.createElement('div');
  button.className = 'btn-green';
  const buttonLink = document.createElement('a');
  buttonLink.textContent = 'See Project';
  buttonLink.href = '#';

  // Append elements to their parent

  workSection.appendChild(workSectionCard);
  workSectionCard.appendChild(imgArea);
  workSectionCard.appendChild(descArea);

  descArea.appendChild(cardTitle);
  descArea.appendChild(lableContainer);
  cardTitle.appendChild(prjName);

  descArea.appendChild(button);
  button.appendChild(buttonLink);
}

function createDom() {
  const main = document.getElementById('main-section');

  sectionTitle.className = 'work-section-title';
  sectionTitle.textContent = 'My Recent Work';
  const hrElmt = document.createElement('hr');
  hrElmt.className = 'hr-line';

  workSection.appendChild(sectionTitle);
  workSection.appendChild(hrElmt);

  insertAfter(main, workSection);

  projects.forEach((project) => creatProject(project));
}

window.addEventListener('load', () => {
  createDom();
});
