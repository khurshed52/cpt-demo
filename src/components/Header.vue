<template>
    <div class="header">
       <div class="logo">
           <img src="../assets/cpt-logo.svg" alt="logo"/>
           <h3 class="logo_head"> {{ $t('crmText') }} </h3>
       </div>
       <div class="right_area">
           <!--language component-->
           <LanguageSwitch/>
            <a class="rounded_btn signup" @click="sweetAlert()"> <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="20" height="20" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg> {{ $t('signup') }}  </a> 
       </div>
    </div>
</template>
<script>
import LanguageSwitch from './LanguageSwitch.vue';
import Swal from 'sweetalert2'

export default {
    name:'Header',
    components:{
        LanguageSwitch
    },

    data() {
        return {
            titleText: this.$t('crmText'),
            error: this.$t('welcomeText')
        }
    },

    methods:{
        sweetAlert() {
           Swal.fire({
            icon: 'error',
            title: this.titleText,
            text: this.error,
             timer: 1500
            })
        }
    }
}
</script>
<style lang="scss"> 
@import '../assets/scss/app.scss';
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;  
        background: #fff;
    }

.header .logo img {
    width: 250px;
}

.signup {
    background: $main_color;
    color: #fff !important;
}

.language {
    background: #fff;
    color: $secondry_color;
    padding: 8px 10px !important;
}

.signup:hover{
     background: $secondry_color;
}

.language:hover{
     background: $main_color;
     color:inherit;
}

.logo_head {
    color: $secondry_color;
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
}

.icon.outbound {
    color: #fff;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -1px;
}

.right_area {
    display: flex;
    align-items:  center;
}

</style>