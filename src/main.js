import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// https://github.com/antonreshetov/vue-unicons
import Unicon from 'vue-unicons'
import { 
uniLayerGroupMonochrome,
uniCommentInfo,
uniCommentVerify,
uniCommentExclamation,
uniSpinner,
uniPlay,
uniAngleDoubleLeft, 
uniAngleDoubleRight, 
uniCrosshairs,
uniUserCircle,
uniPadlock,
uniThumbsUp,
} from 'vue-unicons/dist/icons'


Unicon.add([
uniLayerGroupMonochrome, 
uniCommentInfo,
uniCommentVerify,
uniCommentExclamation,
uniSpinner,
uniPlay,
uniAngleDoubleLeft, 
uniAngleDoubleRight, 
uniCrosshairs,
uniUserCircle,
uniPadlock,
uniThumbsUp,
])

createApp(App).use(Unicon,
{
    fill: 'gray',
    height: 24,
    width: 24
}    
).mount('#app')
