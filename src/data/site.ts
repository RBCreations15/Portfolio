export const siteData = {
  name: 'REESE AVERY',
  shortName: 'RA',
  title: 'Creative Direction · Brand Worlds · Visual Storytelling',
  description:
    'Editorial portfolio for Reese Avery, a multidisciplinary creative focused on creative direction, brand worlds, photography, content, and visual storytelling.',
  email: 'Email address pending approval',
  instagram: 'Instagram pending approval',
  location: 'Location pending approval',
  availability: 'Availability pending approval',
  socialImage: '[Social sharing image pending]',
} as const;

export const navigation = [
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Archive', href: '/archive/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const homeCopy = {
  descriptor: 'Creative Direction · Brand Worlds · Visual Storytelling',
  supporting: 'For thoughtful brands, beautiful spaces, and memorable experiences.',
  aboutPreview: [
    'I believe the strongest brands are not just seen — they are felt.',
    'Through creative direction, strategy, photography, and visual storytelling, I shape thoughtful identities and experiences with a strong sense of atmosphere.',
    'Inspired by hospitality, wellness, travel, and considered design, my work explores how imagery, space, language, and detail can create something people remember.',
  ],
  contactCta: 'Let’s build something people remember.',
} as const;

export const aboutCopy = {
  opening: 'I believe the strongest brands are not just seen — they are felt.',
  biography: [
    'I am a multidisciplinary creative focused on creative direction, brand worlds, and visual storytelling. My work brings together strategy, photography, styling, content, and digital design to shape experiences that feel cohesive, intentional, and human.',
    'I am especially drawn to wellness, hospitality, lifestyle, travel, and spaces that create a distinct sense of place. I approach each project by looking beyond individual visuals and considering the full experience: how a brand looks, sounds, feels, and is remembered.',
    'As my practice develops, I am building a body of work rooted in curiosity, atmosphere, and thoughtful collaboration.',
  ],
  disciplines: ['Creative Direction', 'Brand Strategy', 'Visual Identity', 'Photography', 'Content Creation', 'Websites', 'Social and Campaigns'],
  values: ['Atmosphere before decoration', 'Clarity with feeling', 'Details that carry memory', 'Collaboration with care'],
  tools: 'Tools pending approval — add confirmed platforms, cameras, editing software, and design tools.',
} as const;
