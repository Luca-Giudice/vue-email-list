const app = Vue.createApp({
    name: 'Demo Api',
    data(){
         return{
        mails:[]
    }
    },
    methods:{
        getRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.mails.push(response.data.response);
        });
        }
    },
   
    mounted(){
        for(let i = 0; i < 10; i++) {
            this.getRandomMail();
        }
    }
});

app.mount('#root');