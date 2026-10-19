import React from 'react'
import Projectcard from './Projectcard';

const works = [
  {
    imgSrc: '/images/p4.png',
    title: 'Formy-ai',
    tags: ['NextJS', 'TypeScript','PostgeSQL','Gemini API'],
    projectLink: 'https://formy-ai-xi.vercel.app/'
  },
  {
    imgSrc: '/images/token.png',
    title: 'Token Bucket Rate Limiter',
    tags: ['Redis', 'SQLite','JS','Lua'],
    projectLink: 'https://github.com/rkt-12/token-bucket-rate-limiter'
  },
  {
    imgSrc: '/images/dlq.png',
    title: 'Job Queue with DLQ',
    tags: ['GoLang', 'PostgreSQL','CLI'],
    projectLink: 'https://github.com/rkt-12/job-queue'
  },
  {
    imgSrc: '/images/p1.png',
    title: 'Pixscribe AI creation',
    tags: ['API', 'SaaS','MERN'],
    projectLink: 'https://pixscribe-f.onrender.com/'
  },
  {
    imgSrc: '/images/cal.png',
    title: 'Calendar App',
    tags: ['UI/UX','Framer','React'],
    projectLink: 'https://calendar-steel-chi.vercel.app/'
  },
  {
    imgSrc: '/images/p2.png',
    title: 'Brainwave - AI Chatting',
    tags: ['UI/UX','Tailwind','React'],
    projectLink: 'https://brainwave-rkt.netlify.app/'
  },
  {
    imgSrc: '/images/p3.png',
    title: 'Portfolio',
    tags: ['React', 'Tailwind'],
    projectLink: '#'
  },
  {
    imgSrc: '/images/p5.png',
    title: 'Memory Game',
    tags: ['Game', 'React'],
    projectLink: 'https://memory-game-rkt.netlify.app/'
  },
  {
    imgSrc: '/images/p6.png',
    title: 'Weather App',
    tags: ['React', 'API'],
    projectLink: 'https://weather-app-rkt.netlify.app/'
  },
];

const Work = () => {
  return (
    <section className="section" id='work'>
        <div className="container">
            <h2 className="headline-2 mb-8">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <Projectcard projectLink={projectLink} key={key} imgSrc={imgSrc} title={title} tags={tags}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work