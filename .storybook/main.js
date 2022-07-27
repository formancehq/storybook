module.exports = {
  stories: ['../src/**/*stories.@(jsx|tsx)'],
  addons: ['@storybook/preset-create-react-app'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
