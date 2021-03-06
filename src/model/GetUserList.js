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
    root.PortalApi.GetUserList = factory(root.PortalApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetUserList model module.
   * @module model/GetUserList
   * @version v1
   */

  /**
   * Constructs a new <code>GetUserList</code>.
   * @alias module:model/GetUserList
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>GetUserList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetUserList} obj Optional instance to populate.
   * @return {module:model/GetUserList} The populated <code>GetUserList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username_status')) {
        obj['username_status'] = ApiClient.convertToType(data['username_status'], 'String');
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
      if (data.hasOwnProperty('department_slug')) {
        obj['department_slug'] = ApiClient.convertToType(data['department_slug'], 'String');
      }
      if (data.hasOwnProperty('person_enabled')) {
        obj['person_enabled'] = ApiClient.convertToType(data['person_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('last_name')) {
        obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
      }
      if (data.hasOwnProperty('first_name')) {
        obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
      }
      if (data.hasOwnProperty('ifxid')) {
        obj['ifxid'] = ApiClient.convertToType(data['ifxid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} username_status
   */
  exports.prototype['username_status'] = undefined;
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
   * @member {String} department_slug
   */
  exports.prototype['department_slug'] = undefined;
  /**
   * @member {Boolean} person_enabled
   */
  exports.prototype['person_enabled'] = undefined;
  /**
   * @member {String} last_name
   */
  exports.prototype['last_name'] = undefined;
  /**
   * @member {String} first_name
   */
  exports.prototype['first_name'] = undefined;
  /**
   * @member {String} ifxid
   */
  exports.prototype['ifxid'] = undefined;



  return exports;
}));


