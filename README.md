# CKAD Preparation

### Start cluster minikube
``
minikube start --memory=1800mb --cni=calico
``

### Add worker node
``
minikube node add --worker=true --memory=1000mb 
``

### Stop Minikube
``
minikube stop
``

### Check cluster status
``
minikube profile list
``

### Delete node
``
minikube node delete worker-1
``

### Expose service
``
minikube service <service-name>
``

### Expose ingres
``
minikube addons enable ingress
``

or

``
minikube tunnel
``
