# 23 - Creating a Role
Cluster: ckad0023<br>
Namespace: dev<br>
Doc links: Role, RoleBinding, ClusterRole, ClusterRoleBinding

## Task

1. The `backend` team needs RBAC access to work within the `default` namespace. Create a role `backend-role` that allows the team to:
- Retrive, View, and watch pods and deployments
- Deploy and update pods and deployments

```
k create role backend-role --verb=get,list,watch,create,update --resource=po,deploy -n default $dr > role.yml

k create rolebinding backend-access --role backend-role --user bbelcher --group backend $dr > binding.yml

k apply -f role.yml -f binding.yml
```

2. Once the role has been created, assign it to the `backend` team, as well as the user `bbelcher` using role binding `backend-access`.

```
k auth can-i create po --as bbelcher -n default
k auth can-i update deploy --as bbelcher --as-group backend -n default 
```