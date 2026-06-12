# 24 - Working with Admission Controller
Cluster: ckad0024<br>
Namespace: dev<br>
Doc links: Admission Controller

## Task

Make sure to add `NodeRestriction` and `DenyServiceExternalIPs` in the allowed admission controller in kube api-server.

1. In attemp to simplify namespaces, all teams are now using the same `dev` namespace. Remove the the  `frontend-dev` namespace from the cluster. Quit the command (ctrl + c) before the deletion command completes.

2. Next, deploy the service found in the `internal-metric.yml`. Resolve any erros.

3. Apply `pvc.yml`. Verify that the admission controller mutates the default storage class to standard, even though `pvc.yml` does not specify it.
