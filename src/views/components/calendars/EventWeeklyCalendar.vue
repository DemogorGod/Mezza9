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
    'Sunday',
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
])

const dayTimes = ref([
    '12 AM',
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
])

const today = ref(new Date())
const startDate = ref('')

const selectedWeek = ref([])

const moveUp = () => {
    startDate.value = new Date(new Date(startDate.value).setDate(new Date(startDate.value).getDate() + 7) )
}

const moveDown = () => {
    startDate.value = new Date(new Date(startDate.value).setDate(new Date(startDate.value).getDate() - 7) )
}

const calculateWeek = (date) => {
    selectedWeek.value = []
    let startD = date
    for (let i = 0; i < 7; i++) {
        let allDayEvents = Math.random() < 0.2
        if (allDayEvents) {
            allDayEvents = []
            const randomEvents = Math.floor(Math.random() * 3)
            for (let i = 0; i < randomEvents; i++) {
                allDayEvents.push(
                    {
                        title: 'all-day #' + i
                    }
                )
            }
        }
        let timeEvents = Math.random() < 0.5
        if(timeEvents){
            timeEvents = []
            const randomEvents = Math.floor(Math.random() * 15)
            for (let i = 0; i < randomEvents; i++) {
                let randomHr = Math.floor(Math.random() * 12)
                let randomMin = Math.floor(Math.random() * 59)
                let randomMeridiem = Math.random() < 0.5? 'AM': 'PM'
                let randomLengths = [30, 60, 90]
                let randomLength = randomLengths[Math.floor(Math.random() * 3)]
                timeEvents.push(
                    {
                        title: 'Event #' + i,
                        hour: randomHr + " " + randomMeridiem,
                        minitues: randomMin,
                        length: randomLength
                    }
                )
            }
        }
        selectedWeek.value.push(
            {
                date: dates.value[new Date(startD).getDay()].substring(0,3) + ' ' + new Date(startD).getDate(),
                allDay: allDayEvents,
                timeEvents: timeEvents
            }
        )

        startD = new Date(new Date(startD).setDate(new Date(startD).getDate() + 1) )
    }
}

watch(startDate, () => {
    calculateWeek(startDate.value)
})

onMounted(() => {
    startDate.value = new Date(new Date().setDate(new Date().getDate() - today.value.getDay()) )
    calculateWeek(startDate.value)
})

const dateMatches = (time, events) => {
    if(events) {
        // arr.filter(item => item.arrayWithvalue.indexOf('4') !== -1)
        const eventsFound = events.filter(item => item.hour.indexOf(time) !== -1)
        return eventsFound
    } else return false
}

// const isToday = (date) => {
//     if(!date){
//         return false
//     }
//     const today = new Date()
//     const newDate = new Date(m + ' ' + d + ', ' + y)
//     return today.toDateString() === newDate.toDateString()
// }
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
                <div class="calendar flex flex-col h-[90vh] overflow-auto">
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
                            {{ months[startDate.getMonth()] }}
                        </span>
                        <span class="font-bold text-primary_green text-[24px] ] flex items-center gap-5">
                            {{ startDate.getFullYear() }}
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
                    <div class="h-full w-[1150px] flex flex-col">
                        <div class="flex w-full">
                            <div class="w-[100px]"> </div>
                            <div class="grid grid-cols-7 w-full">
                                <div 
                                v-for="date in selectedWeek" 
                                :key="date"
                                class="text-center text-primary_white/[0.5] font-medium mb-20"
                                >
                                    {{ date.date }}
                                </div>
                            </div>
                        </div>
                        <div class="h-[73vh] overflow-auto text-primary_white/[0.5] border-b-[2px] border-b-primary_white/[0.5]">
                            <div class="flex sticky top-0 bg-primary_blue border-b
                            border-b-primary_white/[0.5] border-t-[2px] border-t-primary_white/[0.5]">
                                <div class="text-[12px] w-[100px] pr-20 text-right">
                                    all-day
                                </div>
                                <div class="grid grid-cols-7 w-full">
                                    <div 
                                    v-for="date in selectedWeek" 
                                    :key="date"
                                    class="text-center text-primary_white/[0.5] font-medium border-l border-primary_white/[0.2]"
                                    >
                                        <div v-if="date.allDay" class="w-full">
                                            <div 
                                            v-for="event in date.allDay"
                                            :key="event"
                                            class="text-[12px] w-full bg-primary_green rounded-lg pl-10 pr-5 my-5"
                                            >
                                                <span 
                                                class="w-full text-primary_blue font-medium truncate">
                                                    {{ event.title }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div 
                            class="flex bg-primary_blue"
                            >
                                <div class="text-[12px] w-[100px] pr-20 text-right"></div>
                                <div class="grid grid-cols-7 w-full">
                                    <div 
                                    v-for="slot in 7" 
                                    :key="slot"
                                    class="text-center text-primary_white/[0.5] font-medium border-l border-primary_white/[0.2]
                                    border-b border-b-primary_white/[0.2] h-[20px]"
                                    > </div>
                                </div>
                            </div>
                            <div 
                            v-for="(time, timeIndex) in dayTimes"
                            :key="time"
                            class="flex bg-primary_blue relative"
                            >
                                <div class="text-[12px] w-[100px] pr-20 text-right mt-[-12px]">
                                    {{time}}
                                </div>
                                <div class="grid grid-cols-7 w-full">
                                    <div 
                                    v-for="date in selectedWeek" 
                                    :key="date"
                                    class="text-center text-primary_white/[0.5] font-medium border-l border-primary_white/[0.2]
                                    border-b border-b-primary_white/[0.2] h-[75px]"
                                    >
                                        <div 
                                        v-if="date.timeEvents && dateMatches(time, date.timeEvents).length > 0"
                                        class="w-full h-full flex gap-5 relative"
                                        :class="timeIndex === 23? 'overflow-hidden': ''"
                                        >
                                            <div
                                            v-for="(event, i) in dateMatches(time, date.timeEvents)"
                                            :key="i"
                                            class="text-[12px] bg-primary_green/[.75] rounded-lg px-5 text-primary_blue truncate
                                            absolute border border-primary_dark_green overflow-hidden z-50"
                                            :style="{
                                                top: `${event.minitues/60 * 100}%`,
                                                left: `${i * (1/dateMatches(time, date.timeEvents).length * 100)}%`,
                                                width: `${1/dateMatches(time, date.timeEvents).length * 100}%`,
                                                height: `${event.length/60 *100}%`,
                                            }"
                                            >
                                                <span class="whitespace-nowrap">
                                                    {{ event.title }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
