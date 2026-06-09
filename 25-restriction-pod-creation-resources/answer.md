# 25 - Restricting Pod Creation Resources
Cluster: ckad0025<br>
Namespace: dev<br>
Doc links: Requests, limits, and Quota

## Task

1. Create a namespace `staging`.

```

k create ns staging

```

2. This namespace should have no more than `15 total pods`, whose combined resources should not exceed `1500m CPU` and `2Gi memory`.

```

k create quota staging-quote --hard=cpu=1500m,memory=2Gi,pods=15
k describe quota

```

3. Individual resources within this namespace should not exceed `1 CPU` or `1 Gi memory`, with defaults request set to `100m CPU` and `128 Mi memory`; default limits should be `500m CPU` and `512Mi memory`.

```

apiVersion: v1
kind: LimitRange
metadata:
  name: staging-limit
spec:
  limits:
  type: Container
  - default:
      cpu: 500m
      memory: 512Mi 
    defaultRequest:
      cpu: 100m
      memory: 128Mi
    max:
      cpu: 1
      memory: 1Gi 
```


4. Once the namespace and related resource definitions have been created, attempt to deploy the pod found at `testing-pod.yml` and `testing-deploy.yml`. Resolve any issues with the pod definition.

```

k apply -f testing-pod.yml
k describe pod/test-pod
k delete -f testing-pod.yml
change requests.memory to 1Gi, limits.cpu to 1, and limits.memory to 1Gi 
or 
remove the resources to use default resources
k apply -f testing-pod.yml

```