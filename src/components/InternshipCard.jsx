import React from 'react'
import PropTypes from 'prop-types'

const InternshipCard = ({ type, title, duration, location, company, description, logo, certification }) => {
  return (
    <div className="relative flex flex-col gap-4 p-6 rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-900 shadow-xl ring-1 ring-inset ring-zinc-50/10 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="shrink-0 w-14 sm:w-20 h-16 flex items-center justify-center overflow-hidden shadow-md">
          <img src={logo} alt={company} className=" w-12 sm:w-16 h-14 object-contain" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0 items-center">
          <h3 className="title-1 text-sm mb-1" title={title}>{title}</h3>
          <p className="text-zinc-400 text-sm font-medium truncate" title={company}>{company}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
        <span className="px-2 py-1 rounded-lg bg-zinc-700/60 font-semibold text-sky-400">{type}</span>
        <span className="px-2 py-1 rounded-lg bg-zinc-700/60">{location}</span>
        <span className="px-2 py-1 rounded-lg bg-zinc-700/60">{duration}</span>
      </div>
      <p className="text-zinc-300 text-sm leading-relaxed mt-1">{description}</p>
      {certification && (
        <a href={certification} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-end mt-2 px-4 py-2 rounded-xl bg-sky-400 text-zinc-950 font-semibold shadow hover:bg-sky-300 active:bg-sky-400 transition-colors text-sm">
          View Certification
        </a>
      )}
    </div>
  )
}


InternshipCard.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    certification: PropTypes.string
}

export default InternshipCard