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
        icon: '',
        premiere: '5 October 2018'
    },
    {
        name: 'Venom: Let There Be Carnage',
        date: {
            start: '2021',
            end: '2021'
        },
        category: 'MOVIE',
        icon: '',
        premiere: '1 October 2021'
    },
    {
        name: 'Morbius',
        date: {
            start: '???',
            end: '???'
        },
        category: 'MOVIE',
        icon: '',
        premiere: '28 January 2022'
    },
    {
        name: 'Kraven the Hunter',
        date: {
            start: '???',
            end: '???'
        },
        category: 'MOVIE',
        icon: '',
        premiere: '13 January 2023'
    },
    {
        name: 'Silk',
        date: {
            start: '???',
            end: '???'
        },
        category: 'SERIES',
        icon: '',
        premiere: '???'
    },
]

export default ssu