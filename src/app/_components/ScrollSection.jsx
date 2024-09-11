import React from 'react'

const logos = [
  { src: '/mirage-logo-indigo-300.svg', alt: 'Logo 1' },
  { src: '/statickit-logo-indigo-300.svg', alt: 'Logo 2' },
  { src: '/transistor-logo-indigo-300.svg', alt: 'Logo 3' },
  { src: '/tuple-logo-indigo-300.svg', alt: 'Logo 4' },
  { src: '/workcation-logo-indigo-300.svg', alt: 'Logo 5' },
]

const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="marquee flex items-center md:space-x-32 space-x-8 py-8 hover:pause">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="h-16 w-auto"/>
        ))}
      </div>
    </div>
  )
}

export default LogoMarquee
