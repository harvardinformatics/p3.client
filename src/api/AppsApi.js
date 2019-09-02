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
    define(['ApiClient', 'model/App'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/App'));
  } else {
    // Browser globals (root is window)
    if (!root.P3Client) {
      root.P3Client = {};
    }
    root.P3Client.AppsApi = factory(root.P3Client.ApiClient, root.P3Client.App);
  }
}(this, function(ApiClient, App) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version v1
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * ViewSet for Apps
     * @param {module:model/App} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/App} and HTTP response
     */
    this.appsCreateWithHttpInfo = function(data) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling appsCreate");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = App;

      return this.apiClient.callApi(
        '/apps/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ViewSet for Apps
     * @param {module:model/App} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/App}
     */
    this.appsCreate = function(data) {
      return this.appsCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.appsDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling appsDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
        '/apps/{id}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.appsDelete = function(id) {
      return this.appsDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ViewSet for Apps
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/App>} and HTTP response
     */
    this.appsListWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [App];

      return this.apiClient.callApi(
        '/apps/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ViewSet for Apps
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/App>}
     */
    this.appsList = function() {
      return this.appsListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @param {module:model/App} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/App} and HTTP response
     */
    this.appsPartialUpdateWithHttpInfo = function(id, data) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling appsPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling appsPartialUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = App;

      return this.apiClient.callApi(
        '/apps/{id}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @param {module:model/App} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/App}
     */
    this.appsPartialUpdate = function(id, data) {
      return this.appsPartialUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/App} and HTTP response
     */
    this.appsReadWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling appsRead");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = App;

      return this.apiClient.callApi(
        '/apps/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/App}
     */
    this.appsRead = function(id) {
      return this.appsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @param {module:model/App} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/App} and HTTP response
     */
    this.appsUpdateWithHttpInfo = function(id, data) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling appsUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling appsUpdate");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = App;

      return this.apiClient.callApi(
        '/apps/{id}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * ViewSet for Apps
     * @param {Number} id A unique integer value identifying this app.
     * @param {module:model/App} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/App}
     */
    this.appsUpdate = function(id, data) {
      return this.appsUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));