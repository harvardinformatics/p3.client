# PortalApi.OfficeHoursSignInsApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**officeHoursSignInsCreate**](OfficeHoursSignInsApi.md#officeHoursSignInsCreate) | **POST** /office-hours-sign-ins/ | 
[**officeHoursSignInsDelete**](OfficeHoursSignInsApi.md#officeHoursSignInsDelete) | **DELETE** /office-hours-sign-ins/{id}/ | 
[**officeHoursSignInsList**](OfficeHoursSignInsApi.md#officeHoursSignInsList) | **GET** /office-hours-sign-ins/ | 
[**officeHoursSignInsPartialUpdate**](OfficeHoursSignInsApi.md#officeHoursSignInsPartialUpdate) | **PATCH** /office-hours-sign-ins/{id}/ | 
[**officeHoursSignInsRead**](OfficeHoursSignInsApi.md#officeHoursSignInsRead) | **GET** /office-hours-sign-ins/{id}/ | 
[**officeHoursSignInsUpdate**](OfficeHoursSignInsApi.md#officeHoursSignInsUpdate) | **PUT** /office-hours-sign-ins/{id}/ | 


<a name="officeHoursSignInsCreate"></a>
# **officeHoursSignInsCreate**
> OfficeHoursSignIn officeHoursSignInsCreate(data)



ViewSet for OfficeHoursSignIn

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.OfficeHoursSignInsApi();

var data = new PortalApi.OfficeHoursSignIn(); // OfficeHoursSignIn | 

apiInstance.officeHoursSignInsCreate(data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**OfficeHoursSignIn**](OfficeHoursSignIn.md)|  | 

### Return type

[**OfficeHoursSignIn**](OfficeHoursSignIn.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="officeHoursSignInsDelete"></a>
# **officeHoursSignInsDelete**
> officeHoursSignInsDelete(id, )



ViewSet for OfficeHoursSignIn

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.OfficeHoursSignInsApi();

var id = 56; // Number | A unique integer value identifying this office hours sign in.

apiInstance.officeHoursSignInsDelete(id, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this office hours sign in. | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="officeHoursSignInsList"></a>
# **officeHoursSignInsList**
> InlineResponse2004 officeHoursSignInsList(opts)



ViewSet for OfficeHoursSignIn

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.OfficeHoursSignInsApi();

var opts = { 
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.officeHoursSignInsList(opts).then(function(data) {
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

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="officeHoursSignInsPartialUpdate"></a>
# **officeHoursSignInsPartialUpdate**
> OfficeHoursSignIn officeHoursSignInsPartialUpdate(id, data)



ViewSet for OfficeHoursSignIn

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.OfficeHoursSignInsApi();

var id = 56; // Number | A unique integer value identifying this office hours sign in.

var data = new PortalApi.OfficeHoursSignIn(); // OfficeHoursSignIn | 

apiInstance.officeHoursSignInsPartialUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this office hours sign in. | 
 **data** | [**OfficeHoursSignIn**](OfficeHoursSignIn.md)|  | 

### Return type

[**OfficeHoursSignIn**](OfficeHoursSignIn.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="officeHoursSignInsRead"></a>
# **officeHoursSignInsRead**
> OfficeHoursSignIn officeHoursSignInsRead(id, )



ViewSet for OfficeHoursSignIn

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.OfficeHoursSignInsApi();

var id = 56; // Number | A unique integer value identifying this office hours sign in.

apiInstance.officeHoursSignInsRead(id, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this office hours sign in. | 

### Return type

[**OfficeHoursSignIn**](OfficeHoursSignIn.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="officeHoursSignInsUpdate"></a>
# **officeHoursSignInsUpdate**
> OfficeHoursSignIn officeHoursSignInsUpdate(id, data)



ViewSet for OfficeHoursSignIn

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.OfficeHoursSignInsApi();

var id = 56; // Number | A unique integer value identifying this office hours sign in.

var data = new PortalApi.OfficeHoursSignIn(); // OfficeHoursSignIn | 

apiInstance.officeHoursSignInsUpdate(id, data).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this office hours sign in. | 
 **data** | [**OfficeHoursSignIn**](OfficeHoursSignIn.md)|  | 

### Return type

[**OfficeHoursSignIn**](OfficeHoursSignIn.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

