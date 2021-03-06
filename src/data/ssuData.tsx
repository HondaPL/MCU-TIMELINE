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

let ssu: Array<movie> = [
    {
        name: 'Venom',
        date: {
            start: '2022',
            end: '2022'
        },
        category: 'MOVIE',
        streaming: {
            netflix: 'https://www.netflix.com/title/80991034'
        },
        icon: 'https://i.pinimg.com/564x/9d/0a/6e/9d0a6e5acf0645a815291d6e7979eeb3.jpg',
        premiere: '5 October 2018'
    },
    {
        name: 'Venom: Let There Be Carnage',
        date: {
            start: '2024',
            end: '2024'
        },
        category: 'MOVIE',
        note: 'Crossover with Spider-Man: No Way Home',
        icon: 'https://i.pinimg.com/564x/9d/0a/6e/9d0a6e5acf0645a815291d6e7979eeb3.jpg',
        premiere: '1 October 2021'
    },
    {
        name: 'TheDailyBugle.net Season 3',
        date: {
            start: '2024',
            end: '2024',
        },
        category: 'INTERNET',
        streaming: {
            tiktok: 'https://www.tiktok.com/@thedailybugleofficial'
        },
        premiere: "18 March 2022",
        icon: 'https://yt3.ggpht.com/sNeS67InCYXdxYSr-qPnqTkw5FhNiwgimYIn4HSakIa8K5Q3bJ5xA6ITjZysQGVX8JPYQfWy=s88-c-k-c0x00ffffff-no-rj'
    },
    {
        name: 'Morbius',
        date: {
            start: '2024',
            end: '2024'
        },
        category: 'MOVIE',
        icon: 'https://thedirect.s3.amazonaws.com/media/tag_thumbnail/The_Direct_Tag_-_Morbius_Movie_uJ2OeOo_9gBwM8u_vxhsRgR.png',
        premiere: '1 April 2022'
    },
    {
        name: 'Kraven the Hunter',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        icon: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a2789100728999.5f0f21844f75b.jpg',
        premiere: '13 January 2023'
    },
    {
        name: '???',
        date: {
            start: '',
            end: ''
        },
        note: '',
        category: 'MOVIE',
        icon: '',
        premiere: '23 June 2023'
    },
    {
        name: '???',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        icon: '',
        premiere: '6 October 2023'
    },
    {
        name: 'Madame Web',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '7 July 2023'
    },
    {
        name: 'El Muerto',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        icon: '',
        premiere: '12 January 2024'
    },
    {
        name: 'Venom 3',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        icon: 'https://i.pinimg.com/564x/9d/0a/6e/9d0a6e5acf0645a815291d6e7979eeb3.jpg',
        premiere: '???'
    },
    {
        name: 'The Sinister Six',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        icon: '',
        premiere: '???'
    },
    {
        name: 'Silk',
        date: {
            start: '',
            end: ''
        },
        category: 'SERIES',
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '???',
    },
]

export default ssu