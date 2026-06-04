# 08 - Blue/Green Deployment

Cluster: ckad0008<br>
Namespace: dev<br>
Doc links: Services, Deployments

## Task

The starting folder contains Kubernetes YAML files to create Blue/Green deployments and services. Images you'll use are also available on the system. View the files in the `starting` folder using:

```bash
$ ls starting -l
```

1. View the selectors in the **blue.svc.yml** and **green.svc.yml** files. Add a **role: blue** selector to **public.svc.yml**.

2. Create the resources in Kubernetes using the YAML files available in the current folder. Run the following command to verify that the **blue** Pods are accessible using the public service.

    ```bash
    $ curl localhost
    ```

3. Change the public service's **role** selector from **blue** to **green**. Run the following command to verify that the **green** Pods are accessible using the public service.

    ```bash
    $ curl localhost
    ```