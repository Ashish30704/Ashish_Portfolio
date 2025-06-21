import React from 'react'

const WorksList = [
    {
        type: 'On-Site',
        location: 'Hisar, Haryana',
        title: 'Mobile App Development Intern',
        company: 'Kodu: Powered by Dhurina',
        duration: 'Feb 2025 - May 2025',
        description: 'Developed different kind of mobile applications using React Native, Learned about mobile app development, and collaborated with professional developers',
        companyLogo: '',
        certification: 'https://example.com/certificate1.pdf',

    }
]

const Work = () => {
  return (
    <section id='work' className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
          My Work and Experience
        </h2>
      </div>
    </section>
  )
}

export default Work