# PortalApi.GetPiNamesApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPiNamesList**](GetPiNamesApi.md#getPiNamesList) | **GET** /get-pi-names/ | 


<a name="getPiNamesList"></a>
# **getPiNamesList**
> [GetPiNames] getPiNamesList(opts)



Return PI first name last name for autocomplete list.  Only active user records returned.

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.GetPiNamesApi();

var opts = { 
  'search': "search_example" // String | 
};
apiInstance.getPiNamesList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 

### Return type

[**[GetPiNames]**](GetPiNames.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

