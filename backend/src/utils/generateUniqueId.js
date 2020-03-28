//Obtém o módulo crypto (para criação de id único).
const crypto = require('crypto');

module.exports = function generateUniqueId() {
   return crypto.randomBytes(4).toString('HEX');
}