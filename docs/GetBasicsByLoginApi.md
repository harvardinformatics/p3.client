# P3Client.GetBasicsByLoginApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBasicsByLoginList**](GetBasicsByLoginApi.md#getBasicsByLoginList) | **GET** /get-basics-by-login/ | 


<a name="getBasicsByLoginList"></a>
# **getBasicsByLoginList**
> getBasicsByLoginList(opts)



Return basic information (user full name, pi name, department, email ) given all or part of a login

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.GetBasicsByLoginApi();

var opts = { 
  'login': "login_example" // String | 
};
apiInstance.getBasicsByLoginList(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

