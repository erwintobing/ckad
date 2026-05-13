# 05 - Pod With Ephemeral and Persistent Storage

Deploy an nginx pod that stores `index.html` on persistent storage and `access.log` on ephemeral storage.

**Image:** `nginx:alpine`
**html:** `/usr/share/nginx/html`
**access:** `/var/log/nginx` 

## Objective

An nginx pod is deployed. After creating the pod, write a custom `index.html` that diplay:


```
Hello from Kubernetes storage.
```

After deleting and recreating the pod, `localhost:8080` should still display the same `index.html` above.

Ephemeral storage (`access.log`) does not survive pod deletion.