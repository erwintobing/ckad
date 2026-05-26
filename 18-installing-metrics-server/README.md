# 18 - Installing Kubernetes Metric Server
Cluster: ckad0018<br>
Namespace: dev<br>
Doc links: metrics-server

## Task

1. Set up the Metrics Server. If you are using Minikube, enable the Metrics Server addon, or apply the Metrics Server manifest from `https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml` (note: need to bypass certificate validation by adding --kubelet-insecure-tls).

2. View the node resource metrics to check whether the Metrics Server is running.