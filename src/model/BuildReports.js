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
    define(['ApiClient', 'model/BuildReportText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BuildReportText'));
  } else {
    // Browser globals (root is window)
    if (!root.PortalApi) {
      root.PortalApi = {};
    }
    root.PortalApi.BuildReports = factory(root.PortalApi.ApiClient, root.PortalApi.BuildReportText);
  }
}(this, function(ApiClient, BuildReportText) {
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
   * @param reportText {module:model/BuildReportText} 
   */
  var exports = function(reportText) {
    var _this = this;


    _this['report_text'] = reportText;

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

      if (data.hasOwnProperty('app_name')) {
        obj['app_name'] = ApiClient.convertToType(data['app_name'], 'String');
      }
      if (data.hasOwnProperty('report_text')) {
        obj['report_text'] = BuildReportText.constructFromObject(data['report_text']);
      }
      if (data.hasOwnProperty('deployment_tooling')) {
        obj['deployment_tooling'] = ApiClient.convertToType(data['deployment_tooling'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} app_name
   */
  exports.prototype['app_name'] = undefined;
  /**
   * @member {module:model/BuildReportText} report_text
   */
  exports.prototype['report_text'] = undefined;
  /**
   * @member {String} deployment_tooling
   */
  exports.prototype['deployment_tooling'] = undefined;



  return exports;
}));

