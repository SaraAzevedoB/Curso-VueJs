import Vue from 'vue'

export default new Vue({
    methods: {
        //variaveis global
        setUsuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        //sempre que o evento acima acontecer o callback será chamado
        onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
})