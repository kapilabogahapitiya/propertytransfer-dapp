var PropertyContract = artifacts.require("PropertyContract");

var _ownername = "Tom";
var _location = "United Kingdom";
var _type = "Apartment building";
var _size = 100;
var _cost = 100000;
var _tax  = 100;

module.exports = function(deployer) {
  deployer.deploy(PropertyContract, _ownername, _location, _type, _size, _cost, _tax);
};
