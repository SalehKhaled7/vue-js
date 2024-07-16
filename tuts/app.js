// console.log("hello")
// you can drop ; for vue
const app = Vue.createApp({
    //emplate
    // template: '<h2>title from app.js</h2>',

    //data
    data(){
        return{
            title   : 'al-majarayat',
            author  : 'ibrahim omar al-sakran',
            books   : 12 ,
            showBook : true
    
        }
    },
    //function
    methods:{
        changeTitle (){
            this.title = 'new tilte'
        },
        changeTitleWArg (tilte){
            this.title = tilte
        },
        tuggleShowBooks(){
            this.showBook = !this.showBook
        }


    }

})

app.mount('#app')