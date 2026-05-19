# 12 - Deployment Rollback
Cluster: ckad0012<br>
Namespace: dev<br>
Doc links: Deployments

## Task

1. Create a Deployment file named **biz-app.deploy.yml**. The Deployment should be named **biz-app**, use an image of **nginx:1.17.8-alpine**, and create **4** Pods.

2. Create the Deployment and add the `--save-config` flag when running the command.

3. Verify all the Pods are running.

4. Edit **biz-app.deploy.yml** and change the image to **nginx:7.85.1-alpine**. Apply the changes and use the `--record` flag.

5. List the Pods but notice there's a problem. View the **biz-app** Deployment's rollout status and rollout history.

6. Rollback to the previous Deployment version. List the Deployment history again.

7. Verify that the previous deployment is running by checking the Deployment's image value (it should be **nginx:1.17.8** now).