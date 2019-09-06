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
    define(['ApiClient', 'model/Build'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Build'));
  } else {
    // Browser globals (root is window)
    if (!root.PortalApi) {
      root.PortalApi = {};
    }
    root.PortalApi.InlineResponse2002 = factory(root.PortalApi.ApiClient, root.PortalApi.Build);
  }
}(this, function(ApiClient, Build) {
  'use strict';




  /**
   * The InlineResponse2002 model module.
   * @module model/InlineResponse2002
   * @version v1
   */

  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   * @param count {Number} 
   * @param results {Array.<module:model/Build>} 
   */
  var exports = function(count, results) {
    var _this = this;

    _this['count'] = count;


    _this['results'] = results;
  };

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [Build]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;
  /**
   * @member {Array.<module:model/Build>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


