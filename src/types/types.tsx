export type Movie = {
    name: string,
    imax: boolean,
    date: {
        start: string,
        end: string
    },
    category: string,
    note?: string,
    streaming?: {
        disney?: string,
        yt?: string,
        prime?: string,
        netflix?: string,
        tiktok?: string
    },
    icon: string,
    premiere: string,
    phase?: string
}

export type ItemProps = {
    upcoming: string,
    data: Movie
}

export type TimeLineProps = {
    filter: [string],
    upcoming: string,
    sortByPremiere : boolean,
    data: any
}