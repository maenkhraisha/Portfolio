const projects = [
        {
            title: 'Multi-Post Stories \n Gain+Glory',
            img: '',
            technologies: [
                'Ruby on rails',
                'css',
                'JavaScipt',
                'html'
            ],
            live_version: true,
            source: true,
        },
        {
            title: 'Multi-Post Stories \n Gain+Glory',
            img: '',
            technologies: [
                'Ruby on rails',
                'css',
                'JavaScipt',
                'html'
            ],
            live_version: true,
            source: true,
        },
        {
            title: 'Multi-Post Stories \n Gain+Glory',
            img: '',
            technologies: [
                'Ruby on rails',
                'css',
                'JavaScipt',
                'html'
            ],
            live_version: true,
            source: true,
        },
        {
            title: 'Multi-Post Stories \n Gain+Glory',
            img: '',
            technologies: [
                'Ruby on rails',
                'css',
                'JavaScipt',
                'html'
            ],
            live_version: true,
            source: true,
        },
        {
            title: 'Multi-Post Stories \n Gain+Glory',
            img: '',
            technologies: [
                'Ruby on rails',
                'css',
                'JavaScipt',
                'html'
            ],
            live_version: true,
            source: true,
        },
        {
            title: 'Multi-Post Stories \n Gain+Glory',
            img: '',
            technologies: [
                'Ruby on rails',
                'css',
                'JavaScipt',
                'html'
            ],
            live_version: true,
            source: true,
        }
    ];


let section = document.createElement('section')
section.id = 'portfolio';
section.className = 'work-section-container'

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

window.addEventListener('load', (event) => { 
    console.log('love')
    createDom()
})

function createDom(){

    let main = document.getElementById('main-section')

    let sectionTitle = document.createElement('h1')
    sectionTitle.className = 'work-section-title'

    let hrElmt = document.createElement('hr')
    hrElmt.className = 'hr-line'

    for(let project in projects){

        let sectionCard = document.createElement('div')
        sectionCard.className = 'work-section-card'

        let imgArea = document.createElement('div')
        imgArea.className = 'image-area'

        let descArea = document.createElement('div')
        descArea.className = 'desc-area'

        let cardTitle = document.createElement('div')
        cardTitle.className = 'card-title'

        let prjName = document.createElement('h4')
        prjName.textContent = projects[project].title
        
        let lableContainer = document.createElement('ul')
        lableContainer.className = 'card-lable-container'

        let technologies = projects[project].technologies

        for(let tech in technologies){
            let lable = document.createElement('li')
            lable.textContent = technologies[tech];
            lable.className = 'card-lable'
            lableContainer.appendChild(lable)
        }
        

        let button = document.createElement('button')
        button.innerHTML = 'See Project'
        button.className = 'btn-green'

        // Append elements to their parent

        section.appendChild(sectionTitle)
        section.appendChild(hrElmt)
        section.appendChild(sectionCard)
        sectionCard.appendChild(imgArea)
        sectionCard.appendChild(descArea)

        descArea.appendChild(cardTitle)

        cardTitle.appendChild(prjName)

        descArea.appendChild(lableContainer)
        descArea.appendChild(button)

    }

    insertAfter(main, section)

}
