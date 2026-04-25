export type Project = {
  id: string
  title: string
  impact: string
  shortDescription: string
  categories: Array<'AI/ML' | 'Computer Vision' | 'Web' | 'Systems'>
  problem: string
  systemOverview: string
  approachSteps: string[]
  keyFeatures: string[]
  stack: string[]
  outcomes: string[]
  tags: string[]
  githubUrl: string
  screenshots: Array<{
    src: string
    alt: string
    caption: string
  }>
  screenshotPlaceholders: string[]
}
