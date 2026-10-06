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
        id: 'aats',
        name: 'All about the Sky',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'Open-Meteo API'],
        feature: '',
        description:
            'Built a weather-driven animated sky with React, TypeScript, and the Canvas 2D API, mapping live Open-Meteo data to procedural clouds, rain, and day/night cycles, with mouse and touch interaction via Pointer Events',
        img: '/assets/aats.png',
        link: 'https://github.com/andSoHenceforth/all-about-the-sky'
    },
    {
        id: 'tension_resonance',
        name: 'Tension Resonance',
        tags: ['TouchDesigner','Python','C++', 'Arduino'],
        feature: '',
        description:
            'Integrated TouchDesigner modules, an Arduino microcontroller, and scripts in Python and C++ to develop a Spatial Augmented Reality (SAR) environment for people suffering from chronic pain',
        img: '/assets/eugloh_tr.png',
        link: 'https://github.com/andSoHenceforth/Tension-Resonance'
    },
    {
        id: 'aa',
        name: 'Avian Annotator',
        tags: ['SpringBoot','React','Node.js', 'AWS S3', 'Docker'],
        feature: '',
        description:
            'Oversaw the backend development of an accessible web-based bird image annotation platform allowing ornithology researchers and citizen scientists to collaboratively create high-quality training datasets for AI models',
        img: '/assets/avianannotator.png',
        link: 'https://github.com/avian-annotator/FYP'
    },
    {
        id: 'maze-solver',
        name: 'Advanced Maze Solver',
        tags: ['HTML','CSS','Javascript', 'Python', 'Flask'],
        feature: '',
        description:
            'A maze solver which can demonstrate several pathfinding algorithms. Built with HTML, CSS, and Javascript for the front-end, and Python with Flask for the back-end. Was inspired to apply these algorithms after having taken an Intro to AI unit.',
        img: '/assets/maze-solver.png',
        link: 'https://github.com/andSoHenceforth/Advanced-Maze-Solver'
    },
    {
        id: 'website',
        name: 'This portfolio website of mine',
        tags: ['HTML','CSS','Svelte', 'Typescript', 'Javascript'],
        feature: '',
        description:
            'My portfolio site was built off a SvelteKit blog site template called Urara!',
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