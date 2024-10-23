[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Fr6yExjh)

### 5610_Lab 7 - MongoDB

> **MongoDB**

The objective of this lab is to gain hands-on experience in setting up
and using MongoDB Atlas, a cloud-based database platform. You will learn
how to install MongoDB, create a database cluster in Atlas, and connect
to it using Node.js.

### Step 1: Download MongoDB

1.  Go to the MongoDB Download Page**:**
    <https://www.mongodb.com/try/download/community>

2.  Under the Platform dropdown, choose Windows. Make sure the Package
    is set to MSI.

3.  Click Download to get the latest MongoDB Community Edition installer
    (msi file).

4.  After the download is complete, open the .msi file to start the
    installation.

5.  Follow the prompts in the Setup Wizard.

6.  Choose **Complete Setup** (this installs all MongoDB features).

7.  Install MongoDB as a Service

8.  Continue through the Setup Wizard and complete the installation.

9.  By default, MongoDB uses C:\\data\\db as the directory to store its
    data.

    -   Open **File Explorer** and go to your C: drive.

    -   Manually create a new folder called data in the C: drive.

    -   Inside the data folder, create another folder called db. The
        path should now look like this: C:\\data\\db. This is where
        MongoDB will store its databases.

### Start MongoDB Service. Open Command prompt and type the following command and press **Enter** *net start MongoDB.* 

### This will start the MongoDB server as a Windows service. If MongoDB has been installed correctly, you should see a message like:

> *The MongoDB service was started successfully.*

11. Connect to MongoDB. In the connection dialog, you can connect to
    your local MongoDB instance by using the default connection string:
    mongodb://localhost:27017. This will connect you to your MongoDB
    server running on your local machine.

![A screenshot of a chat Description automatically
generated](media/image1.png)

12. Explore Databases and Collections:

    -   Once connected, you will be able to see the list of databases.
        You can click on any database to explore its collections.

    -   Use the \"Create Database\" option to add new databases or
        collections.

    -   In the Collections tab, you can run MongoDB queries using the
        Filter bar to query documents. You can also run aggregation
        queries in the Aggregation tab.

    -   You can manually add documents using the Insert Document button.

    -   To edit existing documents, use the Update Document button or
        directly edit fields.

    -   Delete documents by selecting them and clicking the Delete
        button.

### Use MongoDB with Node.js. Now that MongoDB is installed and running, you can integrate it with Node.js**.** Install the MongoDB Node.js Driver**. Create Lab7 and open in VSCode.** Run the following command to install the MongoDB Node.js driver:

> *npm install mongodb.*

The \"dependencies\" field in package.json will have a line added for
\"mongodb\".![A screen shot of a computer program Description
automatically generated](media/image2.png)

For macOS

Automatic Installation (Recommended)

-   You can use Homebrew for a simple installation. Run the following
    command:

> [brew install mongodb-community@6.0]{.underline}

**ACTIVITY 1**

1.  Copy the code into script.js

![](media/image3.png)

2.  Run [node script.js]{.underline} to execute the script and observe
    the functions of insertOne, findOne, and find. *node script.js*

![A computer screen with white text and green text Description
automatically generated](media/image4.png)

3.  You can see the data in MongoDB Compass.

![A screenshot of a computer Description automatically
generated](media/image5.png)

**Activity 2 - MongoDB Atlas**

MongoDB Atlas is a fully managed, cloud-based database platform that
allows you to access your database from anywhere with an internet
connection, eliminating the need for local installations. It offers a
**free tier (M0 Sandbox)** with up to 512MB of storage, making it
perfect for learning and experimenting at no cost. You can create
clusters and perform basic **CRUD operations** just like on a local
MongoDB instance, but now from the cloud. Using MongoDB Atlas provides
real-world experience, as most modern applications rely on cloud
databases.

