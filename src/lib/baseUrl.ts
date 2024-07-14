import { isDevMode } from './is-dev-mode'

export default function getBaseUrl(): string {
    const url = (isDevMode() ? 'http://localhost:3000' : process.env.NEXT_PULIC_BASE_URL) as string

    return url
}
