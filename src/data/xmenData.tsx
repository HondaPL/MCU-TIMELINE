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

let xmen: Array<movie> = [
    {
        name: 'X-Men',
        date: {
            start: '2005',
            end: '2005'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men/4QoNe0ea49nP'
        },
        category: 'MOVIE',
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        premiere: '14 July 2000',
        note: 'Timeline A'
    },
    {
        name: 'X2',
        date: {
            start: '2006',
            end: '2006'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x2/5VwEJ3Asxv5a'
        },
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        premiere: '2 May 2003',
        note: 'Timeline A'
    },
    {
        name: 'X-Men: The Last Stand',
        date: {
            start: '2007',
            end: '2007'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men-the-last-stand/5pKcSSNWwwgW'
        },
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        premiere: '26 May 2006',
        note: 'Timeline A'
    },
    {
        name: 'X-Men Origins: Wolverine',
        date: {
            start: '1980',
            end: '1980'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men-origins-wolverine/2jc0ZToOER1j'
        },
        icon: 'https://icons-for-free.com/download-icon-marvel+super+hero+wolverine+icon-1320166754256786631_512.png',
        premiere: '1 May 2009',
        note: 'Timeline A'
    },
    {
        name: 'The Wolverine',
        date: {
            start: '2013',
            end: '2013'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/movies/the-wolverine/3LERt74GSBkL'
        },
        category: 'MOVIE',
        icon: 'https://icons-for-free.com/download-icon-marvel+super+hero+wolverine+icon-1320166754256786631_512.png',
        premiere: '26 July 2013',
        note: 'Timeline A'
    },
    {
        name: 'Logan',
        date: {
            start: '2029',
            end: '2029'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/movies/logan/4BPdGjuoQAvT'
        },
        category: 'MOVIE',
        icon: 'https://icons-for-free.com/download-icon-marvel+super+hero+wolverine+icon-1320166754256786631_512.png',
        premiere: '3 March 2017',
        note: 'Timeline B'
    },
    {
        name: 'X-Men: First Class',
        date: {
            start: '1962',
            end: '1962'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men-first-class/15ELm1fiAfKq'
        },
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        premiere: '3 June 2011',
        note: 'Timeline A and B'
    },
    {
        name: 'X-Men: Days of Future Past',
        date: {
            start: '2023',
            end: '2023'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men-days-of-future-past/12X4W0gKaZr4'
        },
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        note: 'Timeline A - 2023, Timeline B - 1973',
        premiere: '23 May 2014'
    },
    {
        name: 'X-Men: Apocalypse',
        date: {
            start: '1983',
            end: '1983'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men-apocalypse/8ElyHmLZJyGQ'
        },
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        premiere: '27 May 2016',
        note: 'Timeline B'
    },
    {
        name: 'Dark Phoenix',
        date: {
            start: '1992',
            end: '1992'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/x-men-dark-phoenix/3bCZz3EzlG6r'
        },
        icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
        premiere: '7 June 2019',
        note: 'Timeline B'
    },
    {
        name: 'Deadpool',
        date: {
            start: '2016',
            end: '2016'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/movies/deadpool/3Kh13Lrb0Pnv'
        },
        category: 'MOVIE',
        icon: 'https://rlv.zcache.com/deadpool_logo_classic_round_sticker-re468ed02e8ae4429984047976f313e40_0ugmm_8byvr_704.webp',
        premiere: '12 February 2016',
        note: 'Timeline B'
    },
    {
        name: 'Deadpool 2',
        date: {
            start: '2018',
            end: '2018'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/movies/deadpool-2/LSuXSQ3S5mxU'
        },
        category: 'MOVIE',
        icon: 'https://rlv.zcache.com/deadpool_logo_classic_round_sticker-re468ed02e8ae4429984047976f313e40_0ugmm_8byvr_704.webp',
        premiere: '18 May 2018',
        note: 'Timeline B'
    },
    {
        name: 'The New Mutants',
        date: {
            start: '2025',
            end: '2025'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/movies/the-new-mutants/5aewWrD6YRoO'
        },
        category: 'MOVIE',
        icon: 'https://seeklogo.com/images/T/the-new-mutants-logo-869E610306-seeklogo.com.png',
        premiere: '28 August 2020',
        note: 'Timeline B'
    },
    {
        name: 'Legion',
        date: {
            start: '1970',
            end: '1970'
        },
        streaming: {
            disney: 'https://www.disneyplus.com/series/legion/hFEVt4yfPHZn'
        },
        category: 'SERIES',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Legion_TV_series_logo.jpg',
        premiere: '8 February 2017',
        note: 'Timeline C?'
    },
    {
        name: 'The Gifted',
        date: {
            start: '2017',
            end: '2017'
        },
        category: 'SERIES',
        streaming: {
            disney: 'https://www.disneyplus.com/series/the-gifted/1gy6Gkf3s1Gj'
        },
        icon: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022022/the_gifted.png?gUjHYJwTfz8fJgtSV98pDepI3wJm3aFk&itok=bc9TIriL',
        premiere: 'October 2, 2017',
        note: 'Timeline C?'
    },
    {
        name: 'Deadpool and Korg React',
        date: {
            start: '2021',
            end: '2021'
        },
        streaming: {
            yt: 'https://www.youtube.com/watch?v=g7q60i_Lh_E'
        },
        category: 'SHORT',
        icon: 'https://rlv.zcache.com/deadpool_logo_classic_round_sticker-re468ed02e8ae4429984047976f313e40_0ugmm_8byvr_704.webp',
        premiere: '13 July 2021',
        note: 'Timeline B'
    },
    {
        name: 'No Good Deed',
        date: {
            start: '2017',
            end: '2017'
        },
        streaming: {
            yt: 'https://www.youtube.com/watch?v=Z5ezsReZcxU'
        },
        category: 'SHORT',
        icon: 'https://rlv.zcache.com/deadpool_logo_classic_round_sticker-re468ed02e8ae4429984047976f313e40_0ugmm_8byvr_704.webp',
        premiere: '3 March 2017',
        note: 'Timeline B'
    },


]

export default xmen