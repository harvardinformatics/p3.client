# PortalApi.GetBasicsByLoginApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBasicsByLoginList**](GetBasicsByLoginApi.md#getBasicsByLoginList) | **GET** /get-basics-by-login/ | 


<a name="getBasicsByLoginList"></a>
# **getBasicsByLoginList**
> [GetBasicsByLogin] getBasicsByLoginList(opts)



Return basic information (user full name, pi name, department, email ) given all or part of a login

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.GetBasicsByLoginApi();

var opts = { 
  'login': "login_example" // String | 
};
apiInstance.getBasicsByLoginList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 

### Return type

[**[GetBasicsByLogin]**](GetBasicsByLogin.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

