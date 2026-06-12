# 27 - Define Resource Requirements
Cluster: ckad0027<br>
Namespace: dev<br>
Doc links: resources

## Task

1. Deploy the `memory-app.yml` pod. Wait a few minutes, then check it's status.

```

k apply -f memory-app.yml
k get po

```

2. Troubleshoot the `memory-app` pod and get it in a running state.

```

nano memory-app.yml 
comment resource requirement 
k apply -f memory-app.yml
k top po

nano memory-app.yml 
update the resource requirement requirement: request above the threshold from top & limit is 1.5 or 2 request
k apply -f memory-app.yml
k get po

```
