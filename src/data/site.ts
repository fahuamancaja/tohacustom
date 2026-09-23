export const site = {
  name: 'Fernando Huamancaja',
  nickname: 'Nando',
  role: 'Manager, System Integrations',
  company: { name: 'CapTech', url: 'https://www.captechconsulting.com/' },
  location: 'Charlotte, NC · Remote',
  url: 'https://fernandohuamancaja.com',
  email: 'fahuamancaja@gmail.com',
  headline: 'I build cloud platforms and AI agents on Azure.',
  description:
    'Fernando Huamancaja is a cloud and AI integration engineer at CapTech. He builds Azure infrastructure with Terraform, orchestrates AI agents in Python with Semantic Kernel on Azure AI Foundry, and ships the APIs and event-driven integrations around them.',
  tagline: 'Azure · Terraform · Python · Semantic Kernel · AI Foundry · .NET',
  links: {
    linkedin: 'https://www.linkedin.com/in/fernando-huamancaja/',
    github: 'https://github.com/fahuamancaja',
    source: 'https://github.com/fahuamancaja/tohacustom',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  about: [
    'I am a software engineer turned cloud and AI integration lead. At CapTech I design and ship solutions on Microsoft Azure: infrastructure defined in Terraform and delivered through Azure Pipelines, event-driven integrations built on Service Bus and Azure Storage, and AI workloads running on Azure AI Foundry.',
    'My current focus is agentic AI in Python. I orchestrate multi-agent workflows with Semantic Kernel, expose them as API endpoints, and build scoring and evaluation agents so quality is measured, not assumed.',
    'Before consulting I spent several years in financial services at LPL Financial and Inspira Financial building .NET and Angular platforms, and I started my career in networking and IT support at Lowe\'s.',
  ],
  heroChips: ['Azure', 'Terraform', 'Python', 'Semantic Kernel', 'AI Foundry', '.NET'],
} as const;
