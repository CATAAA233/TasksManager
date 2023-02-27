import axios from "axios";
const runtimeConfig = useRuntimeConfig()

export const TasksApi =()=>{
    return axios.create({
        baseURL: runtimeConfig.public.baseURL,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${runtimeConfig.public.auth}`
        },
        params:{
            token: runtimeConfig.public.auth
        }
    });
} 