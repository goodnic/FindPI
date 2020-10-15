const { truncate } = require("fs");

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  pluginOptions: {
    apollo: {
      lintGQL: true 
    }
  },
};
