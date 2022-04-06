// Aplicación Vue
Vue.createApp({
    data() {
        return{
            number1: 0,
            number2: 0,
            result: 0,
            alert:'',
            alertClass:''
        }
    },
    methods: {
        generateRandom(){
            this.number1 = chance.integer({ min: 1, max: 10 });
            this.number2 = chance.integer({ min: 1, max: 10 });            
        },
        checkTheAnswer(){
            if(this.result == this.number1 + this.number2){
                this.alert = "👍 El resultado es correcto";
                this.alertClass = "valid";
                this.generateRandom();                
            }else{
                this.alert = "👎 El resultado es incorrecto";
                this.alertClass = "invalid";
            }
        }
    },
    mounted(){
        this.generateRandom();
    }
}).mount('#app');