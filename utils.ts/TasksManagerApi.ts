import axios, { AxiosInstance } from "axios";
import { TasksApi } from "~~/api/tasksApi";
const runtimeConfig = useRuntimeConfig()

export default class TasksManagerApi {
    
    private readonly axiosInstance: AxiosInstance;
    constructor() {
        this.axiosInstance = TasksApi();
    }

    async getTasks() {
        console.log('Getting Tasks');
        try {
            const { data } = await this.axiosInstance.get<TaskModel[]>('tasks');
            return data;
        } catch (error) {
            console.log('there was an error getting tasks');
        }
    }

    async getOneTask(taskId: number) {
        console.log(`Getting Task with id ${taskId}`);
        try {
            const { data } = await this.axiosInstance.get<TaskModel[]>(`tasks/${taskId}`);
            return data;
        } catch (error) {
            console.log('there was an error getting tasks');
        }
    }

    async createTask(taskData:TaskModel){
        console.log('Creating Task');
        try {
            const { status } = await this.axiosInstance.post(`tasks`, taskData);
            return status;
        } catch (error) {
            console.log('there was an error getting tasks');
        }
    }

    async updateTask(taskId: number,taskData:TaskModel){
        console.log('Updating Task');
        try {
            const { status } = await this.axiosInstance.put(`tasks/${taskId}`, taskData);
            return status;
        } catch (error) {
            console.log('there was an error getting tasks');
        }
        
    }

    async deleteTask(taskId:number){
        console.log(`Deleting task with id ${ taskId } `);
        try {
            const { status } = await this.axiosInstance.delete(`tasks/${taskId}`);
            return status;
        } catch (error) {
            console.log('there was an error getting tasks');
        }
    }
}

