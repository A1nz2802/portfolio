import project1 from '../public/static/background2-sm.jpg';
import project2 from '../public/static/background2-sm.jpg';
import project3 from '../public/static/background2-sm.jpg';

export interface ProjectInterface {
  id: number;
  img: StaticImageData;
  title: string;
  tagList: string[];
}

export const projectList: ProjectInterface[] = [
  {
    id: 1,
    img: project1,
    title: 'Amazon Clone with React!',
    tagList: ['Github', 'Discord']
  },{
    id: 2,
    img: project2,
    title: 'Batatabit a platzi project :)',
    tagList: ['Github', 'Instagram']
    
  },{
    id: 3,
    img: project3,
    title: 'Instagram Clone with NextJS!',
    tagList: ['Github', 'NextJs']
  }
]


