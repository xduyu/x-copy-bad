export const PAGES = {
    HOME: '/',
    EXPLORER: '/explore',
    PROFILE_FAKE: '/profile_fake',
    PROFILE: (username: string) => `/u/${username}`
}