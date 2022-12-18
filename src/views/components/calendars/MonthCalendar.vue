<script setup>
import { onMounted, ref, watch } from 'vue'

const demo = ref(false)

const demo_modal = document.getElementById('demo_modal')
document.addEventListener('click', (event) => {
    if(event.target.id === 'demo_modal'){
        demo.value = false
    }
})

const hoverLeft = ref(false)
const hoverRight = ref(false)


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

const today = ref(new Date())

const year = ref(today.value.getFullYear())
const month = ref(today.value.getMonth())

const selectedMonth = ref([])

const moveUp = () => {
    let m = month.value + 1
    let y = year.value
    if(m > 11){
        y += 1
        m = 0
    }
    year.value = y
    month.value = m
}

const moveDown = () => {
    let m = month.value - 1
    let y = year.value
    if(m < 0){
        y -= 1
        m = 11
    }
    year.value = y
    month.value = m
}

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}

const calculateMonths = (month, year) => {
    let previousMonth = []
    let previousMonthDays = daysInMonth(month , year)
    let currentMonth = Array(42).fill({})
    let currentMonthDays = daysInMonth(month + 1 , year)
    let startDate = new Date((month + 1) +' 1, ' + year).getDay()


    for (let i = 0; i < startDate; i++) {
        currentMonth[i] = {
            value: previousMonthDays - (startDate - i -1),
            type: 'out'
        }
    }

    let startInterval = 1
    for (let i = startDate; i < (currentMonthDays + startDate); i++) {
        currentMonth[i] = {
            value: startInterval++,
            type: 'in'
        }
    }

    const daysLeft = 42 - (currentMonthDays + startDate)

    for (let j = 0; j < daysLeft; j++) {
        currentMonth[currentMonth.length - (daysLeft - j)] = {
            value: j + 1,
            type: 'out'
        }
    }
    selectedMonth.value = currentMonth
}

watch([month, year], () => {
    calculateMonths(month.value, year.value)
})

onMounted(() => {
    calculateMonths(month.value, year.value)
})

const isToday = (type, m, d, y) => {
    if(type === 'in'){
        if(!d){
            return false
        }
        const today = new Date()
        const newDate = new Date(m + ' ' + d + ', ' + y)
        return today.toDateString() === newDate.toDateString()
    } else {return false}
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
                <div class="calendar flex flex-col h-[450px] w-[400px] overflow-auto">
                    <div class="flex justify-between w-full mb-20">
                        <span class="font-bold text-[24px] flex items-center gap-5">
                            <button 
                            class="btn_text flex items-center"
                            @mouseenter="hoverLeft = true"
                            @mouseleave="hoverLeft = false"
                            @click="moveDown()"
                            >
                                <unicon 
                                name="angle-left" 
                                :fill="hoverLeft? '#EDF5E1':'#5CDB95'"
                                width="32"
                                height="32"
                                ></unicon>
                            </button>
                            {{ months[month] }}
                        </span>
                        <span class="font-bold text-primary_green text-[24px] ] flex items-center gap-5">
                            {{ year }}
                            <button 
                            class="btn_text flex items-center"
                            @mouseenter="hoverRight = true"
                            @mouseleave="hoverRight = false"
                            @click="moveUp()"
                            >
                                <unicon 
                                name="angle-right" 
                                :fill="hoverRight? '#EDF5E1':'#5CDB95'"
                                width="32"
                                height="32"
                                ></unicon>
                            </button>
                        </span>
                    </div>
                    <div class="grid w-full place-content-center grid-cols-7 gap-25">
                        <div 
                        v-for="date in dates" 
                        :key="date"
                        class="w-20 text-center text-primary_white/[0.5] font-medium mb-10"
                        >
                            {{ date }}
                        </div>
                        <div 
                        v-for="date in selectedMonth" 
                        class="w-20 text-center text-dark text-primary_light_green"
                        :class="date.type === 'out'? 'text-primary_white/[0.2]' : 'font-medium'"
                        :style="isToday(date.type, months[month], date.value, year)? 
                        'background: white; color: #05386B; border-radius: 20%;' : ''"
                        >
                            {{ date.value }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
