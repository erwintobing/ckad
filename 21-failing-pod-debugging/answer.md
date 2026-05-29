# 21 - Failing Pod Debugging
Cluster: ckad0021<br>
Namespace: dev<br>
Doc links: Pods

## Task

1. The application deployed via the startup-app.yaml manifest fails to properly deploy. Deploy the pod, then troubleshoot the issue.

```
kubectl apply -f startup-app.yaml

kubectl get po

kubectl logs startup-app
kubectl describe startup-app
kubectl debug -ti startup-app --image=busybox --target=main
kubectl debug -ti startup-app --image=busybox --share-processes --copy-to=web-app-debug

kubectl debug -ti 

kubectl create cm app-startup-scripts --from-file=startup-app
```

2. Once finished troubleshooting confirm the source of the issue has been resolved by accessing the container and verifying the fix.

```
kubectl get po
kubectl logs app-startup
kubectl exec -ti startup-app -- sh
ls scripts/
ls init/
```
