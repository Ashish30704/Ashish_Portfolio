import React from 'react'
import InternshipCard from './InternshipCard'

const WorksList = [
    {
        type: 'On-Site',
        location: 'Hisar, Haryana',
        title: 'Mobile App Development Intern',
        company: 'Kodu: Powered by Dhurina',
        duration: 'Feb 2025 - May 2025',
        description: 'Developed different kind of mobile applications using React Native, Learned about mobile app development, and collaborated with professional developers',
        logo: '/images/Work/internship1/koduLogo.svg',
        certification: 'https://drive.google.com/file/d/1bZpZFgHG7eS_XFpj4CCGCotmblpTV2Hn/view?usp=sharing',
    },
]

const Work = () => {
  return (
    <section id='work' className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
          My Work and Experience
        </h2>
        <div className="grid gap-x-4 gap-y-5 sm:grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))]">
          {
            WorksList.map(({title, type, location, company, duration, description, logo, certification}, key) => (
              <InternshipCard
                title={title}
                type={type}
                location={location}
                company={company}
                duration={duration}
                description={description}
                logo={logo}
                certification={certification}
                key={key}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Work