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
    instance = new P3Client.BuildStack();
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

  describe('BuildStack', function() {
    it('should create an instance of BuildStack', function() {
      // uncomment below and update the code to test BuildStack
      //var instance = new P3Client.BuildStack();
      //expect(instance).to.be.a(P3Client.BuildStack);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new P3Client.BuildStack();
      //expect(instance).to.be();
    });

    it('should have the property os (base name: "os")', function() {
      // uncomment below and update the code to test the property os
      //var instance = new P3Client.BuildStack();
      //expect(instance).to.be();
    });

    it('should have the property osVersion (base name: "os_version")', function() {
      // uncomment below and update the code to test the property osVersion
      //var instance = new P3Client.BuildStack();
      //expect(instance).to.be();
    });

    it('should have the property buildTooling (base name: "build_tooling")', function() {
      // uncomment below and update the code to test the property buildTooling
      //var instance = new P3Client.BuildStack();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new P3Client.BuildStack();
      //expect(instance).to.be();
    });

  });

}));
