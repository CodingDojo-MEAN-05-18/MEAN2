const bookRoutes = require('./book.routes');
const authRoutes = require('./auth.routes');
const router = require('express').Router();
// /api/auth/login
module.exports = router.use('/auth', authRoutes).use('/books', bookRoutes);
