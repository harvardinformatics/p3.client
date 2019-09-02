# P3Client.AppTagsApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appTagsCreate**](AppTagsApi.md#appTagsCreate) | **POST** /app-tags/ | 
[**appTagsDelete**](AppTagsApi.md#appTagsDelete) | **DELETE** /app-tags/{id}/ | 
[**appTagsList**](AppTagsApi.md#appTagsList) | **GET** /app-tags/ | 
[**appTagsPartialUpdate**](AppTagsApi.md#appTagsPartialUpdate) | **PATCH** /app-tags/{id}/ | 
[**appTagsRead**](AppTagsApi.md#appTagsRead) | **GET** /app-tags/{id}/ | 
[**appTagsUpdate**](AppTagsApi.md#appTagsUpdate) | **PUT** /app-tags/{id}/ | 


<a name="appTagsCreate"></a>
# **appTagsCreate**
> AppTag appTagsCreate(data)



ViewSet for AppTags

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppTagsApi();

var data = new P3Client.AppTag(); // AppTag | 

apiInstance.appTagsCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**AppTag**](AppTag.md)|  | 

### Return type

[**AppTag**](AppTag.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appTagsDelete"></a>
# **appTagsDelete**
> appTagsDelete(id, )



ViewSet for AppTags

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppTagsApi();

var id = 56; // Number | A unique integer value identifying this app tag.

apiInstance.appTagsDelete(id, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app tag. | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appTagsList"></a>
# **appTagsList**
> [AppTag] appTagsList()



ViewSet for AppTags

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppTagsApi();
apiInstance.appTagsList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AppTag]**](AppTag.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appTagsPartialUpdate"></a>
# **appTagsPartialUpdate**
> AppTag appTagsPartialUpdate(id, data)



ViewSet for AppTags

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppTagsApi();

var id = 56; // Number | A unique integer value identifying this app tag.

var data = new P3Client.AppTag(); // AppTag | 

apiInstance.appTagsPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app tag. | 
 **data** | [**AppTag**](AppTag.md)|  | 

### Return type

[**AppTag**](AppTag.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appTagsRead"></a>
# **appTagsRead**
> AppTag appTagsRead(id, )



ViewSet for AppTags

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppTagsApi();

var id = 56; // Number | A unique integer value identifying this app tag.

apiInstance.appTagsRead(id, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app tag. | 

### Return type

[**AppTag**](AppTag.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appTagsUpdate"></a>
# **appTagsUpdate**
> AppTag appTagsUpdate(id, data)



ViewSet for AppTags

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppTagsApi();

var id = 56; // Number | A unique integer value identifying this app tag.

var data = new P3Client.AppTag(); // AppTag | 

apiInstance.appTagsUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app tag. | 
 **data** | [**AppTag**](AppTag.md)|  | 

### Return type

[**AppTag**](AppTag.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
