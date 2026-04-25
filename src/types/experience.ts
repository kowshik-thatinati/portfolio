export type Experience = {
  id: string
  phaseLabel: string
  title: string
  duration: string
  summary: string
  problem: string
  systemOverview: string
  approachSteps: string[]
  results: string[]
  stack: string[]
  proof: {
    githubUrl: string
    images: Array<{
      src: string
      alt: string
      caption: string
    }>
  }
}

