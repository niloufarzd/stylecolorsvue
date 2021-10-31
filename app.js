new Vue({
    el:"#app",
    data:{
        colors :["red","blue","yellow","green"],
        mainColor:'black',

    },
    methods: {
        productColor(color){
            this.mainColor=color
        }
    },
})