# 24 - Working with Admission Controller
Cluster: ckad0024<br>
Namespace: dev<br>
Doc links: Admission Controller

## Task

Make sure to add NodeRestriction and DenyServiceExternalIPs in the allowed admission controller in kube api-server.

```
sudo vi /etc/kubernetes/manifests/kube-apiserver.yaml

- --enable-admission-plugins=NodeRestriction,DenyServiceExternalIPs

```

1. In attemp to simplify namespaces, all teams are now using the same `dev` namespace. Remove the the  `frontend-dev` namespace from the cluster. Quit the command (ctrl + c) before the deletion command completes.

```
k create ns dev
k create ns frontend-dev

k delete ns frontend-dev 
ctrl + c
```


2. Next, deploy the service found in the `internal-metric.yml`. Resolve any erros.

```
k apply -f internal-metric.yml

nano internal-metric.yml & change ns to dev

k apply -f internal-metric.yml

nano internal-metric.yml & remove externalIPs 

k apply -f internal-metric.yml

```

3. Apply `pvc.yml`. Verify that the admission controller mutates the default storage class to standard, even though `pvc.yml` does not specify it.

```

k apply -f pvc.yml
k get pvc

```

```