<template>
  <div class="hello">
    <h1>Bem vindo a {{ msg }}</h1>

    <h3 v-if="horas >= 7 && horas <17" id="aberta">ABERTA</h3>
    <h3 v-else-if="horas >= 17 && horas < 18" id="pfechar">PRÓXIMA DE FECHAR</h3>
    <h3 v-else id="fechada">FECHADA</h3>
    <ul>
      <li v-for="filme in filmes" v-bind:key="filme.id">{{ filme.titulo }}</li>
    </ul>
    <h3>Filmes encontrados</h3>
    <button type="button" @click="mostrarCarrinho" class="btn btn-primary btn-lg">
      Carrinho: {{ quantidadeCarrinho }} filmes
    </button>
    <div class="hhh" v-if="mostrarFilmes">
      <div v-bind:key="filme.id" v-for="filme in filmes">
        <div class="card">
          <img v-bind:src="filme.imagem" class="card-img-top" alt="imagem do filme">
          <div class="card-body">
            <h5 class="card-title">{{ filme.titulo }}</h5>
            <p class="card-text">{{ filme.descricao }}</p>
            <p class="card-text">{{ filme.valor | formatarValor("R$") }}</p>
            <a href="#" @click="incrementar(filme)" v-if="validarAdd(filme)" class="btn btn-primary">ALUGAR</a>
            <a href="#" v-else class="btn btn-primary disabled">ALUGAR</a>
          </div>
        </div>
      </div>
    </div>
    <div class="hhh" v-else>
      <h2>Carrinho</h2>

      <!-- <div class="col-12">
        <form>
          <div class="form-group">
            <label for="pedido.primeiroNome">Primeiro nome</label>
            <input type="text"
            class="form-control"
            id="primeiroNome"
            v-model="pedido.primeiroNome">
          </div>
          <div class="form-group">
            <label for="ultimoNome">Sobrenome</label>
            <input type="text"
            class="form-control"
            id="ultimoNome"
            placeholder="Digite seu sobrenome"
            v-model="pedido.ultimoNome">
          </div>
        </form>
      </div>
      <div class="col-12">
        <pre>
            Primeiro nome: {{ pedido.primeiroNome }}
            Ultimo nome: {{ pedido.ultimoNome }}
        </pre>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  pedido: {
    primeiroNome: '',
    ultimoNome: ''
  },
  data: function() {
    return {
      mostrarFilmes: true,
      msg: "Locadora de Filmes (─‿─)",
      horas: new Date().getHours(),
      filmes: [
        { id: 1, titulo: "Kimi no na wa", descricao: "Um filme de romance com viagem temporal", valor: 20, imagem: "https://s.aficionados.com.br/imagens/mv5bmza1mgjlzjatnwi1os00mtczlwe5n2ity2i5m2yxy2ziyjq0l2ltywdll2ltywdlxkeyxkfqcgdeqxvynzayodm5ode-v1-sx707-cr0-0-707-999-al_cke.jpg", estoqueDisponivel: 5},
        { id: 2, titulo: "Tenki no Ko", descricao: "Um filme de romance", valor: 20, imagem: "https://img1.ak.crunchyroll.com/i/spire3/45e5866b5aed0f83bcfdb7565006b2451568165472_full.jpg", estoqueDisponivel: 7},
        { id: 3, titulo: "Dragon Ball Z: A Batalha dos Deuses", descricao: "Um filme de porrada", valor: 20, imagem: "https://br.web.img3.acsta.net/pictures/210/456/21045654_20131001150454933.jpg", estoqueDisponivel: 3},
        { id: 4, titulo: "Bunny Girl", descricao: "Um filme de romance e misterio", valor: 20, imagem: "https://img1.ak.crunchyroll.com/i/spire2/6eb7cc17a5b2ef8ffa11ae011fd7d3971555765943_full.jpg", estoqueDisponivel: 0}
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
    }
  }, computed: {
    quantidadeCarrinho: function() {
      return this.carrinho.length
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
.card {
  width: 300px;
  height: 650px;
  margin-top: 5px;
}
</style>
