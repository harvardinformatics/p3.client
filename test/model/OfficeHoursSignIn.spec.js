/**
 * p3 client
 * RC Portal
 *
 * OpenAPI spec version: v1
 * Contact: ifx@fas.harvard.edu
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.P3Client);
  }
}(this, function(expect, P3Client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new P3Client.OfficeHoursSignIn();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OfficeHoursSignIn', function() {
    it('should create an instance of OfficeHoursSignIn', function() {
      // uncomment below and update the code to test OfficeHoursSignIn
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be.a(P3Client.OfficeHoursSignIn);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be();
    });

    it('should have the property pi (base name: "pi")', function() {
      // uncomment below and update the code to test the property pi
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be();
    });

    it('should have the property department (base name: "department")', function() {
      // uncomment below and update the code to test the property department
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instance = new P3Client.OfficeHoursSignIn();
      //expect(instance).to.be();
    });

  });

}));