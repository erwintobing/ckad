# 22 - Creating Custom Resources
Cluster: ckad0021<br>
Namespace: dev<br>
Doc links: Custom Resource Definition

## Task

1. Create a custom resource definition for an API that defines the cluster maintenance windows, called `maintenancewindow.ops.example.com`, or `mw` for its shortname. 

2. This will be for the `version 1 alpha` version of the API, which should be the only available version.

3. The CRD should contain properties for `startTime` and `endTime` using the `date-time` format, as well as an input for the `serviceName` and `reason` behind the maintenance.

4. Include property description as well as general description of the overall CRD. The scope should be cluster-wide. The required fields are serviceName, startDate, and endDate.

```
# general description
Schedule downtime or maintenance period for a service.

# serviceName
The name of the service experience downtime.

# startDate
The start of the maintenance window , in RFC3339 date-time format (2026-06-03T17:30:00Z)

# endDate
The end of the maintenance window , in RFC3339 date-time format (2026-06-03T17:30:00Z).

# reason
The reason or purpose of the scheduled maintenance.
```

5. Apply the CRD, the create the MaintenanceWindow resource named db-downtime.yaml to test it. Apply the resource.

```
name: db-downtime
serviceName: "customer"
startTime: "2026-06-03T17:30:00Z"
endTime: "2026-06-03T17:30:00Z"
reason: "Database upgrade and security patching."
```
