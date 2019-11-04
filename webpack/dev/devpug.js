// Модуль конфига для Pug
module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(pug|jade)$/i,
          // регулярное выражение отбирающее только .pug и .jade файлы
          loader: "pug-loader",
          options: {
            pretty: true
            // отключена запись html в одну линию
          }
        }
      ]
    }
  };
};
