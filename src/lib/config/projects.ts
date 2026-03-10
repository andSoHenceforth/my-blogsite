export type Project = {
    id: string
    name: string
    tags?: string[]
    feature?: string
    description?: string
    img: string
    link?: string
}

export const projects: Project[] = [
    {
        id: 'maze-solver',
        name: 'Advanced Maze Solver',
        tags: ['HTML','CSS','Javascript', 'Python', 'Flask'],
        feature: '',
        description:
            'A maze solver which can demonstrate several pathfinding algorithms. Built with HTML, CSS, and Javascript for the front-end, and Python with Flask for the back-end. Was inspired to apply these algorithms after having taken an Intro to AI unit.',
        img: '/assets/maze-solver.png',
        link: 'https://github.com/andSoHenceforth/maze-ai-solver'
    },
    {
        id: 'website',
        name: 'This portfolio website of mine',
        tags: ['HTML','CSS','Svelte', 'Typescript', 'Javascript'],
        feature: '',
        description:
            'My portfolio site was built off a SvelteKit blog site template; check it out here and make your own blogsite!',
        img: 'https://github.com/importantimport/urara/raw/main/urara/hello-world/urara.webp',
        link: 'https://github.com/importantimport/urara'
    },
    {
        id: 'tetrisimplified',
        name: 'Tetrisimplified-V2',
        tags: ['Java', ],
        feature: '',
        description:
            'A more complex OOP version of Tetrisimplified built in Java. I guess it\'s not so simplified anymore...',
        img: '/assets/tetris-v2.png',
        link: 'https://github.com/andSoHenceforth/Tetrisimplified-V2'
    },
    {
        id: 'tetrisimplified',
        name: 'Tetrisimplified',
        tags: ['Python, OOP'],
        feature: '',
        description:
            'Simplified OOP Python game built in Python.',
        img: '/assets/tetris-v1.png',
        link: 'https://github.com/andSoHenceforth/Tetrisimplified'
    }
]