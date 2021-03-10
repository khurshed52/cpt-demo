<template>
    <div>
        <select id="test_select" v-model="language" @change="changeLanguage()" class="rounded_btn language mr">
            <option v-for="option in countries" :key="option.title" :value="option.value" :title="option.fl">
               {{option.title}}
            </option>
        </select>
    </div>
</template>

<script>

export default {
name:'Language',
data(){
    return{
        language:null,
        countries:[
            {
               title: "English",
               fl: "https://via.placeholder.com/20",
               value: 'en'   
            },
             {
               title: "Chinese",
               fl: "https://via.placeholder.com/20",
               value: 'ch'   
            }
        ]
    }
},
methods:{
    changeLanguage() {
        localStorage.setItem('lang', this.language);
        window.location.reload();
        
    }
},
created(){
    if(localStorage.getItem('lang') == null) {
         localStorage.setItem('lang', 'en')
    } 
    this.language = localStorage.getItem('lang')
}
}
</script>

<style lang="scss">
@import '../assets/scss/app.scss';

select {
    border: 1px solid #000 !important;
}

</style>