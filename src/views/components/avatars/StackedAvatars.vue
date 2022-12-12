<script setup>
import { ref } from 'vue';

const hovering = ref(false)
</script>

<template>
    <div class="component_container">
        <div 
        class="flex"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
        >
            <div class="avatar overflow-hidden margin_transition">
                <img 
                src="/Theo.png" 
                alt="Place holder img, Dog Theo"
                class="w-full"
                >
            </div>
            <div 
            class="avatar overflow-hidden margin_transition"
            :class="hovering? 'ml-[10px]': 'ml-[-30px]'"
            
            >
                <img 
                src="/Theo.png" 
                alt="Place holder img, Dog Theo"
                class="w-full"
                >
            </div>
            <div 
            class="avatar overflow-hidden margin_transition"
            :class="hovering? 'ml-[10px]': 'ml-[-30px]'"
            
            >
                <img 
                src="/Theo.png" 
                alt="Place holder img, Dog Theo"
                class="w-full"
                >
            </div>
        </div>
    </div>
</template>
