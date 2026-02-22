export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const skills = {
  languages: [
    { name: 'C', level: 88 },
    { name: 'C++', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Python', level: 92 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Linux', level: 86 },
    { name: 'VS Code', level: 94 },
  ],
  aiStack: [
    { name: 'NumPy', level: 84 },
    { name: 'Pandas', level: 82 },
    { name: 'ML Basics', level: 88 },
  ],
};

export const projects = [
  {
    title: 'AI Budget App',
    description: 'An intelligent budgeting dashboard with predictive spend insights and monthly optimization nudges.',
    tags: ['React', 'Python', 'FastAPI', 'ML'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'Home Automation System',
    description: 'A smart control center to automate lighting, climate, and security workflows using edge intelligence.',
    tags: ['IoT', 'Node.js', 'MQTT', 'Automation'],
    github: '#',
    liveDemo: '#',
  },
  {
    title: 'AI Chatbot using Ollama',
    description: 'A locally hosted, privacy-first chatbot with contextual memory and task automation capabilities.',
    tags: ['Ollama', 'LangChain', 'React', 'LLM'],
    github: '#',
    liveDemo: '#',
  },
];
