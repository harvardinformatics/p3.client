# P3Client.GetOrgNamesApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrgNamesList**](GetOrgNamesApi.md#getOrgNamesList) | **GET** /get-org-names/ | 


<a name="getOrgNamesList"></a>
# **getOrgNamesList**
> getOrgNamesList(opts)



Return org names for autocomplete list.  Department names are followed by Schools, Museums, Institutes, and Centers

### Example
```javascript
var P3Client = require('p3_client');
var defaultClient = P3Client.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new P3Client.GetOrgNamesApi();

var opts = { 
  'search': "search_example" // String | 
};
apiInstance.getOrgNamesList(opts).then(function() {
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

