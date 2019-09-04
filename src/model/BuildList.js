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
    root.PortalApi.BuildList = factory(root.PortalApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuildList model module.
   * @module model/BuildList
   * @version v1
   */

  /**
   * Constructs a new <code>BuildList</code>.
   * @alias module:model/BuildList
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>BuildList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuildList} obj Optional instance to populate.
   * @return {module:model/BuildList} The populated <code>BuildList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('app_name')) {
        obj['app_name'] = ApiClient.convertToType(data['app_name'], 'String');
      }
      if (data.hasOwnProperty('app_description')) {
        obj['app_description'] = ApiClient.convertToType(data['app_description'], 'String');
      }
      if (data.hasOwnProperty('build_stack_name')) {
        obj['build_stack_name'] = ApiClient.convertToType(data['build_stack_name'], 'String');
      }
      if (data.hasOwnProperty('build_name')) {
        obj['build_name'] = ApiClient.convertToType(data['build_name'], 'String');
      }
      if (data.hasOwnProperty('build_activation')) {
        obj['build_activation'] = ApiClient.convertToType(data['build_activation'], 'String');
      }
      if (data.hasOwnProperty('build_comments')) {
        obj['build_comments'] = ApiClient.convertToType(data['build_comments'], 'String');
      }
      if (data.hasOwnProperty('dependency_name')) {
        obj['dependency_name'] = ApiClient.convertToType(data['dependency_name'], 'String');
      }
      if (data.hasOwnProperty('dependency_phase')) {
        obj['dependency_phase'] = ApiClient.convertToType(data['dependency_phase'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} app_name
   */
  exports.prototype['app_name'] = undefined;
  /**
   * @member {String} app_description
   */
  exports.prototype['app_description'] = undefined;
  /**
   * @member {String} build_stack_name
   */
  exports.prototype['build_stack_name'] = undefined;
  /**
   * @member {String} build_name
   */
  exports.prototype['build_name'] = undefined;
  /**
   * @member {String} build_activation
   */
  exports.prototype['build_activation'] = undefined;
  /**
   * @member {String} build_comments
   */
  exports.prototype['build_comments'] = undefined;
  /**
   * @member {String} dependency_name
   */
  exports.prototype['dependency_name'] = undefined;
  /**
   * @member {String} dependency_phase
   */
  exports.prototype['dependency_phase'] = undefined;



  return exports;
}));


