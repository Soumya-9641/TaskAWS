
# TaskApp

 A TaskApp to take all task one place. Authorization functionality is there😊


## Features

- Authorization functionality
- Deployment on aws elastic Beanstalk
- fully backend app database on AWS RDS of postgresql engine



## Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)



## Checkout The FLowchart App👌
http://awstest-env.eba-ybpmivjm.ap-south-1.elasticbeanstalk.com
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dulcet-brigadeiros-b04f49.netlify.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/soumyadip-gantait-04b602220)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SOUMYADIP_1097/)

Leetcode : https://leetcode.com/Soumya9641/




## Run Locally

Clone the project

```bash
  git clone https://github.com/Soumya-9641/TaskAWS
```

Go to the project directory

```bash
  first change all environment variable(mongodb url)
  add .env file
  write your postgresql connection variables(USER HOST DATABASE PASSWORD DB_PORT JWT_TOKEN)
  connect that url at connection.js file
  npm install
  nodemon app.js
```
```

## Deployment
Clone the project

```bash
  git clone https://github.com/Soumya-9641/TaskAWS
```
```bash
First Create A AWS RDS of postgresql engine

 - Log in to the AWS Management Console and search for ‘RDS’. You will be redirected to the RDS Home Page.
 - Click on the ‘Create Database’ button and select ‘PostgreSQL’.
 - In the ‘DB Instance Settings’ section, specify the following:
    DB instance identifier
    Master username
    Master password
 - In the ‘DB Instance Size and Storage’ section, select the ‘Free tier’ option.
 - In the ‘Connectivity’ section, select ‘Yes’ for ‘Public accessibility’
 - In the ‘Additional Configuration’ section, select ‘Yes’ for ‘Auto minor version upgrade’
 - Click on the ‘Create Database’ button to create the PostgreSQL DB instance.
 - Download and install pgAdmin on your local machine.
 - Open pgAdmin and click on the ‘Add New Server’ button.
 - In the ‘General’ tab, specify the following:
    Name
    Host name/address
    Port
    Maintenance database
    Username
    Password
 - Click on the ‘Save’ button to save the server configuration
 - You should now be able to connect to your PostgreSQL DB instance using pgAdmin.
```
```bash
Now create Elastic Beanstalk with the hosted Aws RDS url
    - Once the RDS instance is created, note down the Endpoint URL.
    - Go to your env file and replace HOST value from localhost to rds url.
    - Rename your entry point as 'app.js'.
    - In your package.json file rename your 'start' script as 'node app.js'
    - Now create a Procfile and  in Procfile write one script as 'web: npm start'.
    - delete the node_modules and create a .zip file for other files.
    - Go to the AWS Management Console and log in.
    - Click on the Elastic Beanstalk service.
    - Click on the Create a 'New Application' button.
    - Choose 'Web server environment' and give an application name
    - choose the platform as 'nodejs' and at 'Application code' choose 'upload your code' and upload your .zip file
    - Next choose a EC2 instance profile
    - keep next everything then come to 'Configure updates, monitoring, and logging' option and add all environment variable you code contains
    - Now 'Submit' it and it will successfully deployed your app.
    - If you face error check log option and try to debug
    HAPPY CODING

```
```
## Want To Contribute?😊

If you want to contribute and make this app better, You are welcome. Feel free to raise issues and we will take it from there.

