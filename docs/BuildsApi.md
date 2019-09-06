# PortalApi.BuildsApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildsCreate**](BuildsApi.md#buildsCreate) | **POST** /builds/ | 
[**buildsDelete**](BuildsApi.md#buildsDelete) | **DELETE** /builds/{id}/ | 
[**buildsList**](BuildsApi.md#buildsList) | **GET** /builds/ | 
[**buildsPartialUpdate**](BuildsApi.md#buildsPartialUpdate) | **PATCH** /builds/{id}/ | 
[**buildsRead**](BuildsApi.md#buildsRead) | **GET** /builds/{id}/ | 
[**buildsUpdate**](BuildsApi.md#buildsUpdate) | **PUT** /builds/{id}/ | 


<a name="buildsCreate"></a>
# **buildsCreate**
> Build buildsCreate(data)



ViewSet for Builds

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildsApi();

var data = new PortalApi.Build(); // Build | 

apiInstance.buildsCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Build**](Build.md)|  | 

### Return type

[**Build**](Build.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildsDelete"></a>
# **buildsDelete**
> buildsDelete(id, )



ViewSet for Builds

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildsApi();

var id = 56; // Number | A unique integer value identifying this build.

apiInstance.buildsDelete(id, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build. | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildsList"></a>
# **buildsList**
> InlineResponse2002 buildsList(opts)



ViewSet for Builds

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildsApi();

var opts = { 
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.buildsList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildsPartialUpdate"></a>
# **buildsPartialUpdate**
> Build buildsPartialUpdate(id, data)



ViewSet for Builds

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildsApi();

var id = 56; // Number | A unique integer value identifying this build.

var data = new PortalApi.Build(); // Build | 

apiInstance.buildsPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build. | 
 **data** | [**Build**](Build.md)|  | 

### Return type

[**Build**](Build.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildsRead"></a>
# **buildsRead**
> Build buildsRead(id, )



ViewSet for Builds

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildsApi();

var id = 56; // Number | A unique integer value identifying this build.

apiInstance.buildsRead(id, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build. | 

### Return type

[**Build**](Build.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildsUpdate"></a>
# **buildsUpdate**
> Build buildsUpdate(id, data)



ViewSet for Builds

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildsApi();

var id = 56; // Number | A unique integer value identifying this build.

var data = new PortalApi.Build(); // Build | 

apiInstance.buildsUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build. | 
 **data** | [**Build**](Build.md)|  | 

### Return type

[**Build**](Build.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

