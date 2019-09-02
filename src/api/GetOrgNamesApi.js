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
    root.P3Client.GetOrgNamesApi = factory(root.P3Client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * GetOrgNames service.
   * @module api/GetOrgNamesApi
   * @version v1
   */

  /**
   * Constructs a new GetOrgNamesApi. 
   * @alias module:api/GetOrgNamesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Return org names for autocomplete list.  Department names are followed by Schools, Museums, Institutes, and Centers
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getOrgNamesListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/get-org-names/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Return org names for autocomplete list.  Department names are followed by Schools, Museums, Institutes, and Centers
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getOrgNamesList = function(opts) {
      return this.getOrgNamesListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
