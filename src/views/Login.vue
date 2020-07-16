<template>
  <div style="align-items: center;
  height: 100vh;" id="HMH-login" :class="`${fullView ? 'HMH-login-full' : ''}`">
    <div id="HMH-form-container">
      <slot />
      <form style="  display: flex; flex-flow: column; width: 100%; max-width: 350px; text-align: left; padding: 20px; background: lightgray;" id="HMH-form" :class="formClass" @submit.prevent="submit">
        <div v-if="formTitle" id="HMH-formTitle" v-html="formTitle"></div>
        <b-field :label="inputLabel" :type="userInput.type">
          <b-input
            id="HMH-loginUser"
            :type="inputType"
            :placeholder="userInput.placeholder"
            :icon="at-symbol"
            :value="userInput.value"
            v-model="userInput.value"
            :maxlength="userInput.maxLength"
            :validation-message="userInput.errorMessage"
            required
          />
        </b-field>
        <b-field :label="passInput.label || 'Mot de passe'">
          <b-input
            id="HMH-loginPass"
            type="password"
            :placeholder="passInput.placeholder"
            :icon="passIcon"
            :value="passInput.value"
            v-model="passInput.value"
            :validation-message="passInput.errorMessage"
            required
            password-reveal
          />
        </b-field>
        <div style="margin-bottom: 10px;" id="HMH-form-error" class="is-danger">{{ formError }}</div>
        <b-button
          id="HMH-loginSubmit"
          type="is-primary"
          native-type="submit"
          :loading="loading"
          >{{ submitButton.value || "Connexion" }}</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
// import {*} from "crypto-js/md5";
import Vue from "vue";
import Buefy from "buefy";
Vue.use(Buefy);
import axios from "axios";
export default {
  name: "HMH_BuefyLogin",
  computed: {
    userIcon: data => {
      if (!data.useIcons) return "";
      if (data.userInput.icon) return data.userInput.icon;
      if (data.userInput.email) return "email";
      else return "account";
    },
    passIcon: data => {
      if (!data.useIcons) return "";
      if (data.passInput.icon) return data.userInput.icon;
      else return "lock";
    },
    inputType: data => {
      if (data.userInput.email) return "email";
      else return "text";
    },
    inputLabel: data => {
      const { email, label } = data.userInput;
      if (label) return label;
      else if (email) return "Correo: ";
      else return "Email: ";
    },
    encryptedPassword: data => {
      try {
        const { cryptMethod, passInput } = data;
        let crypto = require(`crypto-js/${cryptMethod}`);
        const pass = passInput.value;
        return crypto(pass).toString();
      } catch (e) {
        console.error(e);
      }
    },
    loginData: data => {
      const { apiProps, userInput } = data;
      let params = apiProps.params || [];
      if (!params[0]) {
        params[0] = "user";
        params[1] = "pass";
      }
      return {
        [params[0]]: userInput.value,
        [params[1]]: data.encryptedPassword
      };
    },
    doLogin: async data => {
      try {
        const { Api, apiProps, loginData } = data;
        const method = apiProps.method || "POST";
        const result = await Api({ method, data: loginData });
        return result.data;
      } catch (e) {
        console.error(e);
        const error = data.prepareError(e.response);
        return { status: false, error };
      }
    }
  },
  data: data => {
    const formError = "";
    const loading = false;
    const Api = axios.create({ baseURL: data.apiProps.baseURL });
    return { Api, formError, loading };
  },
  methods: {
    prepareError(response = {}) {
      const { status, statusText, data } = response;
      let error = "Ocurrio un error";
      if (status) error = `Error: ${status} - ${statusText}`;
      if (data) if (data.error) error = data.error;
      return error;
    },
    async submit() {
      if (this.loading) return;
      let result = {};
      if (this.apiProps.baseURL) {
        this.loading = true;
        result = await this.doLogin;
        this.loading = false;
        if (!result.status) this.formError = result.error;
      } else {
        result = this.loginData;
      }
      this.$emit("submit", result);
    }
  },
  props: {
    useIcons: { type: Boolean, default: () => true },
    formTitle: String,
    userInput: {
      type: Object,
      default: () => ({})
    },
    submitButton: {
      type: Object,
      default: () => ({})
    },
    fullView: Boolean,
    passInput: {
      type: Object,
      default: () => ({})
    },
    apiProps: {
      type: Object,
      default: () => ({})
    },
    cryptMethod: {
      type: String,
      default: "md5"
    },
    formClass: { type: String, default: "" },

     onsubmit () {
      this.emailErrors = this.email ? [] : ['Email is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  }
};
</script>

<style>
#HMH-login {
  display: flex;
  justify-content: center;
  flex-flow: column;
}
.HMH-login-full {
  align-items: center;
  height: 100vh;
}
#HMH-form {
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 350px;
  text-align: left;
  padding: 20px;
  background: lightgray;
}
#HMH-form-error {
  margin-bottom: 10px;
}
</style>
