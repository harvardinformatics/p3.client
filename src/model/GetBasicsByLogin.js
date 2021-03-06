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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PortalApi) {
      root.PortalApi = {};
    }
    root.PortalApi.GetBasicsByLogin = factory(root.PortalApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetBasicsByLogin model module.
   * @module model/GetBasicsByLogin
   * @version v1
   */

  /**
   * Constructs a new <code>GetBasicsByLogin</code>.
   * @alias module:model/GetBasicsByLogin
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>GetBasicsByLogin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBasicsByLogin} obj Optional instance to populate.
   * @return {module:model/GetBasicsByLogin} The populated <code>GetBasicsByLogin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('full_name')) {
        obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
      }
      if (data.hasOwnProperty('primary_email')) {
        obj['primary_email'] = ApiClient.convertToType(data['primary_email'], 'String');
      }
      if (data.hasOwnProperty('lab_name')) {
        obj['lab_name'] = ApiClient.convertToType(data['lab_name'], 'String');
      }
      if (data.hasOwnProperty('pi_full_name')) {
        obj['pi_full_name'] = ApiClient.convertToType(data['pi_full_name'], 'String');
      }
      if (data.hasOwnProperty('department_name')) {
        obj['department_name'] = ApiClient.convertToType(data['department_name'], 'String');
      }
      if (data.hasOwnProperty('department_code')) {
        obj['department_code'] = ApiClient.convertToType(data['department_code'], 'String');
      }
      if (data.hasOwnProperty('department_id')) {
        obj['department_id'] = ApiClient.convertToType(data['department_id'], 'String');
      }
      if (data.hasOwnProperty('department_slug')) {
        obj['department_slug'] = ApiClient.convertToType(data['department_slug'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * @member {String} full_name
   */
  exports.prototype['full_name'] = undefined;
  /**
   * @member {String} primary_email
   */
  exports.prototype['primary_email'] = undefined;
  /**
   * @member {String} lab_name
   */
  exports.prototype['lab_name'] = undefined;
  /**
   * @member {String} pi_full_name
   */
  exports.prototype['pi_full_name'] = undefined;
  /**
   * @member {String} department_name
   */
  exports.prototype['department_name'] = undefined;
  /**
   * @member {String} department_code
   */
  exports.prototype['department_code'] = undefined;
  /**
   * @member {String} department_id
   */
  exports.prototype['department_id'] = undefined;
  /**
   * @member {String} department_slug
   */
  exports.prototype['department_slug'] = undefined;



  return exports;
}));


