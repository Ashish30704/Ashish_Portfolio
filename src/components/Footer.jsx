import React from 'react'
import { ButtonPrimary } from './Button';


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Projects',
    href: '#projects'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ashish30704/'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashish-jangra-7a4059254'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/Ashish_bluebird'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ashish.otaku/'
  },
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary label={'Start Project'} href='mailto:ashish30704@gmail.com' icon={'chevron_right'} classes='reveal-up' />

                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2 reveal-up">Sitemap</p>
                        <ul>
                            {sitemap.map(({ label, href }, key) => 
                            (
                                <li key={key}>
                                    <a 
                                        href={href} 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Socials</p>
                        <ul>
                            {socials.map(({ label, href }, key) => 
                            (
                                <li key={key}>
                                    <a 
                                        href={href} 
                                        target='_blank'
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                    href=""   
                    className="reveal-up"
                >
                    <img src="/images/A.png" height={27} width={27} alt="Logo" />
                </a>
                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span className="text-zinc-200">Ashish Jangra</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer