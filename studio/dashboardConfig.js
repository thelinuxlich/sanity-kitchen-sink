export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6013375451f4170090b918cf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yrmn9p32',
                  apiId: '7cabc163-2aaf-42e4-a825-b355c78f8a9f'
                },
                {
                  buildHookId: '601337541171eb00bf115c5b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-579zc6s8',
                  apiId: 'f4e9b2bb-dea2-4d64-96a0-f4bb4eede4f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thelinuxlich/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-579zc6s8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
