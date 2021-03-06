/**
 * Portal API
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
    factory(root.expect, root.PortalApi);
  }
}(this, function(expect, PortalApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PortalApi.GetBasicsByLogin();
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

  describe('GetBasicsByLogin', function() {
    it('should create an instance of GetBasicsByLogin', function() {
      // uncomment below and update the code to test GetBasicsByLogin
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be.a(PortalApi.GetBasicsByLogin);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "full_name")', function() {
      // uncomment below and update the code to test the property fullName
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be();
    });

    it('should have the property primaryEmail (base name: "primary_email")', function() {
      // uncomment below and update the code to test the property primaryEmail
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be();
    });

    it('should have the property labName (base name: "lab_name")', function() {
      // uncomment below and update the code to test the property labName
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be();
    });

    it('should have the property piFullName (base name: "pi_full_name")', function() {
      // uncomment below and update the code to test the property piFullName
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be();
    });

    it('should have the property departmentName (base name: "department_name")', function() {
      // uncomment below and update the code to test the property departmentName
      //var instance = new PortalApi.GetBasicsByLogin();
      //expect(instance).to.be();
    });

  });

}));
