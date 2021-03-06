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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/App', 'model/AppTag', 'model/Build', 'model/BuildList', 'model/BuildReports', 'model/BuildStack', 'model/GetBasicsByLogin', 'model/GetOrgNames', 'model/GetPiNames', 'model/GetUserList', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/OfficeHoursSignIn', 'api/AppTagsApi', 'api/AppsApi', 'api/BuildStacksApi', 'api/BuildsApi', 'api/GetBasicsByLoginApi', 'api/GetBuildListApi', 'api/GetBuildReportsApi', 'api/GetOrgNamesApi', 'api/GetPiNamesApi', 'api/GetUserListApi', 'api/OfficeHoursSignInsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/App'), require('./model/AppTag'), require('./model/Build'), require('./model/BuildList'), require('./model/BuildReports'), require('./model/BuildStack'), require('./model/GetBasicsByLogin'), require('./model/GetOrgNames'), require('./model/GetPiNames'), require('./model/GetUserList'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/OfficeHoursSignIn'), require('./api/AppTagsApi'), require('./api/AppsApi'), require('./api/BuildStacksApi'), require('./api/BuildsApi'), require('./api/GetBasicsByLoginApi'), require('./api/GetBuildListApi'), require('./api/GetBuildReportsApi'), require('./api/GetOrgNamesApi'), require('./api/GetPiNamesApi'), require('./api/GetUserListApi'), require('./api/OfficeHoursSignInsApi'));
  }
}(function(ApiClient, App, AppTag, Build, BuildList, BuildReports, BuildStack, GetBasicsByLogin, GetOrgNames, GetPiNames, GetUserList, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, OfficeHoursSignIn, AppTagsApi, AppsApi, BuildStacksApi, BuildsApi, GetBasicsByLoginApi, GetBuildListApi, GetBuildReportsApi, GetOrgNamesApi, GetPiNamesApi, GetUserListApi, OfficeHoursSignInsApi) {
  'use strict';

  /**
   * RC_Portal.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PortalApi = require('index'); // See note below*.
   * var xxxSvc = new PortalApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PortalApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PortalApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PortalApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The App model constructor.
     * @property {module:model/App}
     */
    App: App,
    /**
     * The AppTag model constructor.
     * @property {module:model/AppTag}
     */
    AppTag: AppTag,
    /**
     * The Build model constructor.
     * @property {module:model/Build}
     */
    Build: Build,
    /**
     * The BuildList model constructor.
     * @property {module:model/BuildList}
     */
    BuildList: BuildList,
    /**
     * The BuildReports model constructor.
     * @property {module:model/BuildReports}
     */
    BuildReports: BuildReports,
    /**
     * The BuildStack model constructor.
     * @property {module:model/BuildStack}
     */
    BuildStack: BuildStack,
    /**
     * The GetBasicsByLogin model constructor.
     * @property {module:model/GetBasicsByLogin}
     */
    GetBasicsByLogin: GetBasicsByLogin,
    /**
     * The GetOrgNames model constructor.
     * @property {module:model/GetOrgNames}
     */
    GetOrgNames: GetOrgNames,
    /**
     * The GetPiNames model constructor.
     * @property {module:model/GetPiNames}
     */
    GetPiNames: GetPiNames,
    /**
     * The GetUserList model constructor.
     * @property {module:model/GetUserList}
     */
    GetUserList: GetUserList,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The OfficeHoursSignIn model constructor.
     * @property {module:model/OfficeHoursSignIn}
     */
    OfficeHoursSignIn: OfficeHoursSignIn,
    /**
     * The AppTagsApi service constructor.
     * @property {module:api/AppTagsApi}
     */
    AppTagsApi: AppTagsApi,
    /**
     * The AppsApi service constructor.
     * @property {module:api/AppsApi}
     */
    AppsApi: AppsApi,
    /**
     * The BuildStacksApi service constructor.
     * @property {module:api/BuildStacksApi}
     */
    BuildStacksApi: BuildStacksApi,
    /**
     * The BuildsApi service constructor.
     * @property {module:api/BuildsApi}
     */
    BuildsApi: BuildsApi,
    /**
     * The GetBasicsByLoginApi service constructor.
     * @property {module:api/GetBasicsByLoginApi}
     */
    GetBasicsByLoginApi: GetBasicsByLoginApi,
    /**
     * The GetBuildListApi service constructor.
     * @property {module:api/GetBuildListApi}
     */
    GetBuildListApi: GetBuildListApi,
    /**
     * The GetBuildReportsApi service constructor.
     * @property {module:api/GetBuildReportsApi}
     */
    GetBuildReportsApi: GetBuildReportsApi,
    /**
     * The GetOrgNamesApi service constructor.
     * @property {module:api/GetOrgNamesApi}
     */
    GetOrgNamesApi: GetOrgNamesApi,
    /**
     * The GetPiNamesApi service constructor.
     * @property {module:api/GetPiNamesApi}
     */
    GetPiNamesApi: GetPiNamesApi,
    /**
     * The GetUserListApi service constructor.
     * @property {module:api/GetUserListApi}
     */
    GetUserListApi: GetUserListApi,
    /**
     * The OfficeHoursSignInsApi service constructor.
     * @property {module:api/OfficeHoursSignInsApi}
     */
    OfficeHoursSignInsApi: OfficeHoursSignInsApi
  };

  return exports;
}));
