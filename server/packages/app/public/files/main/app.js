var mojo = require("mojojs");

function BrowserTap () {
  mojo.Application.apply(this, arguments);
  this._registerPlugins();
}

mojo.Application.extend(BrowserTap, {

  /**
   */

  _registerPlugins: function () {
    this.use(require("./views"));
  },

  /**
   */

  initialize: function (placeholder) {
    this.createView("main").attach(placeholder);
  }
});

module.exports = BrowserTap;