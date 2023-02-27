<template>
    <div>
        <PageTitle title="Task Detail" />
        <div class="Details__Body">
            <div class="Details__Body__Container">
                <div class="Task__Title">
                    <input v-model="title" type="text">
                </div>
                <div class="Task__Details">
                    <div class="Task__Details__Field">
                        <label for="">Description</label>
                        <input v-model="description" type="text">
                    </div>

                    <div class="Task__Details__Field">
                        <label for="">Comments</label>
                        <input v-model="comments" type="text">
                    </div>

                    <div class="Task__Details__Field">
                        <label for="">Tags</label>
                        <input v-model="tags" type="text">
                    </div>

                    <div class="Task__Details__Field">
                        <label for="">Due date</label>
                        <input v-model="dueDate" type="date">
                    </div>

                    <div class="Task__Details__Field">
                        <label for="">Actual Status({{ taskRretrieved?.is_completed ? 'Completed' : 'Not Completed'
                        }})</label>
                        <div class="Task__Details__Field__Status">
                            <div>
                                <label for="">Completed</label>
                                <input v-model="is_completed" :value="true" type="radio">
                            </div>
                            <div>
                                <label for="">Not completed</label>
                                <input v-model="is_completed" :value="false" type="radio">
                            </div>
                        </div>
                    </div>
                    <div class="Task__Actions">
                        <button @click="deleteTask">Detele task</button>
                        <button @click="updateTask">Update task</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import TasksManagerApi from '~~/utils/TasksManagerApi';
const api = new TasksManagerApi();
const router = useRouter();
const route = useRoute().params;
const taskId = parseInt(route.id.toString());
//getting task from API
const taskRretrieved = await api.getOneTask(taskId);
//Update data
const title = ref(taskRretrieved ? taskRretrieved?.title : '')
const description = ref(taskRretrieved ? taskRretrieved?.description : '')
const comments = ref(taskRretrieved ? taskRretrieved?.comments : '')
const is_completed = ref(taskRretrieved ? taskRretrieved?.is_completed : false)
const tags = ref(taskRretrieved ? taskRretrieved?.tags : '');
const dueDate = ref(taskRretrieved ? taskRretrieved?.due_date : '');
const updateTask = async () => {
    console.log('actualizando')
    const task: TaskModel = {
        title: title.value,
        is_completed: is_completed.value,
        description: description.value,
        comments: comments.value,
        tags: tags.value
    }
    const status = await api.updateTask(taskId, task);
    if (status === 201) {
        router.push('/')
    }
}
const deleteTask= async()=>{
    const status = await api.deleteTask(taskId);
    if (status === 201) {
        router.push('/')
    }
}
</script>


<style>
.Details__Body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 12rem);
    font-family: IBM-Regular;
    border-radius: 1rem;

}

.Details__Body__Container {
    width: 40rem;
    height: 80%;
    padding: 2rem;
    border-radius: 1rem;
    background-color: white;
}

input {
    border: 0;
    border-bottom: 1px solid #bebebe;
}

.Task__Title>input {
    text-align: center;
    width: 100%;
    font-family: IBM-Regular;
    font-size: 2rem;
    border: 0;
    border-bottom: 1px solid #bebebe;
}

.Task__Details {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    height: 80%;
    margin: 2rem 0;
    row-gap: 2rem;
}

.Task__Details__Field {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    font-size: 1.3rem;
    width: 100%;
}


.Task__Details__Field>input {
    font-size: 1.1rem;
    width: 100%;
}

.Task__Details__Field__Status {
    display: flex;
    column-gap: 1rem;
}

.Task__Actions {
    display: flex;
    column-gap: 2rem;
}

.Task__Actions>button {
    border: 0;
    width: 10rem;
    height: 2rem;
    border-radius: 1rem;
    cursor: pointer;
}

.SuccessMessage>p {
    color: green;
}
</style>