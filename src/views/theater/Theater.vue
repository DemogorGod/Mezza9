<script setup>
import { ref, defineAsyncComponent, shallowRef } from 'vue'


const theaterItems = shallowRef([
    {
        name: 'Alerts',
        components: [
            {
                Name: 'Info',
                'component': defineAsyncComponent(() => import('../components/alerts/InfoAlert.vue')),
            },
            {
                Name: 'Success',
                'component': defineAsyncComponent(() => import('../components/alerts/SuccessAlert.vue')),
            },
            {
                Name: 'Warning',
                'component': defineAsyncComponent(() => import('../components/alerts/WarningAlert.vue')),
            },
            {
                Name: 'Loading',
                'component': defineAsyncComponent(() => import('../components/alerts/LoadingAlert.vue')),
            },
        ]
    },
    {
        name: 'Avatars',
        components: [
            {
                Name: 'Placeholder',
                'component': defineAsyncComponent(() => import('../components/avatars/PlaceholderAvatar.vue')),
            },
            {
                Name: 'Initials',
                'component': defineAsyncComponent(() => import('../components/avatars/InitialsAvatar.vue')),
            },
            {
                Name: 'Image',
                'component': defineAsyncComponent(() => import('../components/avatars/ImageAvatar.vue')),
            },
            {
                Name: 'Stacked',
                'component': defineAsyncComponent(() => import('../components/avatars/StackedAvatars.vue')),
            },
        ]
    },
    {
        name: 'Badges',
        components: [
            {
                Name: 'Dots',
                'component': defineAsyncComponent(() => import('../components/badge/DotBadges.vue')),
            },
            {
                Name: 'Icons',
                'component': defineAsyncComponent(() => import('../components/badge/IconBadges.vue')),
            },
            {
                Name: 'Roman Numerals',
                'component': defineAsyncComponent(() => import('../components/badge/RomanNumeralBadges.vue')),
            },
            {
                Name: 'Text',
                'component': defineAsyncComponent(() => import('../components/badge/TextBadges.vue')),
            },
        ]
    },
    {
        name: 'Buttons',
        components: [
            {
                Name: 'Primary',
                'component': defineAsyncComponent(() => import('../components/buttons/PrimaryButton.vue')),
            },
            {
                Name: 'Outline',
                'component': defineAsyncComponent(() => import('../components/buttons/OutlineButton.vue')),
            },
            {
                Name: 'Text',
                'component': defineAsyncComponent(() => import('../components/buttons/TextButton.vue')),
            },
            {
                Name: 'Error',
                'component': defineAsyncComponent(() => import('../components/buttons/ErrorButton.vue')),
            },
            {
                Name: 'Disabled',
                'component': defineAsyncComponent(() => import('../components/buttons/DisabledButton.vue')),
            },
            {
                Name: 'Loading',
                'component': defineAsyncComponent(() => import('../components/buttons/LoadingButton.vue')),
            },
            {
                Name: 'Grouped Buttons',
                'component': defineAsyncComponent(() => import('../components/buttons/GroupedButtons.vue')),
            },
            {
                Name: 'Icon',
                'component': defineAsyncComponent(() => import('../components/buttons/IconButton.vue')),
            },
            {
                Name: 'Floater',
                'component': defineAsyncComponent(() => import('../components/buttons/FloaterButton.vue')),
            },
            {
                Name: 'Grouped Icons',
                'component': defineAsyncComponent(() => import('../components/buttons/GroupedIcons.vue')),
            },

        ]
    },
    {
        name: 'Tooltips',
        components: [
            {
                Name: 'Top Left',
                'component': defineAsyncComponent(() => import('../components/tooltips/TopLeftTooltip.vue')),
            },
            {
                Name: 'Top Center',
                'component': defineAsyncComponent(() => import('../components/tooltips/TopCenterTooltip.vue')),
            },

            {
                Name: 'Top Right',
                'component': defineAsyncComponent(() => import('../components/tooltips/TopRightTooltip.vue')),
            },
            {
                Name: 'Middle Left',
                'component': defineAsyncComponent(() => import('../components/tooltips/MiddleLeftTooltip.vue')),
            },
            {
                Name: '',
                // 'component': defineAsyncComponent(() => import('../components/tooltips/TopCenterTooltip.vue')),
            },

            {
                Name: 'Middle Right',
                'component': defineAsyncComponent(() => import('../components/tooltips/MiddleRightTooltip.vue')),
            },
            {
                Name: 'Bottom Left',
                'component': defineAsyncComponent(() => import('../components/tooltips/BottomLeftTooltip.vue')),
            },
            {
                Name: 'Bottom Center',
                'component': defineAsyncComponent(() => import('../components/tooltips/BottomCenterTooltip.vue')),
            },

            {
                Name: 'Bottom Right',
                'component': defineAsyncComponent(() => import('../components/tooltips/BottomRightTooltip.vue')),
            },
        ]
    },
])

</script>

<template>
    <div class="page_container flex gap-10 flex-col">
        <h1 class="font-bold">The Theater</h1>
        <p class="font-light">Stevan Najeeb's personal component library</p>
        <hr>
        <div class="h-full w-full my-20">
            <div 
            v-for="item in theaterItems"
            :key="item"
            class="w-full mb-40" 
            >
                <h1 class="font-medium mb-5">{{item.name}}</h1>
                <div class="flex items-center flex-wrap gap-20"
                >
                    <div 
                    v-for="c in item.components"
                    :key="c"
                    :class="item.name === 'Tooltips'? 'w-[32%] px-1/3' : ''"
                    >
                        <span class="text-[12px]">{{c.Name}}</span>
                        <component 
                        :is="c.component"
                        />
                    </div>
                </div>
                <hr class="mt-20">
            </div>
        </div>
    </div>
</template>
