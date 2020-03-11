<template>
  <div class="hello">
    <Header/>
    <h3>Filmes encontrados</h3>
    <div class="hhh" v-if="mostrarFilmes">
      <div v-bind:key="filme.id" v-for="filme in filmesOrdenados">
        <div class="card">
          <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem do filme">
          <div class="card-body">
            <router-link tag="h5" class="card-title" :to="{name: 'filme', params: {id: filme.id}}">{{ filme.titulo }}</router-link>
            <p class="card-text">{{ filme.descricao }}</p>
            <span class="mensagem-estoque" v-if="filme.estoqueDisponivel - quantdadeCarinhoPorFilme(filme) === 0">
              Indisponível
            </span>
            <span class="mensagem-estoque" v-else-if="filme.estoqueDisponivel - quantdadeCarinhoPorFilme(filme) < 5">
              Apenas {{ filme.estoqueDisponivel - quantdadeCarinhoPorFilme(filme) }} itens disponíveis
            </span>
            <span class="mensagem-estoque" v-else>
              Alugue agora
            </span>
            <p class="card-text">{{ filme.valor | formatarValor("R$") }}</p>
            <div class="avalicao">
              <span v-for="n in 5" :key="n" v-bind:class="{'avaliacao-active': checarAvaliacao(n, filme) }">
                <img src="../assets/estrela_vazia.jpg" height="20">
              </span>
            </div>
            <a href="#" @click="incrementar(filme)" v-if="validarAdd(filme)" class="btn btn-primary">ALUGAR</a>
            <a href="#" v-else class="btn btn-primary disabled">ALUGAR</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hhh" id="teste1" v-else>
     <Carrinho/>
    </div>
  </div>
</template>

<script>

import Carrinho from './Carrinho.vue'
import Header from './Header.vue'

export default {
  name: 'Home',
  components: {
    Carrinho,
    Header
    },
  data: function() {
    return {
      mostrarFilmes: true,
      msg: "Locadora de Filmes (─‿─)",
      horas: new Date().getHours(),
      filmes: [
        { id: 1, titulo: "Kimi no na wa", descricao: "Um filme de romance com viagem temporal", valor: 20, imagem: "https://s.aficionados.com.br/imagens/mv5bmza1mgjlzjatnwi1os00mtczlwe5n2ity2i5m2yxy2ziyjq0l2ltywdll2ltywdlxkeyxkfqcgdeqxvynzayodm5ode-v1-sx707-cr0-0-707-999-al_cke.jpg", estoqueDisponivel: 5, avaliacao: 5},
        { id: 2, titulo: "Tenki no Ko", descricao: "Um filme de romance", valor: 20, imagem: "https://img1.ak.crunchyroll.com/i/spire3/45e5866b5aed0f83bcfdb7565006b2451568165472_full.jpg", estoqueDisponivel: 7, avaliacao: 3},
        { id: 3, titulo: "Dragon Ball Z: A Batalha dos Deuses", descricao: "Um filme de porrada", valor: 20, imagem: "https://br.web.img3.acsta.net/pictures/210/456/21045654_20131001150454933.jpg", estoqueDisponivel: 3, avaliacao: 4},
        { id: 4, titulo: "Bunny Girl", descricao: "Um filme de romance e misterio", valor: 20, imagem: "https://img1.ak.crunchyroll.com/i/spire2/6eb7cc17a5b2ef8ffa11ae011fd7d3971555765943_full.jpg", estoqueDisponivel: 0, avaliacao: 4}
      ],
      carrinho: []
    }
  }, filters: {
    formatarValor: function (valor, simbolo) {
      if(!parseInt(valor)) {
        return "";
      }
      var valorFormatado = (valor.toFixed(2)).replace('.','.')
      return simbolo + " " + valorFormatado
    }
  }, methods: {
    mostrarCarrinho() {
      this.mostrarFilmes = this.mostrarFilmes ? false : true
    },
    incrementar: function(filme){
      this.carrinho.push(filme.id)
    },
    quantdadeCarinhoPorFilme: function(filme) {
      var quantidade = 0;
      for(var i = 0; i < this.carrinho.length; i++) {
        if (filme.id == this.carrinho[i]) {
          quantidade++
        }
      }
      return quantidade
    },
    validarAdd: function(filme) {
      return filme.estoqueDisponivel > this.quantdadeCarinhoPorFilme(filme)
    },
    checarAvaliacao(n, filme) {
      return filme.avaliacao - n >= 0;
    }
  }, computed: {
    quantidadeCarrinho: function() {
      return this.carrinho.length
    },
    filmesOrdenados: function(){
      let filmesOrd = this.filmes
      filmesOrd.sort(function (a, b) {
        if (a.titulo > b.titulo) {
          return 1;
        }
        if (a.titulo < b.titulo) {
          return -1;
        }
        return 0;
      });
      return this.filmes    }
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
li {
  text-align: left
}
.hhh {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#teste1{
  flex-direction: column;
}
.mensagem-estoque{
  font-weight: bold;
}
.card {
  width: 300px;
  height: 100%;
  margin-top: 5px;
}
span.avaliacao-active {
  background-image: url("../assets/estrela_marcada.jpg");
  background-repeat: no-repeat;
  background-size: 20px; 
}
</style>
