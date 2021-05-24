<template>
    <form @submit.prevent="handleSubmit">  <!-- para não atualizar os valores do formulario parte 1-->
          <h3>Inscrever-se</h3>

        <div class="form-group">
          <label>Primeiro nome</label>
          <input type="text" class="form-control" v-model="Primeiro_nome" placeholder="Primeiro nome">  
        </div>

        <div class="form-group">
            <label>Sobrenome</label>
            <input type="text" class="form-control" v-model="Sobrenome" placeholder="Sobrenome ">  
        </div>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div>

        <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control" v-model="senha" placeholder="Senha">
        </div>
        
        <div class="form-group">
            <label>Confirme sua Senha</label>
            <input type="password" class="form-control" v-model="confirmar_senha" placeholder="Confirme sua Senha">
        </div>


        <button class="btn btn-primary btn-block">Inscrever-se</button>

      </form>
</template>


<script >
 import axios from 'axios' //axios e um pacote que pode ser usado enviando, obtendo e postar a solicitação no servidor
      
        export default{
        name: 'Register',

        data(){  //função para obter os dados de entrada nos campos do formulario
                //lembre-se de adc o v-mode, em cada input do formulario e chamar pelo mesmo nome definido abaixo
            return{
                Primeiro_nome: '',
                Sobrenome: '',
                email:'',
                senha: '',
                confirmar_senha:''

            }
        },
         //<!-- para não atualizar os valores do formulario parte 2-->
        
        methods: {
           async handleSubmit() {
                 const response =  await axios.post('register', {
                        Primeiro_nome: this.Primeiro_nome,
                        Sobrenome: this.Sobrenome,
                        email: this.email,
                        senha: this.senha,
                        confirmar_senha: this.confirmar_senha
                    }); //url do endpoint de registro (antes era url de registro, agr foi criado o axios.js hehehehe)


            console.log(response);
            }
        }
    }
</script>
