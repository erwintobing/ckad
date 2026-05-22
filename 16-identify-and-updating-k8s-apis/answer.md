# 16 - Identifying and Updating Kubernetes APIs
Cluster: ckad0016<br>
Namespace: dev<br>
Doc links: kube-apiserver

## Task

1. Update the kubernetes cluster to use the v1beta1 admissionregistration.k8s.io/v1 API and v1alpha2 for the Lease API

    ```
    # check api-versions
    kubectl api-resoures | grep -E 'admissionregistration|Lease'

    # login to control panel
    minikube ssh

    # edit kube-apiserver.yaml
    sudo vi /etc/kubernetes/manifests/kube-apiserver.yaml

    # in the spec.containers.command add
    - --runtime-config=admissionregistration.k8s.io/v1beta1,coordination.k8s.io/v1alpha2
    ```

2. Confirm the API versions are updated by viewing the available versions.

    ```
    kubectl api-versions | grep -E 'admission|coordination'
    ```

3. Confirm the preferred versions for the updated API.
    
    ```
    # start API proxy
    kubectl proxy 8001 &
    [1] 439463

    # check the preferred version
    curl localhost:8001/apis/coordination.k8s.io
    
    # kill API proxy
    pgrep kubectl
    sudo kill 439463
    ```