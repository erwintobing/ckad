# 19 - Working with Kubernetes Metrics
Cluster: ckad0019<br>
Namespace: dev<br>
Doc links: metrics-server

## Task

1. Create a web application deployment using **nginx** image; name the deployment **nginx**, create **five** replicas, and expose port **80**.

```
kubectl create deploy nginx --image=nginx --replicas=5 --port=80
kubectl expose deploy nginx --port=80 --type=NodePort
```

2. Check the resource usage for the deployment pods and the related worker nodes.

```
kubectl top pods
kubectl top nodes
```

3. Generate some traffic using **curl loop** against the nginx deployment.

```
kubectl port-forward service/nginx 8080:80
while true; do curl http://localhost:8080; sleep 2; done;
```

4. Review the resource usage once more.

```
kubectl top pods
kubectl top nodes
```

5. View the raw metrics data for one of the affected nodes. Save it to the file **workernode.txt**.

```
kubectl get --raw /api/v1/nodes/minikube-m02/proxy/metrics/resource > workernode.txt
```

