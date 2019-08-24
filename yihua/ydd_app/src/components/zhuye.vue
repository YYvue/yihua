<template>
    <div>
    <indexhead></indexhead>
    <lunbo></lunbo>
    <indexbody></indexbody>
    
    </div>
</template>
<script>
import indexhead from './indexhead'
import indexbody from './indexbody'
import lunbo from './lunbo'
export default {
    data() {
        return {
            
        }
    },
    components:{
        'indexhead':indexhead,
        'indexbody':indexbody,
        'lunbo':lunbo,
    }
}
</script>