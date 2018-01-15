module.exports = {
  siteMetadata: {
    title: `Justin Ball`,
    author: `Justin Ball`,
    description: `Nobody Listens Anyway`,
    email: `justinball@gmail.com`,
    github: `jbasdf`,
    twitter: `jbasdf`,
    linkedin: `jbasdf`,
    facebook: `jbasdf`,
    instagram: `jbasdf`,
    companyUrl: `http://www.atomicjolt.com`,
    companyName: `Atomic Jolt`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
            },
          },
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 800,
              height: 400
            }
          },
          `gatsby-remark-copy-linked-files`,
        ]
      }
    },
  ]
};
