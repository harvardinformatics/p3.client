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
    root.PortalApi.BuildReports = factory(root.PortalApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuildReports model module.
   * @module model/BuildReports
   * @version v1
   */

  /**
   * Constructs a new <code>BuildReports</code>.
   * @alias module:model/BuildReports
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>BuildReports</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuildReports} obj Optional instance to populate.
   * @return {module:model/BuildReports} The populated <code>BuildReports</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], 'String');
      }
      if (data.hasOwnProperty('activation')) {
        obj['activation'] = ApiClient.convertToType(data['activation'], 'String');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
      }
      if (data.hasOwnProperty('build_order')) {
        obj['build_order'] = ApiClient.convertToType(data['build_order'], 'Number');
      }
      if (data.hasOwnProperty('is_latest')) {
        obj['is_latest'] = ApiClient.convertToType(data['is_latest'], 'Boolean');
      }
      if (data.hasOwnProperty('app_id')) {
        obj['app_id'] = ApiClient.convertToType(data['app_id'], 'Number');
      }
      if (data.hasOwnProperty('app_name')) {
        obj['app_name'] = ApiClient.convertToType(data['app_name'], 'String');
      }
      if (data.hasOwnProperty('app_url')) {
        obj['app_url'] = ApiClient.convertToType(data['app_url'], 'String');
      }
      if (data.hasOwnProperty('build_stack')) {
        obj['build_stack'] = ApiClient.convertToType(data['build_stack'], 'String');
      }
      if (data.hasOwnProperty('build_stack_rank')) {
        obj['build_stack_rank'] = ApiClient.convertToType(data['build_stack_rank'], 'Number');
      }
      if (data.hasOwnProperty('build_stack_activation')) {
        obj['build_stack_activation'] = ApiClient.convertToType(data['build_stack_activation'], 'String');
      }
      if (data.hasOwnProperty('build_dependencies')) {
        obj['build_dependencies'] = ApiClient.convertToType(data['build_dependencies'], ['String']);
      }
      if (data.hasOwnProperty('run_dependencies')) {
        obj['run_dependencies'] = ApiClient.convertToType(data['run_dependencies'], ['String']);
      }
      if (data.hasOwnProperty('build_date')) {
        obj['build_date'] = ApiClient.convertToType(data['build_date'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('preferred_build')) {
        obj['preferred_build'] = ApiClient.convertToType(data['preferred_build'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {String} details
   */
  exports.prototype['details'] = undefined;
  /**
   * @member {String} activation
   */
  exports.prototype['activation'] = undefined;
  /**
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {Number} build_order
   */
  exports.prototype['build_order'] = undefined;
  /**
   * @member {Boolean} is_latest
   */
  exports.prototype['is_latest'] = undefined;
  /**
   * @member {Number} app_id
   */
  exports.prototype['app_id'] = undefined;
  /**
   * @member {String} app_name
   */
  exports.prototype['app_name'] = undefined;
  /**
   * @member {String} app_url
   */
  exports.prototype['app_url'] = undefined;
  /**
   * @member {String} build_stack
   */
  exports.prototype['build_stack'] = undefined;
  /**
   * @member {Number} build_stack_rank
   */
  exports.prototype['build_stack_rank'] = undefined;
  /**
   * @member {String} build_stack_activation
   */
  exports.prototype['build_stack_activation'] = undefined;
  /**
   * @member {Array.<String>} build_dependencies
   */
  exports.prototype['build_dependencies'] = undefined;
  /**
   * @member {Array.<String>} run_dependencies
   */
  exports.prototype['run_dependencies'] = undefined;
  /**
   * @member {String} build_date
   */
  exports.prototype['build_date'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} preferred_build
   */
  exports.prototype['preferred_build'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


