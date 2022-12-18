<script setup>
import { ref } from 'vue';

const hovering = ref(false)
</script>

<template>
    <div class="component_container"
    >
        <button 
        class="button btn_primary flex items-center"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
        >
            <unicon name="play" :fill="!hovering? '#5CDB95': '#EDF5E1'"></unicon>
        </button>
    </div>
</template>
