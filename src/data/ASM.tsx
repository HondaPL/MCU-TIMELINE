type movie = {
    name?: string,
    date?: {
        start?: string,
        end?: string
    },
    category?: string,
    note?: string,
    streaming?: {
        disney?: string,
        yt?: string,
        prime?: string,
        netflix?: string,
        tiktok?: string
    },
    icon?: string,
    premiere?: string
}

let asm: Array<movie> = [
    {
        name: 'Spider-Man: Into the Spider-Verse',
        date: {
            start: ' ',
            end: ' '
        },
        category: 'MOVIE',
        streaming: {
            netflix: 'https://www.netflix.com/title/81002747'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '14 December 2018'
    },
    {
        name: 'Spider-Ham: Caught in a Ham',
        date: {
            start: ' ',
            end: ' '
        },
        category: 'SHORT',
        streaming: {
            yt: 'https://www.youtube.com/watch?v=MY15_rcd-IQ'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '26 February 2019'
    },
    {
        name: 'Spider-Man: Across the Spider-Verse',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        streaming: {
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '2 June 2023'
    },
    {
        name: 'Spider-Man: Beyond the Spider-Verse',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        streaming: {
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '29 March 2024'
    },
]

export default asm