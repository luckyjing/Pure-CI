const context = require.context('./', false, /\.js$/);
const keys = context.keys().filter(item => item !== './index.js');
const models = [];
for (let i = 0; i < keys.length; i++) {
  models.push(context(keys[i]));
}
export default models;