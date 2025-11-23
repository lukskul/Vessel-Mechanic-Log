# Vessel Mechanic Log   

## Overview  
 Vessel Mechanic Log is a **read-only** system, allowing users to reference vessel data and specifications. This lightweight Data log is designed to run on **IPFS** without requiring a traditional server to fetch or push data.  

## Features  
- 📄 **Read-Only Access** – Users can view vessel data but cannot modify it.  
- ⚡ **Lightweight** – Optimized for speed and minimal resource usage.  
- 🌐 **Decentralized** – Fully functional on **IPFS** and **GitHub Pages**, no backend required.  

# 🚀 - Contributing Guide

Welcome to the **Vessel Mechanic Log** project! We’re excited that you want to contribute. Whether you're fixing bugs, adding new features, or adding information, this guide will walk you through the steps to get started.

## 🔹 Table of Contents
1. [Getting Started](#getting-started)
2. [Contributing Steps](#contributing-steps)

---

## 🔹 Getting Started
To start contributing, you'll need a GitHub account and a basic understanding of how Git works.

1. **Fork the repository**:  
   This creates your own copy of the repository where you can freely make changes.

2. **Clone your fork**:  
   Download your forked repository to your local machine.

3. **Create a new branch**:  
   It’s always a good practice to create a new branch for each new feature or fix.  npm run start to create a working app and see your changes on the fly. 

4. **Make your changes**:  
   Work on the code, documentation, or tests based on the issue or feature you're tackling.

5. **Make sure npm Node Package Manager is installed on your machine**:  
   on the command line run: npm install 
   and: npm run start
   if everything is working you should see a working site in the browser at http://localhost:3000

6. **Commit your changes**:  
   Write clear, concise commit messages explaining your changes.

7. **Push your branch**:  
   After committing your changes, push your branch to your GitHub fork.

8. **Create a Pull Request**:  
   Submit a PR to the original repository to merge your changes. This is where I review your changes.

---

## 🔹 Contributing Steps

### **1. Fork the Repository**
To begin contributing, click on the **Fork** button at the top-right of the repository page. This will create a copy of the project in your GitHub account.

### **2. Clone Your Fork**
Clone the forked repository to your local machine:
```sh
git clone https://github.com/YOUR-USERNAME/YOUR-FORKED-REPO.git
cd YOUR-FORKED-REPO
```

## 🔹 Adding New Vessels
How do i add new Vessels? Why are my added Vessels not showing up on the app?
### **1. Before adding any new Vessels you MUST DO THIS!! **
// Run : node watcher.js
What Does it Do? **watcher.js**. This file will update the fileIndex.json array. 

---

## 🔹 Things to Do

## Always need to translate the site
- Create **en / es** toggle and replace the English word array with Spanish words in `props.js`.  

## Page builds  
- [x] info.json  
- [x] thruster.json  
- [ ] anchor.json  
- [ ] engine.json  
- [ ] coupler.json  
- [ ] seals.json  
- [ ] shaft.json  
- [x] props.json  
- [ ] rudder.json  
- [ ] seascreens.json  
- [ ] zinc.json  
- [ ] door.json  
- [ ] generator.json  
- [ ] motor.json  
- [ ] plus.json

## Progress  
```
[####-----------------] 27%

 ```
 ### _Good luck!_
