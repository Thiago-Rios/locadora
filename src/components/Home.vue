<template>
  <div class="hello">
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
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('INICIALIZAR_STORE')
  },
  data: function() {
    return {
      mostrarFilmes: true,
      msg: "Locadora de Filmes (─‿─)",
      horas: new Date().getHours(),
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
    filmesOrdenados() {
      if (this.filmes.length > 0) {
        const compare = function(a, b) {
          if (a.titulo.toLowerCase() < b.titulo.toLowerCase()) return -1;
          if (a.titulo.toLowerCase() > b.titulo.toLowerCase()) return 1;
          return 0;
        };
        return this.filmes.slice().sort(compare);
      }
      return [];
    },
    filmes() {
      return this.$store.getters.filmes
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
