<template>
  <div class="home">
    <!-- <h1> {{ $t('mode') }}  </h1> -->
    <b-container class="bv-example-row">
      <b-row align-h="between">
        <b-col cols="6">
           <div class="left_side">
        <h2> {{ $t('welcomeText') }} </h2>
        <h5> {{ $t('leader') }} </h5>
        <img src="../assets/trader.png" alt="trader"/>
      </div>
        </b-col>
        <b-col cols="5">
        <div class="right_side">
          <h3> {{ $t('loginMenu.login') }}  </h3>
          <form @submit.prevent="submit" ref="contactForm">
                 <div class="relative">
                   <v-text-field v-bind:label="$t('loginMenu.email')" outlined v-model="formData.email"> </v-text-field>
                   <v-icon large>mdi-account</v-icon>
                 </div>
                  <div class="relative">
                   <v-text-field v-bind:label="$t('loginMenu.password')" outlined v-model="formData.password"> </v-text-field>
                    <v-icon large>mdi-lock</v-icon>
                 </div>
                 <div>
                       <vue-recaptcha ref="recaptcha"
                           @verify="onVerify" sitekey="6LeBo3kaAAAAAM-1Z5WLQP6EKbouwtzvjCo2Hq9-" :loadRecaptchaScript="true">
                       </vue-recaptcha>
                 </div>
                  <div>
                    <v-btn block x-large color="main" type="submit" class="mt-5"> {{ $t('loginMenu.login') }}  </v-btn>
                  </div>
          </form>
      </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- <div class="login_area">
      <div class="left_side">
        <h2>Welcome to CPT Markets</h2>
        <h6> We are the market leader</h6>
        <img src="../assets/trader.png" alt="trader"/>
      </div>
      <div class="right_side">
        ff
      </div>
    </div> -->
   <!-- <form @submit.prevent="createUser">
     <input type="text" placeholder="title" v-model="formData.title"/>
     <input type="text" placeholder="body" v-model="formData.body"/>
     <button type="submit"> Save </button>
   </form> -->
   <!--  <ul>
      <li v-for="item in users" :key="item.id">
        {{item.id}}
        {{item.title}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

import axios from 'axios'
export default {
  name: 'Home',
  components:{
    'vue-recaptcha': VueRecaptcha
  },
  data(){
    return {
      users:[],
      formData: {
          email:'',
          password:'',
          robot: false,
      }
    }
  },
  mounted(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res)=> {
        this.users = res.data
      })
  },

  methods:{
    submit() {
      console.log(this.formData);
    },
    onVerify: function (response) {
      if (response) this.formData.robot = true;
    },
    createUser(){
      // ! console.log(this.formData)
      axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
      .then((res)=> console.log(res))
      this.formData = ''
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/app.scss';
  .home {
    background: url('../assets/login-bg.png');
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
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
  }

@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}

//  @keyframes animateShape {
//     50%{
//         cy: 70;
//         opacity: .1
//       }
//   }

  .right_side {
    margin-top: 2rem;
    background: #fff;
    padding: 2rem;
    border-radius: 20px;
}

.right_side h3 {
  color: $main_color;
  margin-bottom: 1rem;
}

.v-icon {
    color:$main-color !important;
}

.relative .v-icon.v-icon {
  position: absolute;
  top: 9px;
  right: 9px;
}

</style>