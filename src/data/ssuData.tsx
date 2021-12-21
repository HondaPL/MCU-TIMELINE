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
            start: '2018',
            end: '2018'
        },
        category: 'MOVIE',
        icon: 'https://i.pinimg.com/564x/9d/0a/6e/9d0a6e5acf0645a815291d6e7979eeb3.jpg',
        premiere: '5 October 2018'
    },
    {
        name: 'Venom: Let There Be Carnage',
        date: {
            start: '2021',
            end: '2021'
        },
        category: 'MOVIE',
        icon: 'https://i.pinimg.com/564x/9d/0a/6e/9d0a6e5acf0645a815291d6e7979eeb3.jpg',
        premiere: '1 October 2021'
    },
    {
        name: 'Morbius',
        date: {
            start: '???',
            end: '???'
        },
        category: 'MOVIE',
        icon: 'https://thedirect.s3.amazonaws.com/media/tag_thumbnail/The_Direct_Tag_-_Morbius_Movie_uJ2OeOo_9gBwM8u_vxhsRgR.png',
        premiere: '28 January 2022'
    },
    {
        name: 'Kraven the Hunter',
        date: {
            start: '???',
            end: '???'
        },
        category: 'MOVIE',
        icon: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9a2789100728999.5f0f21844f75b.jpg',
        premiere: '13 January 2023'
    },
    {
        name: 'Silk',
        date: {
            start: '???',
            end: '???'
        },
        category: 'SERIES',
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '???'
    },
]

export default ssu