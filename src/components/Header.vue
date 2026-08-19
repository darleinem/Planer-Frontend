<script setup lang="ts">
import { ref } from 'vue';

const headerString = ref(getHeaderString());
const timeString = ref(getTimeString());

function getTimeString() {
    const date = new Date();
    return new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr';
}

function getHeaderString(): string {
    const date = new Date();
    let concatenatedHeaderString = 'Heute ist der ' + date.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    return concatenatedHeaderString;
}

</script>

<template>
    <div class="header-container">
        <div class="header-text">
            <p>{{ headerString }}</p>
        </div>
        <div class="header-time">
            <p>{{ timeString }}</p>
        </div>
    </div>

</template>

<style scoped>
.header-container {
    display: flex;
    width: 100%;
}

.header-text {

    background-color: #dd5d5d;
    padding: 10px;
}

.header-time {
    flex: 1;
    text-align: right;
    padding: 10px;
}

p {
    margin: 0;
    font-size: 40px;
    font-weight: bold;
    color: #faf9f9;
}
</style>
