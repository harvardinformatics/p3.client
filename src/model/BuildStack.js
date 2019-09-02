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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.P3Client) {
      root.P3Client = {};
    }
    root.P3Client.BuildStack = factory(root.P3Client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuildStack model module.
   * @module model/BuildStack
   * @version v1
   */

  /**
   * Constructs a new <code>BuildStack</code>.
   * @alias module:model/BuildStack
   * @class
   * @param name {String} 
   * @param os {String} 
   * @param osVersion {String} 
   * @param buildTooling {String} 
   */
  var exports = function(name, os, osVersion, buildTooling) {
    var _this = this;

    _this['name'] = name;
    _this['os'] = os;
    _this['os_version'] = osVersion;
    _this['build_tooling'] = buildTooling;

  };

  /**
   * Constructs a <code>BuildStack</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuildStack} obj Optional instance to populate.
   * @return {module:model/BuildStack} The populated <code>BuildStack</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('os')) {
        obj['os'] = ApiClient.convertToType(data['os'], 'String');
      }
      if (data.hasOwnProperty('os_version')) {
        obj['os_version'] = ApiClient.convertToType(data['os_version'], 'String');
      }
      if (data.hasOwnProperty('build_tooling')) {
        obj['build_tooling'] = ApiClient.convertToType(data['build_tooling'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} os
   */
  exports.prototype['os'] = undefined;
  /**
   * @member {String} os_version
   */
  exports.prototype['os_version'] = undefined;
  /**
   * @member {String} build_tooling
   */
  exports.prototype['build_tooling'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


