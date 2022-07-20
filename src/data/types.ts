export interface ICarreira {
    jobs: {
      company: string
      date: string
      description: string[]
      level: string
      role: string
      image: {
        path: string
        alt: string
      }
    }[]
    others: {
      company: string
      level: string
      role: string
      image: {
        path: string
        alt: string
      }
    }[]
}

export interface IHabilidades {
    stacks: {
      title: string
      subtitle: string
      image: {
        alt: string
        path: string
      }
      items: {
        level: number,
        title: string
      }[]
    }[]
    technologies: {
      paragraphs: string[],
      title: string
    }
}

export interface IEducacao {
    graduates: {
        date: string
        organization: string
        title: string
        image: {
            path: string
            alt: string
        }
        certificates: {
            title: string,
            description: string,
            link: string
        }[] | null
    }[]
    courses: {
        organization: string
        certificates: {
            description: string
            link: string
            title: string
        }[]
        image: {
            path: string
            alt: string
        }
    }[]
}

export interface IPerfil {
    brief: {
        title: string
        paragraphs: string[]
    }
    profile: {
        title: string
        text: string
        rate: number
        color: string
    }[]
    softSkills: {
        title: string
        paragraphs: {
            title: string
            text: string[]
        }[]
    }
}

export interface IProjetos {
    projects: {
        title: string
        description: string
        repository: string
        deploy: string
        image: {
            path: string
            alt: string
        }
        technologies: {
            title: string
            text: string
        }[]
        architecture: {
            title: string
            text: string
        }[]
    }[]
    minorProjects: {
        title: string
        description: string
        repository: string
        image: {
            path: string
            alt: string
        }
    }[]
}