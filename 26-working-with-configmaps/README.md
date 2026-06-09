# 26 - Working with ConfigMaps
Cluster: ckad0026<br>
Namespace: dev<br>
Doc links: ConfigMap 

## Task

1. You need to create a series of variables to be used across three pod definitions, `demo-pod.yml`, `dev-demo-pod.yml`, and `volume-pod.yml`. The key-value pairs that need to saved are:

```

app_name=demo-app
log_level=debug
feature_flag=enabled
timeout=7


```

2. Create a single ConfigMap named that store this data.

3. Update the `demo-pod.yml` manifest to pull in the ConfigMap as-is. Apply the manifest and check the logs like in step 1 should be displayed.

4. Update the `dev-demo-pod.yml` uses this data, but each value needs to be pulled in individually, because the pod expects all environmental variable to have keys in ALL CAPS. Apply the manifest and check the logs like in step 1 should be displayed.

5. Finally, update the `volume-pod.yml` to pull in the ConfigMap as a volume. Apply the manifest and exec to the pod and list the config directory.