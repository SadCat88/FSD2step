// Модуль конфига для копирования картинок (file-loader)
const baseConfig = require("../../webpack.config.js");

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              // маска для сохранения файлов - имя
              publicPatch() {
                if (process.env.NODE_ENV === 'development') {
                  return `${baseConfig.pathVars.PATHS.assets}/img`;
                }
                else {
                  return `../../img`;
                }
              },
              // publicPath: `../../img`,
              // путь для указания html и css
              outputPath: `${baseConfig.pathVars.PATHS.assets}/img`
              // маска для сохранения файлов - путь
            }
          }
        }
      ]
    }
  };
};
