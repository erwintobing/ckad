# CKAD Preparation

CKAD is about pattern recognition + speed execution, not deep theory.

> **Goal:** complete each question in **≤ 5 minutes**

### 1. Exam Tips and Tricks

#### a. Use Aliases

| Alias | Command |
|-------|---------|
| `k`   | `kubectl` |
| `kg`  | `kubectl get` |
| `kc`  | `kubectl config get-contexts` |
| `ke`  | `kubectl explain --recursive` |
| `ka`  | `kubectl apply -f` |
| `kr`  | `kubectl delete -f` |
| `kd`  | `kubectl describe` |
| `kl`  | `kubectl logs` |

#### b. Exported Variables

| Variable | Value |
|----------|-------|
| `dr`     | `--dry-run=client -o yaml` |
| `now`    | `--grace-period=0 --force` |

#### c. Imperative Commands

Use these to generate YAML quickly, then edit only what's needed:

```sh
# Pod
kubectl run nginx --image=nginx --port=80 $dr > pod.yaml

# Service
kubectl create service nodeport nginx --tcp=5678:8080 $dr > service.yaml
```

#### d. Workflow Tips
- In K8s docs, don't read — **search quickly** for exact YAML examples
- Always check **namespace** and **context** before applying
- Prepare reusable YAML templates for pod, deployment, and service
- Use force delete (`$now`) when needed
- Be comfortable with `grep`, `curl`, pipes, and file editing (`vim`/`nano`)

#### e. Common Mistakes to Avoid

- Forgetting liveness/readiness probes
- Wrong image or tag
- Wrong port or label selector
- Missing resource limits

#### f. Debugging

```sh
kubectl describe <resource> <name>
kubectl logs <pod-name>
```

#### g. Reference
- https://medium.com/@san.agarwal10/my-journey-to-pass-ckad-exam-312d24382177
- https://medium.com/@shafath.001/mastering-ckad-a-journey-through-the-certified-kubernetes-application-developer-exam-500e8e0faa3c

---

### 2. Minikube Env Setup

```sh
# Start cluster
minikube start --cni=calico

# Add worker node
minikube node add --worker=true

# Stop cluster
minikube stop

# Check cluster status
minikube profile list

# Delete node
minikube node delete worker-1

# Expose service
minikube service <service-name> --url

# Enable ingress addon
minikube addons enable ingress

# Or tunnel for ingress
minikube tunnel
```