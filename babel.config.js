module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: [["module:react-native-dotenv"]],
    plugins: ["inline-dotenv"],
    env: {
      production: {
        plugins: ["react-native-paper/babel", "inline-dotenv"],
      },
    },
  };
};
