<script setup>
import { ref } from 'vue'

const demo = ref(false)

const demo_modal = document.getElementById('demo_modal')
document.addEventListener('click', (event) => {
    if(event.target.id === 'demo_modal'){
        demo.value = false
    }
})

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const dates = ref([
    'S','M','T', 'W','T','F','S'
])


const year = ref(new Date().getFullYear())

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}

const getMonthsDates = (month) => {
    const index = months.findIndex((item) => item === month) + 1
    const daysInMonths = daysInMonth(index, year.value)
    let startDate = new Date(month +' 1, ' + year.value).getDay()
    let monthDates = Array(daysInMonths).fill('')
    
    let startInterval = 1
    for (let i = startDate; i < (daysInMonths + startDate); i++) {
        monthDates[i] =  startInterval++ 
    }
    return monthDates
}

const isToday = (m, d, y) => {
    if(!d){
        return false
    }
    const today = new Date()
    const newDate = new Date(m + ' ' + d + ', ' + y)
    return today.toDateString() === newDate.toDateString()
}
</script>

<template>
    <div class="component_container">
        <div>
            <button 
            class="button btn_primary"
            @click="demo = true"
            >
                Open Calendar
            </button>    
        </div>
        <div
        id="demo_modal"
        v-if="demo"
        class="modal "
        >
            <div class="modal_content ">
                <div class="calendar flex flex-col h-[650px] overflow-auto">
                    <span class="font-bold">
                        {{ year }}
                    </span>
                    <div class="grid grid-cols-4 gap-20">
                        <div 
                        v-for="month in months" 
                        :key="month"
                        class="calendar_card text-white"
                        >
                            {{ month }}
                            <div class="w-[200px] mt-15 flex flex-wrap gap-10">
                                <div 
                                v-for="date in dates" 
                                :key="date"
                                class="w-20 text-center text-primary_white/[0.5] font-medium mb-10"
                                >
                                    {{ date }}
                                </div>
                                <div 
                                v-for="date in getMonthsDates(month)" 
                                :key="date"
                                class="w-20 text-center text-primary_light_green"
                                :class="isToday(month, date, year)? 'bg-white rounded-[20%] text-primary_blue' : ''"
                                >
                                    {{ date }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
