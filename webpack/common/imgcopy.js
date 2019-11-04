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
              //   маска для сохранения файлов - имя
              outputPath: `${baseConfig.pathVars.PATHS.assets}/img`
              //   маска для сохранения файлов - путь
            }
          }
        }
      ]
    }
  };
};
