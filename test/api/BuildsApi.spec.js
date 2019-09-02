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
    instance = new P3Client.BuildsApi();
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

  describe('BuildsApi', function() {
    describe('buildsCreate', function() {
      it('should call buildsCreate successfully', function(done) {
        //uncomment below and update the code to test buildsCreate
        //instance.buildsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buildsDelete', function() {
      it('should call buildsDelete successfully', function(done) {
        //uncomment below and update the code to test buildsDelete
        //instance.buildsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buildsList', function() {
      it('should call buildsList successfully', function(done) {
        //uncomment below and update the code to test buildsList
        //instance.buildsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buildsPartialUpdate', function() {
      it('should call buildsPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test buildsPartialUpdate
        //instance.buildsPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buildsRead', function() {
      it('should call buildsRead successfully', function(done) {
        //uncomment below and update the code to test buildsRead
        //instance.buildsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buildsUpdate', function() {
      it('should call buildsUpdate successfully', function(done) {
        //uncomment below and update the code to test buildsUpdate
        //instance.buildsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));