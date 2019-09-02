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
    instance = new P3Client.Build();
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

  describe('Build', function() {
    it('should create an instance of Build', function() {
      // uncomment below and update the code to test Build
      //var instance = new P3Client.Build();
      //expect(instance).to.be.a(P3Client.Build);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property app (base name: "app")', function() {
      // uncomment below and update the code to test the property app
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property buildStack (base name: "build_stack")', function() {
      // uncomment below and update the code to test the property buildStack
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property requestor (base name: "requestor")', function() {
      // uncomment below and update the code to test the property requestor
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property publication (base name: "publication")', function() {
      // uncomment below and update the code to test the property publication
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property requestRef (base name: "request_ref")', function() {
      // uncomment below and update the code to test the property requestRef
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property deploymentTooling (base name: "deployment_tooling")', function() {
      // uncomment below and update the code to test the property deploymentTooling
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property activation (base name: "activation")', function() {
      // uncomment below and update the code to test the property activation
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new P3Client.Build();
      //expect(instance).to.be();
    });

  });

}));