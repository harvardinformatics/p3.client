# P3Client.BuildsApi

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
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.BuildsApi();

var data = new P3Client.Build(); // Build | 

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
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.BuildsApi();

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
> [Build] buildsList()



ViewSet for Builds

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.BuildsApi();
apiInstance.buildsList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Build]**](Build.md)

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
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.BuildsApi();

var id = 56; // Number | A unique integer value identifying this build.

var data = new P3Client.Build(); // Build | 

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
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.BuildsApi();

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
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.BuildsApi();

var id = 56; // Number | A unique integer value identifying this build.

var data = new P3Client.Build(); // Build | 

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
