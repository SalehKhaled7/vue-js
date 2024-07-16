// console.log("hello")
// you can drop ; for vue
const app = Vue.createApp({
    //emplate
    // template: '<h2>title from app.js</h2>',

    //data
    data(){
        return{
            title   : 'book title 1',
            author  : 'ali khaled',
            books   : 12
    
        }
    },
    //function
    methods:{
        changeTitle (){
            this.title = 'new tilte'
        },
        changeTitleWArg (tilte){
            this.title = tilte
        }


    }

})

app.mount('#app')