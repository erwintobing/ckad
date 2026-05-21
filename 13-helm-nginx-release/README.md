# 13 - Helm Nginx Release
Cluster: ckad0013<br>
Namespace: dev<br>
Doc links: Helm

## Task

1. Create a namespace named **dev** in Kubernetes.

2. Use Helm to add a repo named **bitnami** located at **https://charts.bitnami.com/bitnami**.

3. List all Helm repos and ensure **bitnami** appears.

4. Search the **bitnami** repo for **nginx** and show all available versions.

5. Install the **bitnami/nginx** chart into the **dev** namespace of Kubernetes. Name the release **nginx-app**.

6. List all Pods running in the **dev** namespace.

7. List all Helm charts in the dev namespace.

8. Remove the nginx-app release.