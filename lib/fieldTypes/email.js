/*!
 * Module dependencies.
 */

var util = require('util'),
	utils = require('../utils'),
	super_ = require('../field');

/**
 * Email FieldType Constructor
 * @extends Field
 * @api public
 */

function email(list, path, options) {
	this._nativeType = String;
	email.super_.call(this, list, path, options);
};

/*!
 * Inherit from Field
 */

util.inherits(email, super_);

exports = module.exports = email;