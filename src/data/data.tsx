type movie = {
  name: string,
  imax?: boolean,
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
    tiktok?: string,
    hbomax?: string,
  },
  icon: string,
  premiere: string,
  phase?: string
}

let mcu: Array<movie> = [
  {
    name: 'Agents of The S.H.I.E.L.D Season 7',
    date: {
      start: 'May 2020',
      end: 'July 2020'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg',
    premiere: "27 May 2020"
  },
  {
    name: 'Captain America: The First Avenger',
    date: {
      start: 'March 1942',
      end: 'September 1945'
    },
    category: 'MOVIE',
    phase: '1',
    note: 'Beginning and post credit scene happen in 2011.',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/6xvB6xZ4r95O',
    },
    premiere: "22 July 2011",
    icon: 'https://rlv.zcache.com/avengers_classics_captain_america_brushed_shield_classic_round_sticker-rfbbec34bc82a4c119c929bdc5b54ffc0_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Agent Carter',
    date: {
      start: '1946',
      end: '1946'
    },
    category: 'SHORT',
    note: 'Included on Iron Man 3 extras.',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/marvel-one-shot-agent-carter/145iOeTd8HRl',
    },
    premiere: "3 September 2013",
    icon: 'https://i.pinimg.com/736x/b8/1b/df/b81bdf9937ed083ae0c8c779c242da02--captain-american-logo-t-shirts.jpg'

  },
  {
    name: 'Agent Carter Season 1',
    date: {
      start: 'April 1946',
      end: 'May 1946'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/3rh3uclvsNsT'
    },
    premiere: "6 January 2015",
    icon: 'https://i.pinimg.com/736x/b8/1b/df/b81bdf9937ed083ae0c8c779c242da02--captain-american-logo-t-shirts.jpg'

  },
  {
    name: 'Agent Carter Season 2',
    date: {
      start: 'July 1947',
      end: 'July 1947'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/3rh3uclvsNsT'
    },
    premiere: "19 January 2016",
    icon: 'https://i.pinimg.com/736x/b8/1b/df/b81bdf9937ed083ae0c8c779c242da02--captain-american-logo-t-shirts.jpg'

  },
  {
    name: 'Captain Marvel',
    imax: true,
    date: {
      start: '1995',
      end: '1995'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/38xJGlLAQy9a',
    },
    premiere: "8 March 2019",
    icon: 'https://ih1.redbubble.net/image.648232338.0642/st,small,507x507-pad,600x600,f8f8f8.u3.jpg'
  },
  {
    name: 'Iron Man',
    imax: true,
    date: {
      start: 'August 2010',
      end: 'November 2010'
    },
    category: 'MOVIE',
    phase: '1',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/6aM2a8mZATiu',
    },
    premiere: "2 May 2008",
    icon: 'https://rlv.zcache.com/invincible_iron_man_classic_round_sticker-r2781c2c5810845ccacf05ff2b8914e37_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Iron Man 2',
    date: {
      start: '25 May 2011',
      end: '4 June 2011'
    },
    category: 'MOVIE',
    phase: '1',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/lXjCr9QmGGQJ',
    },
    premiere: "7 May 2010",
    icon: 'https://rlv.zcache.com/invincible_iron_man_classic_round_sticker-r2781c2c5810845ccacf05ff2b8914e37_0ugmm_8byvr_704.webp'
  },
  {
    name: 'The Incredible Hulk',
    date: {
      start: '25 May 2011',
      end: '4 June 2011'
    },
    category: 'MOVIE',
    phase: '1',
    note: 'Not available not Disney+ for now, because Universal has rights.',
    streaming: {
      // prime: 'https://www.primevideo.com/detail/0TEJSDPUSF900Y55WM93OK89T1/',
      netflix: 'https://www.netflix.com/title/70087537',
      disney: 'https://www.disneyplus.com/movies/marvel-studios-the-incredible-hulk/2quGBOrSvA2J'
    },
    premiere: "13 June 2008",
    icon: 'https://rlv.zcache.com/incredible_hulk_logo_classic_round_sticker-rb65b305765fb434e84e36036a1e9c19f_0ugmm_8byvr_704.webp'
  },
  {
    name: 'The Consultant',
    date: {
      start: '4 June 2011',
      end: '4 June 2011'
    },
    category: 'SHORT',
    phase: '1',
    note: 'Included on Thor extras.',
    streaming: {
      // yt: 'https://youtu.be/oQoN8bkkHvw',
      disney: 'https://www.disneyplus.com/movies/marvel-one-shot-the-consultant/1WaSRiVFzc4h'
    },
    premiere: "13 September 2011",
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'A funny Thing Happened on the Way to Thor\'s Hammer',
    date: {
      start: '29 May 2011',
      end: '2 June 2011'
    },
    category: 'SHORT',
    phase: '1',
    note: 'Included on Captain America: The First Avenger extras.',
    streaming: {
      // yt: 'https://youtu.be/4fMWi8ImJ2U',
      disney: 'https://www.disneyplus.com/movies/a-funny-thing-happened-on-the-way-to-thors-hammer/7ifvmOpKYujC'
    },
    premiere: "25 October 2011",
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'

  },
  {
    name: 'Thor',
    date: {
      start: '30 May 2011',
      end: '4 June 2011'
    },
    category: 'MOVIE',
    phase: '1',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/1p4vdKzTuhzr',
    },
    premiere: '6 May 2011',
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Avengers',
    date: {
      start: '3 May 2012',
      end: '6 May 2012'
    },
    category: 'MOVIE',
    phase: '1',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/2h6PcHFDbsPy',
    },
    premiere: '4 May 2012',
    icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Item 47',
    date: {
      start: '12 May 2012',
      end: '12 May 2012'
    },
    category: 'SHORT',
    phase: '1',
    note: 'Included on Avengers extras.',
    streaming: {
      // yt: 'https://youtu.be/oE6DjAJvxA8',
      disney: 'https://www.disneyplus.com/movies/marvel-one-shot-item-47/252wvHakYgOR'
    },
    premiere: "25 September 2012",
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Iron Man 3',
    date: {
      start: 'December 2012',
      end: 'December 2012'
    },
    category: 'MOVIE',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/3s4Ihq7P2c6e',
    },
    premiere: '3 May 2013',
    icon: 'https://rlv.zcache.com/invincible_iron_man_classic_round_sticker-r2781c2c5810845ccacf05ff2b8914e37_0ugmm_8byvr_704.webp'
  },
  {
    name: 'All Hail the King',
    date: {
      start: 'June 2013',
      end: 'June 2013'
    },
    category: 'SHORT',
    phase: '2',
    note: 'Included on Thor: The Dark World extras.',
    streaming: {
      // yt: 'https://youtu.be/ezP-df_9yw0',
      disney: 'https://www.disneyplus.com/movies/marvel-one-shot-all-hail-the-king/6rOlKvPhvlh4',
    },
    premiere: "4 February 2014",
    icon: 'https://preview.redd.it/vpme7zg9ffu61.png?width=920&format=png&auto=webp&s=4daab7322fd0957a9e7af625e90c7ee9338141e9'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 1 Episodes 1-7',
    date: {
      start: 'September 2013',
      end: 'November 2013'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: "24 September 2013",
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Thor: The Dark World',
    date: {
      start: '13 November 2013',
      end: '19 November 2013'
    },
    category: 'MOVIE',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/ZHk7aM5xTbW7',
    },
    premiere: '8 November 2013',
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 1 Episodes 8-16',
    date: {
      start: '20 November 2013',
      end: 'April 2014'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: "19 November 2013",
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Captain America: The Winter Soldier',
    date: {
      start: '1 April 2014',
      end: '8 April 2014'
    },
    category: 'MOVIE',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/TVme5whcowSy',
    },
    premiere: '4 April 2014',
    icon: 'https://rlv.zcache.com/avengers_classics_captain_america_brushed_shield_classic_round_sticker-rfbbec34bc82a4c119c929bdc5b54ffc0_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 1 Episodes 17-22',
    date: {
      start: '2 April 2014',
      end: 'May 2014'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '8 April 2014',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Guardians of the Galaxy',
    imax: true,
    date: {
      start: 'September 2014',
      end: 'September 2014'
    },
    category: 'MOVIE',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/1S4WM9h3KRR6',
    },
    premiere: '1 August 2014',
    icon: 'https://rlv.zcache.com/guardians_of_the_galaxy_round_vintage_logo_classic_round_sticker-re3a286504b2e44b7bf08bca526cc6634_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 2 Episodes 1-10',
    date: {
      start: 'September 2014',
      end: 'December 2014'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '23 September 2014',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Guardians of the Galaxy Vol. 2',
    imax: true,
    date: {
      start: 'December 2014',
      end: 'December 2014'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/ZdRX4mMbp1gM',
    },
    premiere: '5 May 2017',
    icon: 'https://rlv.zcache.com/guardians_of_the_galaxy_round_vintage_logo_classic_round_sticker-re3a286504b2e44b7bf08bca526cc6634_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Daredevil Season 1',
    date: {
      start: 'January 2015',
      end: 'May 2015'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/daredevil/5jKSWL7ZMg50',
    },
    premiere: '10 April 2015',
    icon: 'https://i5.walmartimages.com/asr/6ee113b6-cdbe-481b-96fa-f798c8ae837f_1.6bc975629f52c19d24f58641332d09de.jpeg'
  },
  {
    name: 'Jessica Jones Season 1',
    date: {
      start: 'March 2015',
      end: 'May 2015'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/jessica-jones/4LX4rNmINp5y'
    },
    premiere: '20 November 2015',
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-buttonjjlogoicon-1-productimagenowatermark.jpg'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 2 Episodes 11-19',
    date: {
      start: 'March 2015',
      end: 'April 2015'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '3 March 2015',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Avengers: Age of Ultron',
    date: {
      start: 'April 2015',
      end: 'May 2015'
    },
    category: 'MOVIE',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/76IUxY0rNHzt',
    },
    premiere: '1 May 2015',
    icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 2 Episodes 20-22',
    date: {
      start: 'May 2015',
      end: 'May 2015'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '5 May 2015',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'WHIH Newsfront Season 1',
    date: {
      start: '7 July 2015',
      end: '16 July 2015'
    },
    category: 'INTERNET',
    streaming: {
      yt: 'https://www.youtube.com/watch?v=j4IgjmQENE4',
    },
    premiere: "2 July 2015",
    icon: 'https://img.betaseries.com/UzFvSTqjSBm8ib6r2eLlRTcqs2A=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fde1a494544d92b33af11bb1da7fde3c8.jpg'
  },
  {
    name: 'Ant-Man',
    date: {
      start: '17 July 2015',
      end: '31 July 2015'
    },
    category: 'MOVIE',
    phase: '2',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/5c92KVf1zgUX',
    },
    premiere: '17 July 2015',
    icon: 'https://i.pinimg.com/originals/72/9c/72/729c7266379cb5c204fe5b167341fd16.png'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 3 Episodes 1-10',
    date: {
      start: 'September 2015',
      end: 'December 2015'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '29 September 2015',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Daredevil Season 2',
    date: {
      start: 'March 2016',
      end: 'May 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/daredevil/5jKSWL7ZMg50',
    },
    premiere: '18 March 2016',
    icon: 'https://i5.walmartimages.com/asr/6ee113b6-cdbe-481b-96fa-f798c8ae837f_1.6bc975629f52c19d24f58641332d09de.jpeg'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 3 Episodes 11-19',
    date: {
      start: '8 March 2016',
      end: '23 May 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '8 March 2016',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'WHIH Newsfront Season 2',
    date: {
      start: 'April 2016',
      end: 'May 2016'
    },
    category: 'INTERNET',
    streaming: {
      yt: 'https://www.youtube.com/watch?v=j4IgjmQENE4',
    },
    premiere: "22 April 2016",
    icon: 'https://img.betaseries.com/UzFvSTqjSBm8ib6r2eLlRTcqs2A=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fde1a494544d92b33af11bb1da7fde3c8.jpg'
  },
  {
    name: 'Captain America: Civil War',
    imax: true,
    date: {
      start: '3 May 2016',
      end: '28 August 2016'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/4ovfyKnnIBCg',
    },
    premiere: '6 May 2016',
    icon: 'https://rlv.zcache.com/avengers_classics_captain_america_brushed_shield_classic_round_sticker-rfbbec34bc82a4c119c929bdc5b54ffc0_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Team Thor',
    date: {
      start: '7 May 2016',
      end: '7 May 2016'
    },
    category: 'SHORT',
    phase: '3',
    streaming: {
      // yt: 'https://www.youtube.com/watch?v=cb24kGrE1l4&t=489s',
      disney: 'https://www.disneyplus.com/movies/team-thor-part-1/1TzAxRHo4kjK'
    },
    premiere: "28 August 2016",
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Black Widow',
    imax: true,
    date: {
      start: '8 May 2016',
      end: 'August 2016'
    },
    category: 'MOVIE',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/3VfTap90rwZC',
    },
    premiere: '9 July 2021',
    icon: 'https://i.pinimg.com/originals/3a/ee/1b/3aee1b046dea9984904a1481989c9885.jpg'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 3 Episodes 20-22',
    date: {
      start: '10 May 2016',
      end: '17 May 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '10 May 2016',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Luke Cage Season 1',
    date: {
      start: 'April 2016',
      end: 'July 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/luke-cage/1L458elR85KN',
    },
    premiere: '30 September 2016',
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-bttnlciconsym-1-productimagenowatermark.jpg'
  },
  {
    name: 'Iron Fist Season 1',
    date: {
      start: 'July 2016',
      end: 'July 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/iron-fist/24YlE6bSZy6E',
    },
    premiere: '17 March 2017',
    icon: 'https://cdn.worldvectorlogo.com/logos/marvels-iron-fist.svg'
  },
  {
    name: 'The Defenders',
    date: {
      start: 'August 2016',
      end: 'August 2016'
    },
    category: 'LIMITED SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/the-defenders/1vLuQyD9nTYk',
    },
    premiere: '18 August 2017',
    icon: 'https://i.pinimg.com/474x/a4/f9/62/a4f962bff6486a266d8a1e0b0415b6a1.jpg'
  },
  {
    name: 'Black Panther',
    imax: true,
    date: {
      start: 'June 2016',
      end: 'June 2016'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/1GuXuYPj99Ke',
    },
    premiere: '16 February 2018',
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-bttnbpiconsym-1-productimagenowatermark.jpg'
  },
  {
    name: 'Team Thor: Part 2',
    date: {
      start: 'September 2016',
      end: 'September 2016'
    },
    category: 'SHORT',
    phase: '3',
    streaming: {
      // yt: 'https://www.youtube.com/watch?v=cb24kGrE1l4&t=489s'
      disney: 'https://www.disneyplus.com/movies/team-thor-part-2/bzhxJXTnvgD1'
    },
    premiere: "14 February 2017",
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'

  },
  {
    name: 'Doctor Strange',
    imax: true,
    date: {
      start: 'October 2016',
      end: 'November 2017'
    },
    category: 'MOVIE',
    phase: '3',
    note: 'Prologue takes place in February 2016',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/4GgMJ1aHKHA2',
    },
    premiere: "4 November 2016",
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F68%2Fc9%2Fbe%2F68c9be968cbc771d425095356b75669b.jpg&f=1&nofb=1'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Slingshot',
    date: {
      start: 'September 2016',
      end: 'September 2016'
    },
    category: 'INTERNET',
    streaming: {
      yt: 'https://www.youtube.com/watch?v=1xgQUoVfiL8&list=PLDe0CguuqcMBVtZJk0iCNoSblixvAt4BY',
    },
    premiere: "13 December 2016",
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 4 Episodes 1-4',
    date: {
      start: 'September 2016',
      end: 'October 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '20 September 2016',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Spider-Man: Homecoming',
    date: {
      start: 'September 2016',
      end: 'October 2016'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      netflix: 'https://www.netflix.com/title/80166369?s=i&trkid=13747225',
      disney: 'https://www.disneyplus.com/movies/-/4cLMEzWGqQaG'
    },
    premiere: "7 July 2017",
    icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
  },
  {
    name: 'The Punisher Season 1',
    date: {
      start: 'October 2016',
      end: 'November 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/the-punisher/6JOZHgU6cBS3',
    },
    premiere: '17 November 2017',
    icon: 'https://i.pinimg.com/originals/72/ac/0e/72ac0efff43f5b82091b6a82d24e0fc3.jpg'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 4 Episodes 5-9',
    date: {
      start: 'October 2016',
      end: 'December 2016'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '25 October 2016',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Cloak & Dagger Season 1',
    date: {
      start: 'October 2016',
      end: 'February 2017'
    },
    category: 'SERIES',
    note: 'Available on Prime in UK and on Disney+ in Australia. So it\'s probably coming to Disney+ after Prime.',
    streaming: {
      disney: 'https://www.disneyplus.com/series/cloak-dagger/4mUMHeti2YCc'
    },
    premiere: '7 June 2018',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.magneticmag.com%2F.image%2Ft_share%2FMTU5Mzk4MTMxMjY2NDk1NzYx%2Fmagnumpr_cloaklogocopy.png&f=1&nofb=1'
  },
  {
    name: 'Inhumans',
    date: {
      start: 'December 2016',
      end: 'January 2017'
    },
    category: 'LIMITED SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/6VZXWp9jaYsT',
    },
    premiere: '29 September 2017',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbbts1.azureedge.net%2Fimages%2Fp%2Ffull%2F2017%2F09%2Fd2b980f4-09ae-48da-bed9-d1f08b09ab6c.png&f=1&nofb=1'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 4 Episodes 10-22',
    date: {
      start: 'January 2017',
      end: 'April 2017'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '17 January 2017',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Jessica Jones Season 2',
    date: {
      start: 'July 2017',
      end: 'July 2017'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/jessica-jones/4LX4rNmINp5y'
    },
    premiere: '8 March 2018',
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-buttonjjlogoicon-1-productimagenowatermark.jpg'
  },
  {
    name: 'Luke Cage Season 2',
    date: {
      start: 'August 2017',
      end: 'October 2017'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/luke-cage/1L458elR85KN',
    },
    premiere: '22 June 2018',
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-bttnlciconsym-1-productimagenowatermark.jpg'
  },
  {
    name: 'Runaways Season 1',
    date: {
      start: 'November 2017',
      end: 'December 2017'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/FrnyN9YoJj46',
    },
    premiere: '21 November 2017',
    icon: 'https://ih1.redbubble.net/image.697925981.6860/st,small,507x507-pad,600x600,f8f8f8.u5.jpg'
  },
  {
    name: 'Iron Fist Season 2',
    date: {
      start: 'October 2017',
      end: 'December 2017'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/iron-fist/24YlE6bSZy6E',
    },
    premiere: '7 September 2018',
    icon: 'https://cdn.worldvectorlogo.com/logos/marvels-iron-fist.svg'
  },
  {
    name: 'Cloak & Dagger Season 2',
    date: {
      start: 'October 2017',
      end: 'December 2017'
    },
    category: 'SERIES',
    note: 'Available on Prime in UK and on Disney+ in Australia. So it\'s probably coming to Disney+ after Prime.',
    streaming: {
      disney: 'https://www.disneyplus.com/series/cloak-dagger/4mUMHeti2YCc'
    },
    premiere: '4 April 2019',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.magneticmag.com%2F.image%2Ft_share%2FMTU5Mzk4MTMxMjY2NDk1NzYx%2Fmagnumpr_cloaklogocopy.png&f=1&nofb=1'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 5 Episodes 1-10',
    date: {
      start: 'April 2017',
      end: 'December 2017'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '1 December 2017',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Daredevil Season 3',
    date: {
      start: 'October 2017',
      end: 'January 2018'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/daredevil/5jKSWL7ZMg50',
    },
    premiere: '19 October 2018',
    icon: 'https://i5.walmartimages.com/asr/6ee113b6-cdbe-481b-96fa-f798c8ae837f_1.6bc975629f52c19d24f58641332d09de.jpeg'
  },
  {
    name: 'Runaways Season 2',
    date: {
      start: 'December 2017',
      end: 'February 2018'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/FrnyN9YoJj46',
    },
    premiere: '21 December 2018',
    icon: 'https://ih1.redbubble.net/image.697925981.6860/st,small,507x507-pad,600x600,f8f8f8.u5.jpg'
  },
  {
    name: 'The Punisher Season 2',
    date: {
      start: 'November 2017',
      end: 'March 2018'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/the-punisher/6JOZHgU6cBS3',
    },
    premiere: '18 January 2019',
    icon: 'https://i.pinimg.com/originals/72/ac/0e/72ac0efff43f5b82091b6a82d24e0fc3.jpg'
  },
  {
    name: 'Jessica Jones Season 3',
    date: {
      start: 'December 2017',
      end: 'March 2018'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/jessica-jones/4LX4rNmINp5y'
    },
    premiere: '14 June 2019',
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-buttonjjlogoicon-1-productimagenowatermark.jpg'
  },
  {
    name: 'Thor: Ragnarok',
    imax: true,
    date: {
      start: 'September 2017',
      end: 'April 2018'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/3XqAT8UV8ojS'
    },
    premiere: "3 November 2017",
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Team Darryl',
    date: {
      start: 'April 2018',
      end: 'April 2018'
    },
    category: 'SHORT',
    phase: '3',
    streaming: {
      // yt: 'https://www.youtube.com/watch?v=cb24kGrE1l4&t=489s'
      disney: 'https://www.disneyplus.com/movies/team-darryl/j3CxRd2OEgVA'
    },
    premiere: "20 February 2018",
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'

  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 5 Episodes 11-18',
    date: {
      start: 'March 2018',
      end: 'April 2018'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '2 March 2018',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Ant-Man and The Wasp',
    imax: true,
    date: {
      start: 'March 2018',
      end: 'April 2018'
    },
    category: 'MOVIE',
    phase: '3',
    note: 'It\'s best you watch Infinity War directly after Thor Ragnarok.',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/5c92KVf1zgUX',
    },
    premiere: "6 July 2018",
    icon: 'https://i.pinimg.com/originals/72/9c/72/729c7266379cb5c204fe5b167341fd16.png'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 5 Episodes 19-22',
    date: {
      start: 'April 2018',
      end: 'April 2018'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '27 April 2018',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Avengers: Infinity War',
    imax: true,
    date: {
      start: 'April 2018',
      end: 'April 2018'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/1WEuZ7H6y39v',
    },
    premiere: "27 April 2018",
    icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Avengers: Endgame',
    imax: true,
    date: {
      start: 'May 2018',
      end: 'October 2023'
    },
    category: 'MOVIE',
    phase: '3',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/aRbVJUb2h2Rf',
    },
    premiere: "26 April 2019",
    icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Loki Season 1',
    date: {
      start: 'October 2023',
      end: '2024'
    },
    category: 'SERIES',
    phase: '4',
    note: 'The series happen in alternative timeline in 2012, but it\'s recommended to watch it after Avengers: Endgame.',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/6pARMvILBGzF',
    },
    premiere: '9 June 2021',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6f%2F3f%2F23%2F6f3f2375f9ebce70e9d2fbd84c34c8fb.jpg&f=1&nofb=1'
  },
  {
    name: 'What If...? Season 1',
    date: {
      start: 'October 2023',
      end: 'October 2023'
    },
    category: 'SERIES',
    phase: '4',
    note: 'Alternative timelines, watch after Loki series.',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/7672ZVj1ZxU9',
    },
    premiere: '11 August 2021',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F12%2Fdd%2Faf12dd4642396c427e405dc1175468ce.png&f=1&nofb=1'
  },
  {
    name: 'Agents of The S.H.I.E.L.D. Season 6',
    date: {
      start: 'May 2019',
      end: 'July 2019'
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/2UT4VQrwpVgi',
    },
    premiere: '10 May 2019',
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Runaways Season 3',
    date: {
      start: 'February 2018',
      end: 'February 2018'
    },
    category: 'SERIES',
    note: 'Seems to mostly take place post-Snap, but with no references to it.',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/FrnyN9YoJj46',
    },
    premiere: '13 December 2019',
    icon: 'https://ih1.redbubble.net/image.697925981.6860/st,small,507x507-pad,600x600,f8f8f8.u5.jpg'
  },
  {
    name: 'Helstrom',
    date: {
      start: '2019',
      end: '2019'
    },
    category: 'LIMITED SERIES',
    note: 'Not canon',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/4FuaAENOKFEU',
    },
    premiere: '16 October 2020',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgr.cineserie.com%2F2020%2F06%2Fhelstrom-la-serie-marvel-devoile-son-logo.jpg%3Fimgeng%3D%2Ff_jpg%2Fcmpr_0%2Fw_660%2Fh_345%2Fm_cropbox%26ver%3D1&f=1&nofb=1'
  },
  {
    name: 'WandaVision',
    date: {
      start: 'November 2023',
      end: 'November 2023'
    },
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/4SrN28ZjDLwH',
    },
    premiere: '15 January 2021',
    icon: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/dee98d92002503.5e40898189364.png'
  },
  {
    name: 'Hawkeye',
    date: {
      start: 'December 2024',
      end: 'December 2024'
    },
    premiere: '24 November 2021',
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/series/hawkeye/11Zy8m9Dkj5l'
    },
    icon: 'https://i.pinimg.com/originals/d3/8f/41/d38f41e25b86f4845e639a4e30c2eba5.jpg'
  },
  {
    name: 'Shang-Chi and the Legend of the Ten Rings',
    imax: true,
    date: {
      start: 'April 2024',
      end: 'April 2024'
    },
    category: 'MOVIE',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/5GyV9sf9Y041'
    },
    premiere: "3 September 2021",
    icon: 'https://preview.redd.it/vpme7zg9ffu61.png?width=920&format=png&auto=webp&s=4daab7322fd0957a9e7af625e90c7ee9338141e9'
  },
  {
    name: 'The Falcon and the Winter Soldier',
    date: {
      start: 'April 2024',
      end: 'April 2024'
    },
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/4gglDBMx8icA',
    },
    premiere: '19 March 2021',
    icon: 'https://i.pinimg.com/originals/e3/e9/c1/e3e9c1b9e4d23befd811d1002cd8817c.jpg'
  },
  {
    name: 'Spider-Man: Far from Home',
    date: {
      start: '20 June 2024',
      end: 'July 2024'
    },
    category: 'MOVIE',
    phase: '3',
    note: 'Coming to Disney+ in 2022 due to Disney and Sony deal',
    streaming: {
      netflix: 'https://www.netflix.com/title/81055822',
      disney: 'https://www.disneyplus.com/movies/spider-man-far-from-home/3PtrmOKmcLb4'
    },
    premiere: "2 July 2019",
    icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
  },
  {
    name: "Peter's To Do List",
    date: {
      start: '20 June 2024',
      end: '20 June 2024'
    },
    category: 'SHORT',
    note: 'Included on Spider-Man: Far from Home extras.',
    streaming: {
      yt: 'https://www.youtube.com/watch?v=SiwmVsgQpzI'
    },
    premiere: "1 October 2019",
    icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
  },
  {
    name: 'TheDailyBugle.net Season 1',
    date: {
      start: 'July 2024',
      end: 'July 2024'
    },
    category: 'INTERNET',
    streaming: {
      yt: 'https://www.youtube.com/c/thedailybugle',
    },
    premiere: "23 October 2019",
    icon: 'https://yt3.ggpht.com/sNeS67InCYXdxYSr-qPnqTkw5FhNiwgimYIn4HSakIa8K5Q3bJ5xA6ITjZysQGVX8JPYQfWy=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'The Eternals',
    imax: true,
    date: {
      start: 'November 2023',
      end: 'March 2024'
    },
    premiere: '5 November 2021',
    phase: '4',
    category: 'MOVIE',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/eternals/5cmhJAtkt6Jk'
    },
    icon: 'https://thedirect.s3.amazonaws.com/media/photos/emerch3.jpg'
  },
  {
    name: 'Spider-Man: No Way Home',
    date: {
      start: 'July 2024',
      end: 'December 2024'
    },
    premiere: '17 December 2021',
    phase: '4',
    category: 'MOVIE',
    streaming: {
    },
    note: 'Coming to Disney+ in 2022 due to Disney and Sony deal',
    icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
  },
  {
    name: 'TheDailyBugle.net Season 2',
    date: {
      start: 'July 2024',
      end: 'July 2024'
    },
    category: 'INTERNET',
    streaming: {
      tiktok: 'https://www.tiktok.com/@thedailybugleofficial'
    },
    premiere: "24 November 2021",
    icon: 'https://yt3.ggpht.com/sNeS67InCYXdxYSr-qPnqTkw5FhNiwgimYIn4HSakIa8K5Q3bJ5xA6ITjZysQGVX8JPYQfWy=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'TheDailyBugle.net Season 2.5',
    date: {
      start: 'July 2024',
      end: 'August 2024'
    },
    category: 'INTERNET',
    streaming: {
      yt: 'https://www.youtube.com/c/thedailybugle'
    },
    premiere: "5 April 2022",
    icon: 'https://yt3.ggpht.com/sNeS67InCYXdxYSr-qPnqTkw5FhNiwgimYIn4HSakIa8K5Q3bJ5xA6ITjZysQGVX8JPYQfWy=s88-c-k-c0x00ffffff-no-rj'
  },
  {
    name: 'Doctor Strange in the Multiverse of Madness',
    imax: true,
    premiere: '6 May 2022',
    date: {
      start: 'November 2024',
      end: 'November 2024'
    },
    category: 'MOVIE',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/-/27EiqSW4jIyH'
    },
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F68%2Fc9%2Fbe%2F68c9be968cbc771d425095356b75669b.jpg&f=1&nofb=1'
  },
  {
    name: 'Thor: Love and Thunder',
    premiere: '8 July 2022',
    imax: true,
    date: {
      start: 'May 2024',
      end: 'May 2024'
    },
    note: 'Coming to Disney+ on 8 September',
    phase: '4',
    category: 'MOVIE',
    streaming: {
      disney: 'https://disneyplus.com/movies/thor-love-and-thunder/3htR8mRAZMoT'
    },
    icon: 'https://rlv.zcache.com/mighty_thor_logo_classic_round_sticker-r2c8a2a0ee29d40f7b821b3545f8e5480_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Black Panther: Wakanda Forever',
    premiere: '11 November 2022',
    date: {
      start: '',
      end: ''
    },
    phase: '4',
    category: 'MOVIE',
    streaming: {
      disney: 'https://www.disneyplus.com/movies/black-panther-wakanda-forever/7MAONYZ92wDT'
    },
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-bttnbpiconsym-1-productimagenowatermark.jpg'
  },
  {
    name: 'The Marvels',
    premiere: '28 July 2023',
    date: {
      start: 'October 2025',
      end: '2025'
    },
    category: 'MOVIE',
    phase: '5',
    streaming: {
    },
    icon: 'https://ih1.redbubble.net/image.648232338.0642/st,small,507x507-pad,600x600,f8f8f8.u3.jpg'
  },
  {
    name: 'Guardians of the Galaxy Holiday Special',
    premiere: 'December 2022',
    date: {
      //TODO
      start: 'December 2024',
      end: 'December 2024'
    },
    category: 'MOVIE',
    phase: '4',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/guardians_of_the_galaxy_round_vintage_logo_classic_round_sticker-re3a286504b2e44b7bf08bca526cc6634_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Ms. Marvel',
    premiere: '8 June 2022',
    date: {
      start: 'September 2025',
      end: 'October 2025'
    },
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/series/ms-marvel/45BsikoMcOOo'
    },
    icon: 'https://ih1.redbubble.net/image.648232338.0642/st,small,507x507-pad,600x600,f8f8f8.u3.jpg'
  },
  {
    name: 'Moon Knight',
    premiere: '30 March 2022',
    date: {
      start: '6 June 2024',
      end: '26 June 2024'
    },
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/series/moon-knight/4S3oOF1knocS'
    },
    icon: 'https://rlv.zcache.com/moon_knight_logo_classic_round_sticker-r11f162ad5c74427590ebfc30ee6ecfee_0ugmm_8byvr_704.webp'
  },
  {
    name: 'She-Hulk',
    premiere: '18 August 2022',
    date: {
      //TODO
      start: 'June 2024',
      end: 'August 2024'
    },
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
      disney: 'https://www.disneyplus.com/series/she-hulk-attorney-at-law/gPwaYusKqRQh'
    },
    icon: 'https://rlv.zcache.com/incredible_hulk_logo_classic_round_sticker-rb65b305765fb434e84e36036a1e9c19f_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Secret Invasion',
    premiere: 'March 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '5',
    streaming: {
      disney: 'https://www.disneyplus.com/series/secret-invasion/3iHQtD1BDpgN'
    },
    icon: 'https://i.pinimg.com/originals/76/01/6f/76016f9d1c09dcc252ae57d62805eb42.jpg'
  },
  {
    name: 'Ant-Man and the Wasp: Quantumania',
    premiere: '17 February 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '5',
    streaming: {
    },
    icon: 'https://i.pinimg.com/originals/72/9c/72/729c7266379cb5c204fe5b167341fd16.png'
  },
  {
    name: 'Guardians of the Galaxy: Vol. 3',
    premiere: '5 May 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '5',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/guardians_of_the_galaxy_round_vintage_logo_classic_round_sticker-re3a286504b2e44b7bf08bca526cc6634_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Blade',
    premiere: '3 November 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '5',
    streaming: {
    },
    icon: 'https://preview.redd.it/b8qxtnhtbkc31.jpg?auto=webp&s=b2af13f96372bf354a43cbc27dba1f184deb3eab'
  },
  {
    name: 'Captain America: New World Order',
    premiere: '3 May 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '5',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/avengers_classics_captain_america_brushed_shield_classic_round_sticker-rfbbec34bc82a4c119c929bdc5b54ffc0_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Thunderbolts',
    premiere: '26 July 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '5',
    streaming: {
    },
    icon: 'https://gamelegends.it/wp-content/uploads/2022/07/photo1658622929.jpeg'
  },
  {
    name: 'Fantastic Four',
    premiere: '8 November 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: 'https://i.pinimg.com/originals/02/4a/7f/024a7fed2839a87e54382588977b93c3.png',
    phase: '6'
  },
  {
    name: 'Mutants',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: 'https://www.universocinematograficomarvel.it/wp-content/uploads/2022/07/The-Mutants-The-Illuminerdi-.jpg'
  },
  {
    name: 'Eternals 2',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: 'https://thedirect.s3.amazonaws.com/media/photos/emerch3.jpg'
  },
  {
    name: 'Deadpool 3',
    premiere: '6 September 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '6',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/deadpool_logo_classic_round_sticker-re468ed02e8ae4429984047976f313e40_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Shang-Chi 2',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: 'https://preview.redd.it/vpme7zg9ffu61.png?width=920&format=png&auto=webp&s=4daab7322fd0957a9e7af625e90c7ee9338141e9'
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
    name: 'Ironheart',
    premiere: 'October 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '5',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/invincible_iron_man_classic_round_sticker-r2781c2c5810845ccacf05ff2b8914e37_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Armor Wars',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: 'https://i.pinimg.com/736x/6f/a7/02/6fa70245355dab1dd577710a56fb75c3.jpg'
  },
  {
    name: 'Untitled Wakanda Series',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    note: 'Probable an Okoeye series',
    category: 'LIMITED SERIES',
    streaming: {
    },
    icon: 'https://mmv2api.s3.us-east-2.amazonaws.com/products/images/2-image-bttnbpiconsym-1-productimagenowatermark.jpg'
  },
  {
    name: 'What If…? Season 2',
    premiere: 'January 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'SERIES',
    phase: '5',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/7672ZVj1ZxU9',
    },
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F12%2Fdd%2Faf12dd4642396c427e405dc1175468ce.png&f=1&nofb=1'
  },
  {
    name: 'Loki Season 2',
    premiere: 'August 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'SERIES',
    phase: '5',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/6pARMvILBGzF',
    },
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6f%2F3f%2F23%2F6f3f2375f9ebce70e9d2fbd84c34c8fb.jpg&f=1&nofb=1'
  },
  {
    name: 'Echo',
    premiere: 'June 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '5',
    streaming: {
    },
    icon: 'https://cdnb.artstation.com/p/assets/images/images/041/650/783/large/chg_studio2021-7faf2b0b-824f-4fce-b050-57fbbdc0566e-rw-1920.jpg?1632305916'
  },
  {
    name: 'I am Groot: Groot\'s First Steps',
    premiere: '10 August 2022',
    date: {
      start: 'October 2014',
      end: 'October 2014'
    },
    category: 'SHORT',
    phase: '4',
    streaming: {
      disney: 'https://disneyplus.com/movies/groots-first-steps/4YcuPHl87ZEw'
    },
    icon: 'https://rlv.zcache.com/i_am_groot_text_emoji_classic_round_sticker-r402d188089fb4af1af2bd7dfcd7538ff_0ugmm_8byvr_704.webp'
  },
  {
    name: 'I am Groot: The Little Guy',
    premiere: '10 August 2022',
    date: {
      start: 'January 2015',
      end: 'January 2015'
    },
    category: 'SHORT',
    phase: '4',
    streaming: {
      disney: 'https://disneyplus.com/movies/the-little-guy/78eRkqeFzpRJ'
    },
    icon: 'https://rlv.zcache.com/i_am_groot_text_emoji_classic_round_sticker-r402d188089fb4af1af2bd7dfcd7538ff_0ugmm_8byvr_704.webp'
  },
  {
    name: 'I am Groot: Groot\'s Pursuit',
    premiere: '10 August 2022',
    date: {
      start: 'February 2015',
      end: 'February 2015'
    },
    category: 'SHORT',
    phase: '4',
    streaming: {
      disney: 'https://disneyplus.com/movies/groots-pursuit/4kEn4b37w8W9'
    },
    icon: 'https://rlv.zcache.com/i_am_groot_text_emoji_classic_round_sticker-r402d188089fb4af1af2bd7dfcd7538ff_0ugmm_8byvr_704.webp'
  },
  {
    name: 'I am Groot: Groot Takes a Bath',
    premiere: '10 August 2022',
    date: {
      start: 'March 2015',
      end: 'March 2015'
    },
    category: 'SHORT',
    phase: '4',
    streaming: {
      disney: 'https://disneyplus.com/movies/groot-takes-a-bath/7hYV4vfkqYBQ'
    },
    icon: 'https://rlv.zcache.com/i_am_groot_text_emoji_classic_round_sticker-r402d188089fb4af1af2bd7dfcd7538ff_0ugmm_8byvr_704.webp'
  },
  {
    name: 'I am Groot: Magnum Opus',
    premiere: '10 August 2022',
    date: {
      start: 'April 2015',
      end: 'April 2015'
    },
    category: 'SHORT',
    phase: '4',
    streaming: {
      disney: 'https://disneyplus.com/movies/magnum-opus/22fjyvHepPUg'
    },
    icon: 'https://rlv.zcache.com/i_am_groot_text_emoji_classic_round_sticker-r402d188089fb4af1af2bd7dfcd7538ff_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Werewolf by Night',
    premiere: '7 October 2022',
    date: {
      start: 'October 2024',
      end: 'October 2024'
    },
    category: 'LIMITED SERIES',
    phase: '4',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/cute_ghost_halloween_stickers_for_kids-r40b0387c993f41858f9dcdc9ca544354_0ugmm_8byvr_704.webp'
  },
  {
    name: 'Agatha: Coven of chaos',
    premiere: 'December 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '5',
    streaming: {
    },
    icon: 'https://assets-prd.ignimgs.com/2022/07/24/agatha-coven-of-chaos-button-1658628246941.jpg'
  },
  {
    name: 'Spider-Man: Freshman Year',
    premiere: '2024',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    note: 'Not canon',
    phase: '5',
    streaming: {
    },
    icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
  },
  {
    name: 'Marvel Zombies',
    premiere: '2024',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '5',
    streaming: {
    },
    icon: 'https://www.heyuguys.com/marvel-disney-plus-day/marvel-zombies-2/',
    note: 'First R rated project'
  },
  {
    name: 'X-Men `97',
    premiere: 'October 2023',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    streaming: {
    },
    icon: 'https://www.pngall.com/wp-content/uploads/5/X-Men-Logo-Transparent.png',
  },
  {
    name: 'Wonder Man',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    streaming: {
    },
    icon: 'https://i.ytimg.com/vi/wbH8qhAyChA/maxresdefault.jpg'
  },
  {
    name: 'Daredevil: Born Again',
    premiere: 'March 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '5',
    streaming: {
    },
    icon: 'https://i5.walmartimages.com/asr/6ee113b6-cdbe-481b-96fa-f798c8ae837f_1.6bc975629f52c19d24f58641332d09de.jpeg'
  },
  {
    name: 'Untitled Nova series',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    streaming: {
    },
    icon: 'https://preview.redd.it/hz3i2gy0rxc31.png?auto=webp&s=fd3fe029245ae1b0a259ea4867850af58f5338ed'
  },
  {
    name: '???',
    premiere: 'October 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: 'December 2024',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: '14 February 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: 'March 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: 'April 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: 'Avengers: The Kang Dynasty',
    premiere: '2 May 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '6',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
  },
  {
    name: '???',
    premiere: 'July 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: 'September 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'LIMITED SERIES',
    phase: '6',
    streaming: {
    },
    icon: ''
  },
  {
    name: 'Avengers: Secret Wars',
    premiere: '7 November 2025',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    phase: '6',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/avengers_logo_classic_round_sticker-rcf1f4016612145d897ee182a9650cf86_0ugmm_8byvr_704.webp'
  },
  {
    name: '???',
    premiere: '13 February 2026',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: '1 May 2026',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: '24 July 2026',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: ''
  },
  {
    name: '???',
    premiere: '6 November 2026',
    date: {
      start: '',
      end: ''
    },
    category: 'MOVIE',
    streaming: {
    },
    icon: ''
  },
  {
    name: 'I am Groot Season 2',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    category: 'SHORT',
    streaming: {
    },
    icon: 'https://rlv.zcache.com/i_am_groot_text_emoji_classic_round_sticker-r402d188089fb4af1af2bd7dfcd7538ff_0ugmm_8byvr_704.webp'
  },
  {
    name: 'What If...? Season 3',
    date: {
      start: '',
      end: ''
    },
    category: 'SERIES',
    streaming: {
      disney: 'https://www.disneyplus.com/series/-/7672ZVj1ZxU9',
    },
    premiere: '3000',
    icon: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F12%2Fdd%2Faf12dd4642396c427e405dc1175468ce.png&f=1&nofb=1'
  },
  {
    name: 'Spider-Man: Sophomore Year',
    premiere: '3000',
    date: {
      start: '',
      end: ''
    },
    note: 'Not canon',
    category: 'LIMITED SERIES',
    streaming: {
    },
    icon: 'https://seeklogo.com/images/S/spider-man-logo-0C9E5DCA9D-seeklogo.com.png'
  },
]

export default mcu;
