# PortalApi.GetBuildListApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBuildListList**](GetBuildListApi.md#getBuildListList) | **GET** /get-build-list/ | 


<a name="getBuildListList"></a>
# **getBuildListList**
> [BuildList] getBuildListList(opts)



Retrieve build data for list display

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.GetBuildListApi();

var opts = { 
  'search': "search_example", // String | 
  'buildStacks': "buildStacks_example" // String | Comma-separated list of build stack names (e.g. HeLmod CentOS 7)
};
apiInstance.getBuildListList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 
 **buildStacks** | **String**| Comma-separated list of build stack names (e.g. HeLmod CentOS 7) | [optional] 

### Return type

[**[BuildList]**](BuildList.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

