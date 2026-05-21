# 15 - Helm Updrade and Scaling
Cluster: ckad0015<br>
Namespace: dev<br>
Doc links: Helm

## Task

1. List all current Helm installations in the **dev** namespace.

    ```
    helm list -n dev
    ```

2. Update the Helm **bitnami** repo.

    ```
    helm repo update
    ```

3. Show all **nginx** charts for version **13.1.5**.

    ```
    helm search repo nginx --version=13.1.5
    ```

4. Install the **nginx** version **13.1.5** chart with **5 replicas**. Name the release **nginx-app** and install it into the **dev** namespace.

    ```
    # finding what to override
    helm show values bitnami/nginx --version=13.1.5 | grep replica

    # installation
    helm install nginx-app bitnami/nginx --version==13.1.5 -n dev --set replicaCount=5
    ```

5. List the running Pods.

    ```
    kubectl get po -n dev
    ```

6. Upgrade the **nginx-app** release to version **13.1.8**.

    ```
    helm upgrade nginx-app bitnami/nginx --version=13.1.8 -n dev
    ```

7. List the running Pods.

    ```
    kubectl get po -n dev
    ```

8. Remove the **nginx-app** release.

    ```
    helm uninstall nginx-app -n dev
    ```