require('dotenv').config();

module.exports = {
  siteMetadata: {
        title: 'Wels | Ingeniero Electronico y Youtuber 👨🏻‍🏫🤝🖥️| Fundador de @Team.4550',
    url: 'https://welstheory.com',
    image: 'https://youtube.com/wels_theory',
    language: 'en',
    description: 'Ingeniero Electronico, especializado en sistemas embebidos | Desarrollador de contenido educativo @wels | Fundador de @Team.4550',
    socialLinks: {
      github: 'https://github.com/welstheory',
      twitter: 'https://twitter.com/welstheory',
      facebook: 'https://facebook.com/welstheory',
      youtube: 'https://youtube.com/wels_theory',
      instagram: 'https://instagram.com/wels.theory',
      web: 'https://welstheory.com',
      mailto: 'mailto:hola@welstheory.com',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-screens',
        path: 'content/elevator-pitch/screens',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'elevator-pitch-demo-screens',
    //     path: `${__dirname}/content/screens`,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'elevator-pitch-images',
        path: 'content/elevator-pitch/images',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'elevator-pitch-demo-images',
    //     path: `${__dirname}/content/images`,
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-elevator-pitch'],
      },
    },
  ],
};
