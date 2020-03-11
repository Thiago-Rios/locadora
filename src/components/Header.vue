<template>
  <div>
    <h1>Bem vindo a {{ msg }}</h1>
    <h3 v-if="horas >= 7 && horas <17" id="aberta">ABERTA</h3>
    <h3 v-else-if="horas >= 17 && horas < 18" id="pfechar">PRÓXIMA DE FECHAR</h3>
    <h3 v-else id="fechada">FECHADA</h3>
    <router-link active-class="active" tag="button" :to="{ name: 'carrinho'}" class="btn btn-primary btn-lg">
      Carrinho: {{ quantidadeCarrinho }} filmes
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function(){
      return {
        msg: "Locadora de Filmes (─‿─)",
        horas: new Date().getHours(),
        quantidadeCarrinho: ''
    }
  },
  methods: {
    mostrarCarrinho() {
        this.$router.push({ name: "carrinho"})
    }
  }
}
</script>

<style>
#aberta {
  color: aqua
}
#pfechar {
  color: darkorange
}
#fechada {
  color: red
}
</style>