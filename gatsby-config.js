module.exports = {
  pathPrefix: "/JustBeds-gatsby-website-react",
  siteMetadata: {
    title: 'Just Beds',
    description: 'Just Beds Shopping list website',
    author: 'Risk Taker',
    disqus: 'false',
    ogImage: '/images/GBMeta.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/`],
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    //'gatsby-transformer-remark',
    {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                'gatsby-remark-relative-images',
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 250,
                        linkImagesToOriginal: false
                    }
                }
            ]
        }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
//        name: 'pages'
      }
    },
    //'gatsby-plugin-netlify-cms',
    //'gatsby-plugin-netlify',

    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/markdown/products`,
    //     name: 'products'
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/assets/images`,
    //   },
    // },



    //'gatsby-remark-prismjs',
    //'gatsby-remark-copy-linked-files',
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-relative-images',
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 750
    //         }
    //       }
    //     ]
    //   }
    // },
    //'gatsby-plugin-manifest',
    //'gatsby-plugin-offline',
    



    //'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/favicon.png",
   
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: "Gatsboy Web",
        developerURL: "https://gatsboy.com",
        dir: 'auto',
        lang: 'en-UK',
        background: '#fff',
        theme_color: '#74C384',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
   
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
}