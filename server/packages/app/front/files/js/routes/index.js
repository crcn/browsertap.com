module.exports = function (app) {

  var router = app.router;

  router.
  param("code", function (request, next, _id) {
    app.models.get("users").getResetPasswordCode(_id, next);
  })

  router.
    route("/").
    name("home").
    states({
      main : "app",
      app  : "controller"
    })
  
  router.
    route("/logout").
    name("logout").
    enter(function (request, next) {
      router.redirect("login");
      next();
    })

  router.
    route("/login").
    name("login").
    states({
      main : "auth",
      auth : "login"
    })

  router.
    route("/signup").
    name("signup").
    states({
      main : "auth",
      auth : "signup"
    })

  router.
    route("/iwantin").
    name("requestInvite").
    states({
      main : "auth",
      auth : "requestInvite"
    })

  router.
    route("/forgot/reset/:code").
    states({
      main : "auth",
      auth : "forgot",
      forgot : "reset"
    })

  router.
    route("/forgot").
    name("forgotPassword").
    states({
      main : "auth",
      auth : "forgot",
      forgot: "form"
    })

  router.
    route("/forgot/complete").
    states({
      main : "auth",
      auth : "forgot",
      forgot : "complete"
    })

}