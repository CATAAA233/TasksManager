import { TasksApi } from "~~/api/tasksApi";

export const hello=async()=>{
    console.log('hello world');
    console.log('Getting Tasks');
    try {
        // const { data } = await TasksApi().get<TaskModel[]>('tasks');
        return 'hola';
    } catch (error) {
        console.log('there was an error getting tasks');
    }
}

export async function queonda(){
    console.log('que onda');
    const data = hello();
    console.log(data);
}