const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@primary-color": "#FFAA00",
            "@body-background": "#fff", // add more defaults styles here
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
