import passport from "passport";

export const authenticate = (req, res, next) => {
  // authenticate will return function 
  passport.authenticate("jwt", (err, user) => {
    if (err) {
      next(err);
    }
    if (!user) {
      // not able to find the user
      return res.status(401).json({
        message: "Unauthorized Access No token",
      });
    }
    // user is present ->
    // inside the request we will attach the user
    req.user = user; // user property will get attached to the request object
    next();
  })(req, res, next);
};
