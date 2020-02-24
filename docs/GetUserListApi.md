# PortalApi.GetUserListApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserListList**](GetUserListApi.md#getUserListList) | **GET** /get-user-list/ | 


<a name="getUserListList"></a>
# **getUserListList**
> [GetUserList] getUserListList(opts)



Return basic information (user full name, pi name, department, email ) given a search term.   Logins are in a list.

### Example
```javascript
var PortalApi = require('portal_api');
var defaultClient = PortalApi.ApiClient.instance;

// Configure API key authorization: token
var token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

var apiInstance = new PortalApi.GetUserListApi();

var opts = { 
  'search': "search_example", // String | 
  'orgTree': "orgTree_example", // String | 
  'offset': 56, // Number | 
  'limit': 56, // Number | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.getUserListList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 
 **orgTree** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**[GetUserList]**](GetUserList.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

