new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Estou te Alertando')
        },
        alterarValor(event){
            this.valor = event.target.value
        }
       
       
    }
})