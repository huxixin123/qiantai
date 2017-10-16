<template>
    <div>
        from
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
        name:"from",
        created(){
            if(!this.$store.state.states1){
                this.$router.push({path:"/loading",query:{id:"/froms"}})
            }
        },
        computed:{
            ...mapState(["states"])
        }
}
</script>
<style>

</style>


