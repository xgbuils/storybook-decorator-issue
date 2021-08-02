module.exports = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        backgrounds: false,
        controls: false,
        docs: false,
        outline: false,
      },
    },
  ],
  reactOptions: {
    strictMode: true,
  },
};
