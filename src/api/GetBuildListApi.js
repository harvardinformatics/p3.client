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
    define(['ApiClient', 'model/BuildList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BuildList'));
  } else {
    // Browser globals (root is window)
    if (!root.PortalApi) {
      root.PortalApi = {};
    }
    root.PortalApi.GetBuildListApi = factory(root.PortalApi.ApiClient, root.PortalApi.BuildList);
  }
}(this, function(ApiClient, BuildList) {
  'use strict';

  /**
   * GetBuildList service.
   * @module api/GetBuildListApi
   * @version v1
   */

  /**
   * Constructs a new GetBuildListApi. 
   * @alias module:api/GetBuildListApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieve build data for list display
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @param {String} opts.buildStacks Comma-separated list of build stack names (e.g. HeLmod CentOS 7)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BuildList>} and HTTP response
     */
    this.getBuildListListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'build_stacks': opts['buildStacks'],
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
      var returnType = [BuildList];

      return this.apiClient.callApi(
        '/get-build-list/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve build data for list display
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @param {String} opts.buildStacks Comma-separated list of build stack names (e.g. HeLmod CentOS 7)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BuildList>}
     */
    this.getBuildListList = function(opts) {
      return this.getBuildListListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
