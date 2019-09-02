# P3Client.GetPiNamesApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPiNamesList**](GetPiNamesApi.md#getPiNamesList) | **GET** /get-pi-names/ | 


<a name="getPiNamesList"></a>
# **getPiNamesList**
> getPiNamesList(opts)



Return PI first name last name for autocomplete list.  Only active user records returned.

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.GetPiNamesApi();

var opts = { 
  'search': "search_example" // String | 
};
apiInstance.getPiNamesList(opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

