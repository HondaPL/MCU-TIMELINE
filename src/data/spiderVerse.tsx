type movie = {
    name?: string,
    date?: {
        start?: string,
        end?: string
    },
    category?: string,
    imax?: boolean,
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
        name: 'Spider-Man',
        date: {
            start: 'April 2002',
            end: 'November 2002'
        },
        category: 'MOVIE',
        note: 'Earth-96203',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/spider-man/4q3uPuyBeCkw'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '3 May 2002'
    },
    {
        name: 'Spider-Man 2',
        date: {
            start: 'April 2004',
            end: 'July 2004'
        },
        category: 'MOVIE',
        note: 'Earth-96203',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/spider-man-2/1CNlLz5NUKU6'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '30 June 2004'
    },
    {
        name: 'Spider-Man 3',
        date: {
            start: 'April 2005',
            end: 'October 2005'
        },
        category: 'MOVIE',
        note: 'Earth-96203',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/spider-man-3/4GJkhwLlLW4D'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '4 May 2007'
    },
    {
        name: 'The Amazing Spider-Man',
        date: {
            start: 'Septebmer 2012',
            end: 'October 2012'
        },
        category: 'MOVIE',
        note: 'Earth-120703',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/the-amazing-spider-man/1XUNbIGBs7TO'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '3 July 2012'
    },
    {
        name: 'The Amazing Spider-Man 2',
        date: {
            start: 'July 2013',
            end: 'May 2014'
        },
        category: 'MOVIE',
        note: 'Earth-120703',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/the-amazing-spider-man-2/4h3EaB5DYH6g'
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png',
        premiere: '2 May 2014'
    },
    {
        name: 'Captain America: Civil War',
        imax: true,
        date: {
            start: 'April 2016',
            end: 'August 2016'
            // start: '3 May 2016',
            // end: '28 August 2016'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/-/4ovfyKnnIBCg',
        },
        premiere: '6 May 2016',
        icon: 'https://rlv.zcache.com/avengers_classics_captain_america_brushed_shield_classic_round_sticker-rfbbec34bc82a4c119c929bdc5b54ffc0_0ugmm_8byvr_704.webp'
    },
    {
        name: 'Spider-Man: Homecoming',
        date: {
            start: 'Septebmer 2016',
            end: 'October 2016'
        },
        category: 'MOVIE',
        streaming: {
            netflix: 'https://www.netflix.com/title/80166369?s=i&trkid=13747225',
            disney: 'https://www.disneyplus.com/movies/-/4cLMEzWGqQaG'
        },
        premiere: "7 July 2017",
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
    },
    {
        name: 'Avengers: Infinity War',
        imax: true,
        date: {
            start: 'April 2018',
            end: 'April 2018'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/-/1WEuZ7H6y39v',
        },
        premiere: "27 April 2018",
        icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
    },
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
        name: 'Avengers: Endgame',
        imax: true,
        date: {
            start: 'May 2018',
            end: 'October 2023'
        },
        category: 'MOVIE',
        streaming: {
            disney: 'https://www.disneyplus.com/movies/-/aRbVJUb2h2Rf',
        },
        premiere: "26 April 2019",
        icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
    },
    {
        name: 'Spider-Man: Far from Home',
        date: {
            start: 'June 2024',
            end: 'July 2024'
        },
        category: 'MOVIE',
        note: 'Coming to Disney+ in 2022 due to Disney and Sony deal',
        streaming: {
            netflix: 'https://www.netflix.com/title/81055822',
            disney: 'https://www.disneyplus.com/movies/spider-man-far-from-home/3PtrmOKmcLb4'
        },
        premiere: "2 July 2019",
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
    },
    {
        name: 'Spider-Man: No Way Home',
        date: {
            start: 'July 2024',
            end: 'December 2024'
        },
        premiere: '17 December 2021',
        category: 'MOVIE',
        streaming: {
        },
        note: 'Coming to Disney+ in 2022 due to Disney and Sony deal',
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
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
    {
        name: 'Spider-Man 4',
        premiere: '3000',
        date: {
            start: '',
            end: ''
        },
        category: 'MOVIE',
        streaming: {
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
    },
    {
        name: 'Spider-Man: Freshman Year',
        premiere: '2024',
        date: {
            start: '',
            end: ''
        },
        category: 'LIMITED SERIES',
        streaming: {
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
    },
    {
        name: 'Spider-Man: Sophomore Year',
        premiere: '3000',
        date: {
            start: '',
            end: ''
        },
        category: 'LIMITED SERIES',
        streaming: {
        },
        icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
    },
]

export default asm