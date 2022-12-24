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
    'Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday'
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
        let events = Math.random() < 0.4
        if (events) {
            events = []
            const randomEvents = Math.floor(Math.random() * 10)
            for (let i = 0; i < randomEvents; i++) {
                events.push(
                    {
                        title: 'Event #' + i,
                        time: '0'+i+':00:00'
                    }
                )
            }
        }

        currentMonth[i] = {
            value: startInterval++,
            type: 'in',
            events: events
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
                <div class="calendar flex flex-col overflow-auto">
                    <div class="flex justify-between w-full gap-20 mb-20">
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
                    <div class="grid w-[1150px] place-content-center grid-cols-7">
                        <div 
                        v-for="date in dates" 
                        :key="date"
                        class="text-center text-primary_white/[0.5] font-medium mb-20"
                        >
                            {{ date }}
                        </div>
                        <hr class="col-span-7 mb-15">
                        <div 
                        v-for="date in selectedMonth" 
                        :key="date"
                        class="text-primary_light_green border h-[105px] px-5 overflow-auto"
                        :class="isToday(date.type, months[month], date.value, year)? 'bg-dark/[0.5]' : ''"
                        >
                            <div 
                            class="w-full text-right"
                            :class="date.type === 'out'? 'text-primary_white/[0.2]' : ''"
                            >
                                {{ date.value }}
                            </div>
                            <div
                            v-for="(event, i) in date.events"
                            :key="i"
                            >   
                                <div 
                                v-if="date.events.length < 3 "
                                class="text-[12px] flex justify-between bg-primary_green rounded-lg pl-10 pr-5 mb-5"
                                >
                                    <span 
                                    class="w-full text-primary_blue font-medium truncate">
                                        {{ event.title }}
                                    </span>
                                    <span
                                    class="text-primary_blue/[0.7]">
                                        {{ event.time }}
                                    </span>
                                </div>
                                
                                <div 
                                v-else 
                                class="text-[12px] pl-10 pr-5 bg-primary_green rounded-lg mb-5"
                                >
                                    <div
                                    v-if="i === 0 || i === 1"
                                    class="flex justify-between"
                                    >
                                        <span 
                                        class="w-full text-primary_blue font-medium truncate">
                                            {{ event.title }}
                                        </span>
                                        <span
                                        class="text-primary_blue/[0.7]">
                                            {{ event.time }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div 
                            class="text-primary_green text-[10px] mt-[-3px] pl-10"
                            v-if="date.events"
                            >
                                <div
                                v-if="date.events.length > 2"
                                >
                                    {{ date.events.length - 2 }} more...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
