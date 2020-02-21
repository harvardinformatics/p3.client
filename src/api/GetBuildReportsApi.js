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
    define(['ApiClient', 'model/BuildReports'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BuildReports'));
  } else {
    // Browser globals (root is window)
    if (!root.PortalApi) {
      root.PortalApi = {};
    }
    root.PortalApi.GetBuildReportsApi = factory(root.PortalApi.ApiClient, root.PortalApi.BuildReports);
  }
}(this, function(ApiClient, BuildReports) {
  'use strict';

  /**
   * GetBuildReports service.
   * @module api/GetBuildReportsApi
   * @version v1
   */

  /**
   * Constructs a new GetBuildReportsApi. 
   * @alias module:api/GetBuildReportsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieve build reports for list display
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.buildName 
     * @param {String} opts.appName 
     * @param {String} opts.buildStacks Comma-separated list of build stack names (e.g. HeLmod CentOS 7)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BuildReports>} and HTTP response
     */
    this.getBuildReportsListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'build_name': opts['buildName'],
        'app_name': opts['appName'],
        'build_stacks': opts['buildStacks'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [BuildReports];

      return this.apiClient.callApi(
        '/get-build-reports/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve build reports for list display
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @param {Number} opts.limit 
     * @param {Number} opts.offset 
     * @param {String} opts.buildName 
     * @param {String} opts.appName 
     * @param {String} opts.buildStacks Comma-separated list of build stack names (e.g. HeLmod CentOS 7)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BuildReports>}
     */
    this.getBuildReportsList = function(opts) {
      return this.getBuildReportsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
