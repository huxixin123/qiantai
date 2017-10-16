<template>
        <div>
            {{msg}}
        </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    name:"loading",
    data(){
        return{
            msg:"这里是loading页面"
        }
    },
    computed:{
        ...mapState({
            states:(state)=>{
                console.log(this.$store.state.states)
                return state.states;
            }
        })
    },
    created(){
        var id=this.$route.query.id;
        console.log(id=this.$route.query.id)
        if(this.$route.query.id=="/"){
            //console.log(this.$store.state.states)
            this.getAllData({_this:this,id:id});
        }else if(this.$route.query.id=="/froms"){
                this.sedfrom({_this:this,id:id});
        }
    },
    methods:{
        ...mapActions(["getAllData","sedfrom"])
  }
  
}
</script>
<style>

</style>


