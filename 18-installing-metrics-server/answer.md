# 18 - Installing Kubernetes Metric Server
Cluster: ckad0018<br>
Namespace: dev<br>
Doc links: metrics-server

## Task

1. Set up the Metrics Server. If you are using Minikube, enable the Metrics Server addon, or apply the Metrics Server manifest from https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml (note: need to bypass certificate validation by adding --kubelet-insecure-tls).

```
# minikube
minikube addons enable metrics-server

# custom cluster
curl -LO https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
add --kubelet-insecure-tls in components.yaml
kubectl apply -f components.yaml
```

2. View the node resource metrics to check whether the Metrics Server is running.

```
kubectl top nodes
```

3. Remove the metric server.

```
minikube addons disable metrics-server

kubectl delete -f components.yaml
```