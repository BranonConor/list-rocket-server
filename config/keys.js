//use correct keys based on the development or production environment
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
}
else {
    module.exports = require('./dev');
}