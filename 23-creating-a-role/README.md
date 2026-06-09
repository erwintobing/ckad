# 23 - Creating a Role
Cluster: ckad0023<br>
Namespace: dev<br>
Doc links: Role, RoleBinding, ClusterRole, ClusterRoleBinding

## Task

1. The `backend` team needs RBAC access to work within the `default` namespace. Create a role `backend-role` that allows the team to:
- Retrive, View, and watch pods and deployments
- Deploy and update pods and deployments
2. Once the role has been created, assign it to the `backend` team, as well as the user `bbelcher` using role binding `backend-access`.