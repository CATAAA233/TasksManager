import axios, { AxiosInstance } from "axios";

export default class TasksManagerApi {
    private readonly runtimeConfig = useRuntimeConfig()
    private readonly axiosInstance: AxiosInstance;
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.runtimeConfig.public.baseURL,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${this.runtimeConfig.public.auth}`
            },
            params:{
                token: this.runtimeConfig.public.auth
            }
        });
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
