<template>
  <div class="hello">
    <h1>Bem vindo a {{ msg }}</h1>

    <h3 v-if="horas >= 7 && horas <17" id="aberta">ABERTA</h3>
    <h3 v-else-if="horas >= 17 && horas < 18" id="pfechar">PRÓXIMA DE FECHAR</h3>
    <h3 v-else id="fechada">FECHADA</h3>

    <div class="hhh">
      <div v-bind:key="filme.id" v-for="filme in filmes">
        <div class="card">
          <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem do filme">
          <div class="card-body">
            <h5 class="card-title">{{ filme.titulo }}</h5>
            <p class="card-text">{{ filme.descricao }}</p>
            <p class="card-text">{{ filme.valor }}</p>
            <a href="#" class="btn btn-primary">ALUGAR</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
      msg: "Locadora de Filmes (─‿─)",
      horas: new Date().getHours(),
      filmes: [
        { id: 1, titulo: "Kimi no na wa", descricao: "Um filme de romance com viagem temporal", valor: "R$20", imagem: "https://s.aficionados.com.br/imagens/mv5bmza1mgjlzjatnwi1os00mtczlwe5n2ity2i5m2yxy2ziyjq0l2ltywdll2ltywdlxkeyxkfqcgdeqxvynzayodm5ode-v1-sx707-cr0-0-707-999-al_cke.jpg"},
        { id: 2, titulo: "Tenki no Ko", descricao: "Um filme de romance", valor: "R$20", imagem: "https://img1.ak.crunchyroll.com/i/spire3/45e5866b5aed0f83bcfdb7565006b2451568165472_full.jpg"},
        { id: 3, titulo: "Dragon Ball Super Broly", descricao: "Um filme de porrada", valor: "R$20", imagem: "https://www.otakupt.com/wp-content/uploads/2018/11/Poster-de-Dragon-Ball-Super-Broly-1.jpg"},
        { id: 4, titulo: "Bunny Girl", descricao: "Um filme de romance e misterio", valor: "R$20", imagem: "https://img1.ak.crunchyroll.com/i/spire2/6eb7cc17a5b2ef8ffa11ae011fd7d3971555765943_full.jpg"}
      ]
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
#aberta {
  color: aqua
}
#pfechar {
  color: darkorange
}
#fechada {
  color: red
}
.hhh {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
  height: 650px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
