# 13 - Helm Nginx Release
Cluster: ckad0013<br>
Namespace: dev<br>
Doc links: Helm

## Task

1. Create a namespace named **dev** in Kubernetes.

    ```
    kubectl create ns dev
    ```

2. Use Helm to add a repo named **bitnami** located at **https://charts.bitnami.com/bitnami**.

    ```
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

3. List all Helm repos and ensure **bitnami** appears.

    ```
    helm repo list
    ```

4. Search the **bitnami** repo for **nginx** and show all available versions.

    ```
    helm search repo nginx --versions
    ```

5. Install the **bitnami/nginx** chart into the **dev** namespace of Kubernetes. Name the release **nginx-app**.

    ```
    helm install nginx-app bitnami-nginx -n dev
    ```

6. List all Pods running in the **dev** namespace.

    ```
    kubectl get po -n dev
    ```

7. List all Helm charts in the dev namespace.

    ```
    helm list -n dev
    ```

8. Remove the nginx-app release.
    ```
    helm uninstall nginx-app -n dev
    ```