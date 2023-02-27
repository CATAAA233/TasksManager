<template>
    <PageTitle title="Dashboard"/>
    <div class="Body__TodayTasks">
        <div class="Body__TodayTasks__TitleContainer">
            <div class="Body__TodayTasks__TitleContainer__Title">
                <p>
                    Tasks
                </p>
            </div>
        </div>
        <div class="Body__TodayTasks__CardsContainer">
            <div v-for=" item in data">
                <NuxtLink :href="'task/' + item.id">
                    <div>
                        <TaskCard :title="item.title" />
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TasksManagerApi from '~~/utils/TasksManagerApi';
const hola = new TasksManagerApi();
const data = await hola.getTasks();
console.log(data);
console.log(data && data[0]);
const visible = ref<boolean>(false);

</script>

<style>
.Body__Title {
    display: flex;
    align-items: center;
    height: 5rem;
    font-family: IBM-SemiBold;
    border-bottom: 1px solid #bebebe;
}

.Body__TodayTasks {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
}

.Body__TodayTasks__TitleContainer {
    display: flex;
    justify-content: space-between;
}

.Body__TodayTasks__TitleContainer__Title {
    display: flex;
    align-items: center;
    column-gap: 1.5rem;
}

.Body__TodayTasks__TitleContainer__Title>p {
    font-family: IBM-SemiBold;
    font-size: 1.7rem;
}

.Body__TodayTasks__TitleContainer__Title__Button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border: 1px dashed #bebebe;
}

.Body__TodayTasks__TitleContainer__Title__Button>img {
    width: 50%;
    height: 50%;
}

.Body__TodayTasks__CardsContainer {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    gap: 1rem;
}

.ProfileStatics__Container {
    transition: all 1s ease-out;
    right: -600px;
}

@media screen and (min-width: 1600px) {
    .Body__TodayTasks__CardsContainer {
        grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
}

@media screen and (max-width: 1280px) {
    .ProfileStatics__Container {
        position: absolute;
    }
}
</style>