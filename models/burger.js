// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("menu", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.create("menu", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("menu", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("menu", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (menuController.js).
module.exports = burger;