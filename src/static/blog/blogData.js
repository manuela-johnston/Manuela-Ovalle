import works from '../../../public/2dModels/worksSign.png'
import portfolio from '../../../public/portfolio-vid.mp4'
import aboutBuildings from '../../../public/2dModels/contactBuildings.png'
import bowie from '../../../public/img/bowie.png'

export const posts = [
  {
    id: 1,
    title: '3d Portfolio',
    description: '3D Space age theme marble game and portfolio',
    Status: 'Under development',
    github: 'https://github.com/Manuela-Ovalle/Manuela-Ovalle',
    site: '/3d',
    imgUrl: works,
    img1: `../../../blogImg/inspiration.png`,
    img2: `../../../blogImg/blender.png`,
    img3: `../../../blogImg/welcomeArch.png`,
    video: portfolio,
    preview: '../../../blogImg/screenshot.png',
    blogUrl: '/2d/blog/1',
    kaupapa: `To create a project that utilizes the skills I've acquired throughout my journey with Three.js, incorporating custom 3D models I've designed using Blender.`,
    design: `This project began on paper where I sketched ideas of what I would like to build in Blender. I was drawn to Mid Century modern and Space Age design. My main source of inspiration for the models was the 60s Cartoon The Jetsons that captivated me as a child. I’ve enjoyed watching clips of the show during my investigation and noticing parallel technologies on the show and in my own life. We really do live in the future. `,
    p2: `The 3D models were crafted using Blender. Throughout the development process, I refined and modified the models to align with the desired user interactivity and overall experience. In particular, I would like to highlight the design journey of the initial 3D model. After careful consideration, I ultimately chose to incorporate a jukebox-inspired archway for two significant reasons. Firstly, this design has more of visual impact as the user navigates through the experience. Secondly, it showcases a nostalgic Jetsons-like aesthetic, aligning perfectly with my vision for the project's retro theme.`,
    p3: `

    While I utilised Blender to create the buildings and arches, I relied on Three.js Geometries for the scene, path, and game obstacles. The project consists of two main areas: a portfolio section at the beginning of the path and a marble game later on.`,
  },
  {
    id: 2,
    title: 'Frankie Ruins',
    description: 'Handcrafted Bespoke Jewellery',
    Status: 'Under development',
    imgUrl: bowie,
    blogUrl: '/2d/blog/2',
  },
  {
    id: 3,
    title: 'Elf.co',
    description: 'development and design',
    imgUrl: bowie,
    blogUrl: '/2d/blog/3',
  },
]
