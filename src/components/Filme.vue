<template>
  <div class="row">
    

    <div class="col-12 mt-5">
      <h3>Esse é o produto com o id {{ $route.params.id }}</h3>
    </div>

    <div class="col-5 mt-1">
      <img v-bind:src="filme.imagem" alt="imagem do filme" />
    </div>
    <div class="col-7 mt-1">
      <h1>{{filme.titulo}}</h1>
      <p v-html="filme.descricao"></p>
      <p>{{filme.valor | formatarPreco("R$")}}</p>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data() {
    return {
      filme: 
        { id: 1, titulo: "Kimi no na wa", descricao: "Um filme de romance com viagem temporal", valor: 20, imagem: "https://s.aficionados.com.br/imagens/mv5bmza1mgjlzjatnwi1os00mtczlwe5n2ity2i5m2yxy2ziyjq0l2ltywdll2ltywdlxkeyxkfqcgdeqxvynzayodm5ode-v1-sx707-cr0-0-707-999-al_cke.jpg", estoqueDisponivel: 5, avaliacao: 5},
        
    };
  }
};
</script>

<style scoped>
</style>