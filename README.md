# Distributed Systems Period II 2022
## Webshop

Link to design plan: https://docs.google.com/document/d/10e_tSQ-Ih18tURYxnvm4WRZ-ccCKsA43BFKwCgJdBjM/edit?usp=sharing

## Setup instruction

Install Docker, Minikube, Kubectl (might come with minikube)  
Add `127.0.0.1 beerbeer.info` to  
- `C:\Windows\System32\drivers\etc\hosts` on Windows
- `\etc\hosts` on Linux

Execute the following commands (some may take a while)  
`minikube start --driver=docker` start minikube

` kubectl apply -f .\kubernetes\` add all .yaml configuration files

`kubectl get pods  --watch` watch the pods get created, crtl-c to stop

`minikube addons enable ingress` enable ingress

`minikube tunnel` start a tunnel which allows accessing the ingress from outside the cluster

Go to `beerbeer.info/products/dbinit` to initialize the product database with some products  
The user database is initialized automatically

Log in with one of these users:
- edgars edgars
- simon simon
- veli matti

You can now order products from our webstore!