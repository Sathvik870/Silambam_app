const crypto = require('crypto');

// Generate a random 256-bit key
const secret = crypto.randomBytes(32).toString('hex');

console.log('Your JWT secret key:', secret);
