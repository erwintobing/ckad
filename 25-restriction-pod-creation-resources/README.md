# 25 - Restricting Pod Creation Resources
Cluster: ckad0025<br>
Namespace: dev<br>
Doc links: Requests, limits, and Quota

## Task

1. Create a namespace `staging`.

2. This namespace should have no more than `15 total pods`, whose combined resources should not exceed `1500m CPU` and `2Gi memory`.

3. Individual resources within this namespace should not exceed `1 CPU` or `1 Gi memory`, with defaults request set to `100m CPU` and `128 Mi memory`; default limits should be `500m CPU` and `512Mi memory`.

4. Once the namespace and related resource definitions have been created, attempt to deploy the pod found at `testing-pod.yml`. Resolve any issues with the pod definition.
