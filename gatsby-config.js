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
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
        ]
      }
    },
  ]
};
