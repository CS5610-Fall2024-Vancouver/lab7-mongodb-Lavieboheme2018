const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://janjprvj:Lavieboheme2000@cluster0.haqq4.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        const database = client.db('taskManagerDB');
        const tasks = database.collection('tasks');

        // Insert tasks
        const newTask = {
            title: "Complete MongoDB CRUD activity",
            description: "Write a Node.js script that performs CRUD operations in MongoDB Atlas",
            completed: false,
            dueDate: "2024-11-15"
        };
        const result = await tasks.insertOne(newTask);
        console.log(`New task inserted with the _id: ${result.insertedId}`);

        const taskArray = [
            { title: "Review Node.js documentation", description: "Go through the Node.js official docs for a better understanding.", completed: false, dueDate: "2024-10-25" },
            { title: "Complete coding assignment", description: "Finish the coding assignment due next week.", completed: false, dueDate: "2024-11-05" },
            { title: "Prepare for presentation", description: "Prepare slides and practice for the upcoming presentation.", completed: false, dueDate: "2024-11-10" }
        ];
        const multipleResult = await tasks.insertMany(taskArray);
        console.log(`${multipleResult.insertedCount} tasks inserted`);

        // Query all tasks
        const allTasks = await tasks.find().toArray();
        console.log('All Tasks:');
        allTasks.forEach(task => {
            console.log(`Title: ${task.title}, Description: ${task.description}, Completed: ${task.completed}, Due Date: ${task.dueDate}`);
        });

        // Update a task
        const updateResult = await tasks.updateOne(
            { title: "Complete MongoDB CRUD activity" },
            { $set: { completed: true } }
        );
        console.log(`${updateResult.matchedCount} task matched, ${updateResult.modifiedCount} task updated`);

        // Delete a task
        const deleteResult = await tasks.deleteOne({ title: "Prepare for presentation" });
        console.log(`${deleteResult.deletedCount} task deleted`);

        // Query future tasks
        const futureTasks = await tasks.find({ dueDate: { $gt: new Date().toISOString().split('T')[0] } }).toArray();
        console.log('Future Tasks:');
        futureTasks.forEach(task => {
            console.log(`Title: ${task.title}, Due Date: ${task.dueDate}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    } finally {
        await client.close();
    }
}

run();
