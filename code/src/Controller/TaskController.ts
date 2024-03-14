import { NextFunction, Request, Response } from "express"
import fs from 'fs';
import path from 'path';


export class TaskController {
    static lastId: number = 20;
    static getAllTasks(request: Request, response: Response, next: NextFunction) {

        const filePath = path.join(__dirname, '../Model/tasks.json');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Error reading tasks file:', err);
                return response.status(500).json({ error: 'Internal server error' });
            }

            const tasks = JSON.parse(data.toString());
            return response.json(tasks);
        });




    }

    static getTaskById(request: Request, response: Response, next: NextFunction) {
        const taskId = parseInt(request.params.id);
        let found: boolean = false;

        const filePath = path.join(__dirname, '../Model/tasks.json');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error('Error reading tasks file:', err);
                return response.status(500).json({ error: 'Internal server error' });
            }

            const tasks: any[] = JSON.parse(data.toString());

            tasks.forEach(task => {
                if(task.id == taskId){
                    found = true;
                    return response.json(task);


                }
            });

            if(!found){

            return response.status(404).send('Not found');
            }

        });
    }

    static updateTask(request: Request, response: Response, next: NextFunction){
        try {
            let found: boolean = false;
            const { description, progress } = request.body;
            const taskId = request.params.id;

            // Read the content of the JSON file
            const filePath = path.join(__dirname, '../Model/tasks.json');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading tasks file:', err);
                    return response.status(500).json({ error: 'Internal server error' });
                }

                // Parse the JSON data
                const tasks: any[] = JSON.parse(data);




                // Find the task to update
                tasks.forEach(task => {
                    if(task.id == taskId){
                        task.description = description;
                        task.progress = progress;
                        found = true;



                    }
                });
                if (!found) {
                    return response.status(404).json({ error: 'Task not found' });
                }



                // Write the updated content back to the file
                fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error('Error updating tasks file:', err);
                        return response.status(500).json({ error: 'Internal server error' });
                    }

                    response.json({ message: 'Task updated successfully' });
                });
            });
        } catch (error) {
            next(error);
        }
    }


    static createTask(request: Request, response: Response, next: NextFunction) {
        try {
            const { name, description, progress, type } = request.body;

            // Read the content of the JSON file
            const filePath = path.join(__dirname, '../Model/tasks.json');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading tasks file:', err);
                    return response.status(500).json({ error: 'Internal server error' });
                }

                // Parse the JSON data
                const tasks: any[] = JSON.parse(data);
                const lastTaskId = tasks.length > 0 ? tasks[tasks.length - 1].id : null;


                // Generate unique ID for the new task
                let taskId: number= lastTaskId +1
                let taskIdString: string = taskId.toString();

                // Add new task to the tasks array
                tasks.push({
                    id: taskIdString,
                    name: name,
                    description: description,
                    progress: progress,
                    type: type
                });

                // Write the updated content back to the file
                fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8', (err) => {
                    if (err) {
                        console.error('Error updating tasks file:', err);
                        return response.status(500).json({ error: 'Internal server error' });
                    }

                    response.json({ message: 'Task created successfully' });
                });
            });
        } catch (error) {
            next(error);
        }
    }


}
