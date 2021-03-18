<template>
  <div>
    <Header />
    <div class="home">
      <!-- <h1> {{ $t('mode') }}  </h1> -->
      <b-container class="bv-example-row">
        <b-row align-h="between">
          <b-col xl="6" lg="6" sm="6" md="6" cols="12" class="flex-item">
            <div class="left_side">
              <h2>{{ $t("welcomeText") }}</h2>
              <h5>{{ $t("leader") }}</h5>
              <img src="../assets/trader.png" alt="trader" />
            </div>
          </b-col>
          <b-col xl="5" lg="5" sm="5" md="5" cols="12" class="flex-item">
            <div class="right_side">
              <h3>{{ $t("loginMenu.login") }}</h3>
              <form v-on:submit.prevent="submit" ref="contactForm">
                <div class="relative">
                  <v-text-field
                    v-bind:label="$t('loginMenu.email')"
                    outlined
                    v-model.trim="$v.formData.email.$model"
                    :class="{
                      'is-invalid': validationStatus($v.formData.email),
                    }"
                  >
                  </v-text-field>
                  <v-icon large>mdi-account</v-icon>
                  <!-- <div v-if="!$v.formData.email.required" class="invalid-feedback">The full name field is required.</div> -->
                </div>
                <div class="relative">
                  <v-text-field
                    v-bind:label="$t('loginMenu.password')"
                    outlined
                    v-model.trim="formData.password"
                  >
                  </v-text-field>
                  <v-icon large>mdi-lock</v-icon>
                </div>
                <div>
                  <vue-recaptcha
                    ref="recaptcha"
                    id="recaptcha"
                    @verify="onVerify"
                    sitekey="6LeBo3kaAAAAAM-1Z5WLQP6EKbouwtzvjCo2Hq9-"
                    :loadRecaptchaScript="true"
                  >
                  </vue-recaptcha>
                </div>
                <span class="msg-error"> </span>
                <div>
                  <v-btn
                    block
                    x-large
                    color="main"
                    type="submit"
                    class="mt-5 mb-3"
                  >
                    {{ $t("loginMenu.loginButton") }}
                  </v-btn>
                </div>
                <a href="#" class="forgot">{{$t("loginMenu.forgotPassword")}}</a>
              </form>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import VueRecaptcha from "vue-recaptcha";
import Header from "../components/Header.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    "vue-recaptcha": VueRecaptcha,
    Header,
  },
  data() {
    return {
      zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      users: [],
      formData: {
        email: "",
        password: "",
        robot: false,
      },
    };
  },
  validations: {
    formData: {
      email: { required },
      password: { required },
    },
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.users = res.data;
    });
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) {
        return;
      } else {
        console.log(this.formData);
        this.formData = "";
        this.$router.push('/dashboard')
      }
    },
    onVerify: function (response) {
      if (response) this.formData.robot = true;
    },
    createUser() {
      // ! console.log(this.formData)
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((res) => console.log(res));
      this.formData = "";
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/app.scss";
.home {
  background: url("../assets/login-bg.png");
  width: 100%;
  height: calc(100% - 65px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.login_container {
  margin-top: 5rem;
}

h1 {
  color: #fff;
}

.left_side {
  margin-top: 2rem;
  color: #fff;
}

.left_side img {
  width: 90%;
  margin-top: 2rem;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.right_side {
  margin-top: 2rem;
  background: #fff;
  padding: 1.5em;
  border-radius: 20px;
}

.right_side h3 {
  color: $main_color;
  margin-bottom: 1rem;
}

.v-icon {
  color: $main-color !important;
}

.relative {
  position: relative;
}

.relative .v-icon.v-icon {
  position: absolute;
  top: 9px;
  right: 9px;
}

.forgot {
  color: $main-color !important;
  font-size: 16px;
  text-decoration: underline;
}
</style>