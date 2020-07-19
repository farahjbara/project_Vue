<template >
  <div class="">
    <img class="image ui centered large " src="/image_it.png" alt="">
    <div class="ui divider hidden"></div>
    <div v-if="errors" class="ui  error message" style="max-width: 500px !important; margin:auto; margin-top:5px;">
        <ul class="list">
            <li>{{ errors }}</li>
        </ul>
    </div>
    <div class="ui raised very padded text container segment " style="max-width: 500px !important;">
           <h2 class="ui header aligned center prime">Se connecter</h2>



        <form class="ui form" method="post" @submit.prevent="login">

            <div class="field">
                <label>Votre email</label>
                <input type="text" v-model="email" name="email" value="" required autocomplete="email" autofocus placeholder="saisissez votre adress e-mail">
            </div>
            <div class="field">
                <label>Mot de passe</label>
                <input id="password" v-model="password" type="password" name="password" required  placeholder="*******">
            </div>
            <button :class="islod ? 'loading' : ''" class="ui button black fluid" style="color:white" type="submit">se connecter</button>
            <div class="ui divider hiden">

            </div>
            <a class="ui link aligned center ">Mot de passe oublié?</a>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'auth',
    middleware: 'checkAuth',
    data(){
      return{
          email: '',
          password: '',
          errors:'',
           token: '',
           islod : false
      }
    },
    methods: {
      login(){
        this.islod = true;
        axios.post('https://127.0.0.1:8000/api/login_check',{
          email: this.email,
          password: this.password,
        }).then(response => {
          this.token = response.data.token;
          this.$store.commit('SET_AUTH_DATA', {token: response.data.token, email: this.email});
          this.islod = false;
          this.$router.push('home')
        }).catch(error => {
          this.islod = false;
          console.log(error);
          this.errors = error.response.data.message
        });
      },

      mounted() {
      }
    },
  }
</script>

<style lang="css" scoped>
</style>
