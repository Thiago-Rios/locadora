<template>
  <div class="row">
    <Header class="col-12" title="Locadora de Filmes" />
    <div class="col-12 mt-5">
      <h3>Esse é o produto com o id {{ $route.params.id }}</h3>
    </div>
 
    <div class="col-5 mt-1">
      <img v-bind:src="filme.imagem" alt="imagem do filme"/>
    </div>
    <div class="col-7 mt-1">
      <h1>{{filme.titulo}}</h1>
      <p v-html="filme.descricao"></p>
      <p>{{filme.valor | formatarPreco("R$")}}</p>
      <button @click="editar">Editar Filme</button>
      <router-view></router-view>
    </div>
  </div>
</template>
 
<script>
import Header from "./Header";
 
export default {
  components: {
    Header
  },
  data() {
    return {
      filme: {
        id: 4,
        titulo: "Bunny Girl",
        descricao: "Um filme de romance e misterio",
        valor: 20,
        imagem: "https://img1.ak.crunchyroll.com/i/spire2/6eb7cc17a5b2ef8ffa11ae011fd7d3971555765943_full.jpg",
        estoqueDisponivel: 0,
        avaliacao: 4
      }
    };
  },
  methods: {
    editar() {
      this.$router.push({ name: 'editar-filme'})
    }
  }
};
</script>
 
<style scoped>
</style>