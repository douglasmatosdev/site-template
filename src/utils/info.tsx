import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaLinkedin,
    FaYoutubeSquare
} from 'react-icons/fa'
import { IoLogoDiscord } from 'react-icons/io5'
import { BiLogoGmail } from 'react-icons/bi'

type FieldNameAndUrl = {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Info {
    description: string
    currentYear: number
    age: number
    experienceAge: number
    collegeSemesters: number
    inCollegeNow: boolean
    name: string
    fullName: string
    github: FieldNameAndUrl
    company: {
        acme: FieldNameAndUrl
    }
    college: FieldNameAndUrl
    socialMedias: {
        gmail: FieldNameAndUrl
        youtube: FieldNameAndUrl
        github: FieldNameAndUrl
        instagram: FieldNameAndUrl
        facebook: FieldNameAndUrl
        twitter: FieldNameAndUrl
        linkedin: FieldNameAndUrl
        discord: FieldNameAndUrl
    }
    mail: {
        main: string
        secundary: string
    }
}

export default function info(): Info {
    const description = 'Your description here'
    const name = 'John Doe'
    const fullName = name + ' no Body'
    const currentYear = +new Date().getFullYear()
    const age = currentYear - 1993
    const experienceAge = currentYear - 2019
    const collegeSemesters = (currentYear - 2020) * 2
    const inCollegeNow = currentYear <= 2025
    const mail = {
        main: 'johndoe@email.com',
        secundary: 'johndoe@email.com'
    }
    const github = {
        name: 'johndoe',
        url: 'https://github.com/johndoe'
    }
    const company = {
        acme: {
            name: 'Acme Inc.',
            url: 'https://www.acme.com/'
        }
    }

    const college = {
        name: 'Acme College',
        url: 'https://acme.college.com'
    }

    const socialMedias = {
        gmail: {
            name: fullName,
            url: `mailto:${mail.secundary}`,
            icon: <BiLogoGmail />
        },
        youtube: {
            name,
            url: 'https://www.youtube.com/@johndoe',
            icon: <FaYoutubeSquare />
        },
        github: {
            ...github,
            icon: <FaGithubSquare />
        },
        instagram: {
            name: 'johndoe',
            url: 'https://www.instagram.com/johndoe',
            icon: <FaInstagramSquare />
        },
        facebook: {
            name: 'johndoe',
            url: 'https://www.facebook.com/johndoe',
            icon: <FaFacebookSquare />
        },
        twitter: {
            name: 'johndoe',
            url: 'https://twitter.com/johndoe',
            icon: <FaTwitterSquare />
        },
        linkedin: {
            name: 'johndoe',
            url: 'www.linkedin.com/in/johndoe',
            icon: <FaLinkedin />
        },
        discord: {
            name: 'johndoe',
            url: 'https://discord.com/channels/johndoe',
            icon: <IoLogoDiscord />
        }
    }

    return {
        description,
        mail,
        currentYear,
        age,
        experienceAge,
        collegeSemesters,
        inCollegeNow,
        name,
        fullName,
        company,
        college,
        github,
        socialMedias
    }
}