1.  **Register a MongoDB Atlas account**.\
    Go to
    [[https://www.mongodb.com/products/platform/atlas-database]{.underline}](https://www.mongodb.com/products/platform/atlas-database)

Click the \"Try Free\" button, and sign up for a free account using your
email or Google account.

2.  **Create a database cluster**.

Click the \"Create new\" button to create a cluster. Choose a free
cluster (usually **M0 Sandbox**), and select a suitable region
(preferably the one closest to you). Click \"Create Cluster\" and wait a
few minutes for the cluster to be created.

![A white and blue background Description automatically
generated](media/image6.png)

3.  **Set up database user and IP access permissions**\
    Click \"Database Access\" on the left, then click \"Add New Database
    User\" to create a username and password, which will be used to
    connect to the database from your application.![A screenshot of a
    computer Description automatically
    generated](media/image7.png)

In the \"Network Access\" tab, click \"Add IP Address\" and choose \"Add
current IP address\". You can choose to allow access from your current
IP address or allow access from anywhere (by adding 0.0.0.0/0 in IP
whitelist). For security, restricting to your current IP is recommended
unless working in a collaborative project.

![A screenshot of a computer Description automatically
generated](media/image8.png)

4.  **Connect to MongoDB Atlas using Compass**\
    Go back to the overview page and click the \"Connect\" button, then
    select \"Compass\". You will see a connection string similar to:\
    [mongodb+srv://ln541758:\<db_password\>@kanbas.9ijmjtl.mongodb.net/.]{.underline}

![A screenshot of a computer Description automatically
generated](media/image9.png)

After opening Compass, click the \"+\" button next to \"connections\".
In the URI field, paste the connection string copied from Atlas, and
remember to replace it with the username and password you created in
Step 3.

![A screenshot of a computer Description automatically
generated](media/image10.png)

5.  Connect to MongoDB Atlas through the application\
    Make sure you have installed the MongoDB driver in your Node.js
    environment before (*[npm install mongodb]{.underline}).* Use the
    code to connect to Atlas and save the code in a file called test.js.

![A screenshot of a computer Description automatically
generated](media/image11.png)

In the code, replace \<username\> and \<password\> with the username and
password you created in Atlas.

6.  Run the code: [node test.js]{.underline}

![](media/image12.png)

**ACTIVITY 3 -** CRUD Activity: Task Manager Application

Create a Node.js application that performs **Create, Read, Update, and
Delete (CRUD)** operations on a MongoDB Atlas database. You will connect
to your MongoDB Atlas cluster and interact with a collection to manage
tasks.

1.  Ensure you are connected to MongoDB Atlas. In your cluster, create a
    new database called **taskManagerDB** and a collection called
    **tasks**.

2.  Create a new Node.js file in your project directory called
    **taskManager.js.** Add comments to your code explaining the purpose
    of each operation.

3.  In taskManager.js, write code to connect to MongoDB Atlas.

    -   Insert a new task into the tasks collection with the following
        fields:

        -   title (string): A short title for the task.

        -   description (string): A detailed description of the task.

        -   completed (boolean): Whether the task is completed (false by
            default).

        -   dueDate (string): The due date of the task in YYYY-MM-DD
            format.

> {
>
> \"title\": \"Complete MongoDB CRUD activity\",
>
> \"description\": \"Write a Node.js script that performs CRUD
>
> operations in MongoDB Atlas\",
>
> \"completed\": false,
>
> \"dueDate\": \"2024-11-15\"
>
> }
>
> Add **three** tasks to the task collection.

4.  Query the tasks collection to **retrieve all tasks** and print them
    to the console. Make sure you display the tasks in a readable
    format.

5.  Update one task by setting its completed status to true. You can
    update the task you inserted in the previous step.

6.  Delete a task from the tasks collection based on its title or
    another identifier.

7.  Run the script to execute the CRUD operations.

8.  Use MongoDB Compass to verify that the tasks were inserted, updated,
    and deleted as expected.

-   Now, modify code to handle multiple tasks at once by inserting an
    array of tasks.

-   Query and print tasks that are due in the future (based on dueDate).

### 

**Activity 4 - Deploying taskManager.js on Heroku**

What you need?

-   A GitHub repository with the lab code.

-   MongoDB Atlas setup (with a working connection string).

-   Install Node.js and npm on your local machine.

-   Install Heroku CLI.

1.  Go to Heroku and sign up for a free account.

2.  Download and install the [Heroku
    CLI](https://devcenter.heroku.com/articles/heroku-cli)

3.  Verify the installation by running: *heroku \--version*

4.  Navigate to your project directory. Make sure the app works locally
    with MongoDB Atlas before deploying to Heroku. Test your CRUD
    operations in taskManager.js.

5.  Ensure that your package.json file has a start script pointing to
    taskManager.js

{

\"name\": \"task-manager-app\",

\"version\": \"1.0.0\",

\"description\": \"Node.js CRUD application\",

\"main\": \"taskManager.js\",

\"scripts\": {

\"start\": \"node taskManager.js\"

},

\"dependencies\": {

\"mongodb\": \"\^4.4.0\"

}

}

6.  In your project directory, create a file named Procfile (no file
    extension). Add this line to the Procfile: *web: node
    taskManager.js.* This tells Heroku to start the app using
    taskManager.js when it runs the web dyno.

7.  Push your code to GitHub

8.  Log in to Heroku by running the following command and following the
    browser login prompt: *heroku login*

9.  Create a new Heroku app for your project: *heroku create
    your-app-name*

Replace your-app-name with a unique name for your app. Heroku will
create an app and provide a URL for it (e.g.,
https://your-app-name.herokuapp.com).

10. Since you're using MongoDB Atlas, you need to set the MongoDB URI as
    an environment variable in Heroku:

heroku config:set MONGODB_URI=\"your_mongodb_atlas_connection_string\"

Replace your_mongodb_atlas_connection_string with your actual MongoDB
Atlas connection string

11. Deploy the app to Heroku by pushing your code: *git push heroku
    master*

12. Once the deployment is successful, you can open your app in the
    browser.

13. Test your app by interacting with the CRUD operations. Ensure that
    the MongoDB Atlas connection works and that you can create, read,
    update, and delete tasks.

14. If you encounter any issues, you can view the Heroku log : *heroku
    logs \--tail*

### Deliverables:

-   Submit your taskManager.js script that performs the CRUD operations.

-   Submit a link to the live application hosted on Heroku
