import express from 'express';
import passport from 'passport';
import { login, logout, signup, loginWithGoogleSuccess } from '../controllers/auth.controller.js';
import dotenv from 'dotenv'
dotenv.config();
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get("/google/callback", (req, res, next) => {
    passport.authenticate('google', (err, profile) => {
        console.log(profile);
        req.user = profile
        next()
    })(req, res, next)
}, (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}/login-success/${req.user?.id}`)
});

router.post("/login-success", loginWithGoogleSuccess);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
