# 20 - Working with Container Logs
Cluster: ckad0020<br>
Namespace: dev<br>
Doc links: Logs

## Task

1. Deploy the application found in the node-app.yml file.

```
kubectl apply -f node-app.yml
```

2. Ensure the pod deployed without error - if there is an error, trackdown which container is the source of the error and view its container logs.

```
kubectl get po node-app -o jsonpath='{.spec.containers[*].name}'
kubectl logs node-app -c app
kubectl logs node-app -c logger

```

https://kubernetes.io/docs/reference/kubectl/jsonpath/

3. View the logs for any previouse deployment of that container.

```
kubectl logs node-app -c app -p
kubectl logs node-app -c logger -p
```

4. Resolve the issue and redeploy the pod.

```
nano node-app.yml
kubectl apply -f node-app.yml
```

5. View the container logs for the pod to confirm the application is working.

```
kubectl get po
```