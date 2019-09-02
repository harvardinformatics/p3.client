# P3Client.AppsApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsCreate**](AppsApi.md#appsCreate) | **POST** /apps/ | 
[**appsDelete**](AppsApi.md#appsDelete) | **DELETE** /apps/{id}/ | 
[**appsList**](AppsApi.md#appsList) | **GET** /apps/ | 
[**appsPartialUpdate**](AppsApi.md#appsPartialUpdate) | **PATCH** /apps/{id}/ | 
[**appsRead**](AppsApi.md#appsRead) | **GET** /apps/{id}/ | 
[**appsUpdate**](AppsApi.md#appsUpdate) | **PUT** /apps/{id}/ | 


<a name="appsCreate"></a>
# **appsCreate**
> App appsCreate(data)



ViewSet for Apps

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppsApi();

var data = new P3Client.App(); // App | 

apiInstance.appsCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**App**](App.md)|  | 

### Return type

[**App**](App.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsDelete"></a>
# **appsDelete**
> appsDelete(id, )



ViewSet for Apps

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppsApi();

var id = 56; // Number | A unique integer value identifying this app.

apiInstance.appsDelete(id, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app. | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsList"></a>
# **appsList**
> [App] appsList()



ViewSet for Apps

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppsApi();
apiInstance.appsList().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[App]**](App.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsPartialUpdate"></a>
# **appsPartialUpdate**
> App appsPartialUpdate(id, data)



ViewSet for Apps

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppsApi();

var id = 56; // Number | A unique integer value identifying this app.

var data = new P3Client.App(); // App | 

apiInstance.appsPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app. | 
 **data** | [**App**](App.md)|  | 

### Return type

[**App**](App.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsRead"></a>
# **appsRead**
> App appsRead(id, )



ViewSet for Apps

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppsApi();

var id = 56; // Number | A unique integer value identifying this app.

apiInstance.appsRead(id, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app. | 

### Return type

[**App**](App.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsUpdate"></a>
# **appsUpdate**
> App appsUpdate(id, data)



ViewSet for Apps

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.AppsApi();

var id = 56; // Number | A unique integer value identifying this app.

var data = new P3Client.App(); // App | 

apiInstance.appsUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this app. | 
 **data** | [**App**](App.md)|  | 

### Return type

[**App**](App.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

