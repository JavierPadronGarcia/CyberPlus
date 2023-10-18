# CyberPlus

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<img src="./CyberPlus/src/assets/images/logo.webp">

<!-- ABOUT THE PROJECT -->
## About The Project

Cyberplus is a project developed in Angular for the frontend and Node.js for the backend. It is about a mobile application for selling computer products, where all the information is stored in the backend, and the frontend receives the data for display, except for the images, which are located in the 'assets' folder within the Angular project. Additionally, the design was created using Figma. 

[Click here to view the prototype.](https://www.figma.com/proto/WP78JZwg84C3zBLH7EGOpi/Cyber-%2B?page-id=0%3A1&node-id=5-18&starting-point-node-id=5%3A18&mode=design&t=F31ftSapEwh9mAkd-1) The prototype don't have all the features.


### Built With

* [![Angular][Angular]][Angular-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

- Have a text editor like [Visual Studio Code]


- Have installed the lastest lts version of node js

you can see what version is installed with:

 ```sh
  node --version
  ```

If you don't have node js <a href='https://nodejs.org/en'>click here</a> to install it

### Installation

1. Clone the repo
```sh
   git clone https://github.com/JavierPadronGarcia/CyberPlus.git
```

2. go to the project folder and go to the both folders, CyberPlus and backend and Install NPM packages

```sh
    cd CyberPlus
   npm install
```
```sh
   cd ..
   cd backend
   npm install
```

3. Now, start the proyect, first the backend and after the frontend, each one in a new terminal:

```sh
   cd backend
   node server.js
```

```sh
   cd Cyberplus
   ng serve
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Javier Padrón García -- padrongarciajavier04@gmail.com

Project Link: [https://github.com/JavierPadronGarcia/CyberPlus.git](https://github.com/JavierPadronGarcia/CyberPlus.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- URL for images and links -->
[Angular]: https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io

[Visual Studio Code]: https://code.visualstudio.com