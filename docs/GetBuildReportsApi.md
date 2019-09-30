# PortalApi.GetBuildReportsApi

All URIs are relative to *http://localhost:8091/p3/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBuildReportsList**](GetBuildReportsApi.md#getBuildReportsList) | **GET** /get-build-reports/ | 


<a name="getBuildReportsList"></a>
# **getBuildReportsList**
> [BuildReports] getBuildReportsList(opts)



Retrieve build reports for list display

### Example
```javascript
var PortalApi = require('portal_api');

var apiInstance = new PortalApi.GetBuildReportsApi();

var opts = { 
  'search': "search_example", // String | 
  'limit': 56, // Number | 
  'buildStacks': "buildStacks_example" // String | Comma-separated list of build stack names (e.g. HeLmod CentOS 7)
};
apiInstance.getBuildReportsList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **buildStacks** | **String**| Comma-separated list of build stack names (e.g. HeLmod CentOS 7) | [optional] 

### Return type

[**[BuildReports]**](BuildReports.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

