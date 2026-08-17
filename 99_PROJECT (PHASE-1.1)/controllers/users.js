const User = require("../models/user");

// sign up route
module.exports.renderSignUpForm = (req, res) => {
    res.render("users/signup.ejs")
}

// sign up post
module.exports.signup = async (req, res) => {
        try {
            let { username, email, password } = req.body;
            const newUser = new User({ email, username });
            const registeredUser = await User.register(newUser, password);
            req.login(registeredUser, (err) => {
                if(err) {
                    return next(err);
                }
                req.flash("success", "Welcome to WANDERLUST");
                res.redirect("/listings");
            })
            
        } catch (e) {
            req.flash("error", e.message);
            res.redirect("/signup");
        }
    }

// login in route
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

// login post 
module.exports.login = async (req, res) => {
        req.flash("success", "Welcome to Wanderlust !");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
}

// log out 
module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out succesfully")
        res.redirect("/listings")
    })
}