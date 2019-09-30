# PortalApi.BuildStacksApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildStacksCreate**](BuildStacksApi.md#buildStacksCreate) | **POST** /build-stacks/ | 
[**buildStacksDelete**](BuildStacksApi.md#buildStacksDelete) | **DELETE** /build-stacks/{id}/ | 
[**buildStacksList**](BuildStacksApi.md#buildStacksList) | **GET** /build-stacks/ | 
[**buildStacksPartialUpdate**](BuildStacksApi.md#buildStacksPartialUpdate) | **PATCH** /build-stacks/{id}/ | 
[**buildStacksRead**](BuildStacksApi.md#buildStacksRead) | **GET** /build-stacks/{id}/ | 
[**buildStacksUpdate**](BuildStacksApi.md#buildStacksUpdate) | **PUT** /build-stacks/{id}/ | 


<a name="buildStacksCreate"></a>
# **buildStacksCreate**
> BuildStack buildStacksCreate(data)



ViewSet for BuildStacks

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildStacksApi();

var data = new PortalApi.BuildStack(); // BuildStack | 

apiInstance.buildStacksCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**BuildStack**](BuildStack.md)|  | 

### Return type

[**BuildStack**](BuildStack.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildStacksDelete"></a>
# **buildStacksDelete**
> buildStacksDelete(id, )



ViewSet for BuildStacks

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildStacksApi();

var id = 56; // Number | A unique integer value identifying this build stack.

apiInstance.buildStacksDelete(id, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build stack. | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildStacksList"></a>
# **buildStacksList**
> [BuildStack] buildStacksList()



Just for swagger

### Example
```javascript
var PortalApi = require('portal_api');

var apiInstance = new PortalApi.BuildStacksApi();
apiInstance.buildStacksList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BuildStack]**](BuildStack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildStacksPartialUpdate"></a>
# **buildStacksPartialUpdate**
> BuildStack buildStacksPartialUpdate(id, data)



ViewSet for BuildStacks

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildStacksApi();

var id = 56; // Number | A unique integer value identifying this build stack.

var data = new PortalApi.BuildStack(); // BuildStack | 

apiInstance.buildStacksPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build stack. | 
 **data** | [**BuildStack**](BuildStack.md)|  | 

### Return type

[**BuildStack**](BuildStack.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildStacksRead"></a>
# **buildStacksRead**
> BuildStack buildStacksRead(id, )



Just for swagger

### Example
```javascript
var PortalApi = require('portal_api');

var apiInstance = new PortalApi.BuildStacksApi();

var id = 56; // Number | A unique integer value identifying this build stack.

apiInstance.buildStacksRead(id, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build stack. | 

### Return type

[**BuildStack**](BuildStack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildStacksUpdate"></a>
# **buildStacksUpdate**
> BuildStack buildStacksUpdate(id, data)



ViewSet for BuildStacks

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.BuildStacksApi();

var id = 56; // Number | A unique integer value identifying this build stack.

var data = new PortalApi.BuildStack(); // BuildStack | 

apiInstance.buildStacksUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this build stack. | 
 **data** | [**BuildStack**](BuildStack.md)|  | 

### Return type

[**BuildStack**](BuildStack.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

