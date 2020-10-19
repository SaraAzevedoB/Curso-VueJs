new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    //  1) Exibir em "resultado" o texto 'Valor Diferente' enquanto
    // "valor" for diferente de 37 - "valor" é alterado pelos botões.
    // Mostrar 'Valor Igual' quando "valor" for igual a 37 
    computed:{
        resultado(){
           return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
        }
    },
    // 2) Monitorar as mudança de "resultado" e reiniciar "valor"
    // para 0 depois de 5 segundos (dica: setTimeout(..., 5000) 
    watch: {
        resultado() {
          setTimeout(() => {
            this.valor = 0;
          }, 5000);
        },
      },

});