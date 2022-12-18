<script setup>
// <script setup>
import { ref } from 'vue';

const hovering1 = ref(false)
const hovering2 = ref(false)
const hovering3 = ref(false)
//         class="button btn_primary flex items-center"
//         @mouseenter="hovering = true"
//         @mouseleave="hovering = false"
//             <unicon name="play" :fill="!hovering? '#5CDB95': '#EDF5E1'"></unicon>

</script>

<template>
    <div class="component_container">
        <div class="flex items-center gap-[2px]">
            <button 
            class="button btn_primary rounded-lg rounded-r flex items-center" 
            @mouseenter="hovering1 = true"
            @mouseleave="hovering1 = false"
            >
                <unicon name="angle-double-left" :fill="!hovering1? '#5CDB95': '#EDF5E1'"></unicon>
            </button>
            <button 
            class="button btn_primary rounded-none flex items-center"
            @mouseenter="hovering2 = true"
            @mouseleave="hovering2 = false"
            >
                <unicon name="crosshairs" :fill="!hovering2? '#5CDB95': '#EDF5E1'"></unicon>
            </button>
            <button 
            class="button btn_primary rounded-lg rounded-l flex items-center"
            @mouseenter="hovering3 = true"
            @mouseleave="hovering3 = false"
            >
                <unicon name="angle-double-right" :fill="!hovering3? '#5CDB95': '#EDF5E1'"></unicon>
            </button>
        </div>
    </div>
</template>

