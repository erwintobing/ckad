# 14 - Helm Chart Customization
Cluster: ckad0014<br>
Namespace: dev<br>
Doc links: Helm

## Task

1. Use Helm to pull the **bitnami/wordpress** version **30.1.8** chart and untar it in the current folder.

2. Open the **Chart.yaml** file in the new **wordpress** folder and note the dependencies.

3. View the **wordpress** **30.1.8** chart values using Helm.

4. Create a **wordpress-values.yml** file in the current folder and add the following content:

```
wordpressUsername: admin 
wordpressPassword: admin 
wordpressEmail: admin@admin.com 
wordpressFirstName: Jane 
wordpressLastName: Doe 
wordpressBlogName: admin.com 
service: 
  type: LoadBalancer
```

5. Install version **30.1.8** of the wordpress chart into the **dev** namespace and pass the values from the **wordpress-values.yml** file.

6. List the running Pods.