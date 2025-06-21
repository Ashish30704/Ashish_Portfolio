import React from 'react'
import SkillCard from './SkillCard';


const skillItem = [
  {
    imgSrc: '/images/skills/android.png',
    label: 'Android Studio',
    desc: 'IDE'
  },
  {
      imgSrc: '/images/skills/reactnative.svg',
      label: 'React Native',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/skills/github.png',
      label: 'Git Hub',
      desc: 'Versio Control'
    },
    {
        imgSrc: '/images/skills/redux.png',
        label: 'Redux/Redux-toolkit',
        desc: 'State Management'
    },
    {
      imgSrc: '/images/skills/firebase.png',
      label: 'Firebase',
      desc: 'Backend'
    },
  {
    imgSrc: '/images/skills/typescript.png',
    label: 'TypeScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/skills/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/skills/react.svg',
    label: 'React',
    desc: 'Library'
  },
  {
    imgSrc: '/images/skills/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/skills/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/skills/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/skills/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/skills/sql.png',
    label: 'SQL',
    desc: 'Database'
  },
];

const Skills = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2">
                Essential Tools and Tech Stack
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover my Skill set and tools and technologies I use to build exceptional, high-performing mobile apps for both Android and I-phone.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => 
                    (
                        <SkillCard label={label} imgSrc={imgSrc} desc={desc} key={key} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills