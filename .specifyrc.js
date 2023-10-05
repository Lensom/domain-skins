module.exports = {
  repository: '@autodoc/mother-test',
  personalAccessToken:
    '7c3fc0f51ed323c8a5f9a352fd7c40ade8262d19ea6b68a2a6948b547efe2473',
  rules: [
    {
      name: 'All design tokens in JSON',
      path: 'src/styles/colors.scss',
      filter: {
        types: ['color'],
      },
      parsers: [
        {
          name: 'to-css-custom-properties',
          options: {
            formatTokens: {
              color: 'hsl',
            },
          },
        },
      ],
    },
  ],
};
