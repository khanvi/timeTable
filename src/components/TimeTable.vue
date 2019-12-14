<template>
    <div class="container">
        <h2>
            {{id}}
        </h2>
        <hr>
        <div v-if="id=='Monday'">
            <div v-for="i in 4" :key="i" class="row">
                <h3 @click="homeWorkShow(i)" class="col-3">
                    {{ itens[0].lessons[i]}} |
                </h3>
                <div v-show="itens[0].show[i]" class="col-9 text-left">
                    {{itens[0].homeWork[i]}}
                </div>
            </div>        
        </div>
       
        <div v-else-if="id=='Tuesday'">
            <div v-for="i in 4" :key="i" class="row">
                <h3 class="col-3">
                    {{ itens[1].lessons[i]}} |
                </h3>
                <div v-if="!itens[1].show[i]" class="col-9 text-left">
                    {{itens[1].homeWork[i]}}
                </div>
            </div> 
        </div>
         <div v-else-if="id=='Wednesday'">
            <div v-for="i in 4" :key="i" class="row">
                <h3 class="col-3">
                    {{ itens[2].lessons[i]}} |
                </h3>
                <div v-if="!itens[2].show[i]" class="col-9 text-left">
                    {{itens[2].homeWork[i]}}
                </div>
            </div> 
        </div>
         <div v-else-if="id=='Thuisday'">
            <div v-for="i in 4" :key="i" class="row">
                <h3 class="col-3">
                    {{ itens[3].lessons[i]}} |
                </h3>
                <div v-if="!itens[3].show[i]" class="col-9 text-left">
                    {{itens[3].homeWork[i]}}
                </div>
            </div> 
        </div>
         <div v-else-if="id=='Friday'">
            <div v-for="i in 4" :key="i" class="row">
                <h3 class="col-3">
                    {{ itens[4].lessons[i]}} |
                </h3>
                <div v-if="!itens[4].show[i]" class="col-9 text-left">
                    {{itens[4].homeWork[i]}}
                </div>
            </div> 
        </div>
         <div v-else-if="id=='Saturday'">
            <div v-for="i in 4" :key="i" class="row">
                <h3 class="col-3">
                    {{ itens[5].lessons[i]}} |
                </h3>
                <div v-if="!itens[5].show[i]" class="col-9 text-left">
                    {{itens[5].homeWork[i]}}
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    methods:{
    homeWorkShow(x){
            this.itens[0].show[x] = true
            // eslint-disable-next-line
            console.log(this.itens[0])
        }
    },
    data(){
        return{
           // id: this.$router.currentRoute.params['id']
           id: this.$route.params['id'],
           itens:[
               {
                   day:'Monday',
                   lessons:['',
                    'Физика',
                    'Матан',
                    'Русский',
                    'История'
                   ],
                   homeWork:['',
                       'нет',
                       'в тетради',
                       'прочитать стр 75',
                       'рассказать о РСФСР'
                   ],
                   show:[
                       false,false,false,false,false,
                   ]
               },
               {
                   day:'Tuesday',
                   lessons:['',
                    'Математика',
                    'Общ',
                    'Англ',
                    'История'
                   ],
                   homeWork:['',
                       'нет',
                       'в тетради',
                       'прочитать стр 75',
                       'рассказать о РСФСР'
                   ],
                   show:[
                       false,false,false,false,false,
                   ]
               },
               {
                   day:'Wednesday',
                   lessons:['',
                    'Англ',
                    'История',
                    'Русский',
                    'История'
                   ],
                   homeWork:['',
                       'нет',
                       'в тетради',
                       'прочитать стр 75',
                       'рассказать о РСФСР'
                   ],
                   show:[
                       false,false,false,false,false,
                   ]
               },
               {
                   day:'Thuisday',
                   lessons:['',
                    'Общ',
                    'Англ',
                    'Русский',
                    'История'
                   ],
                   homeWork:['',
                       'нет',
                       'в тетради',
                       'прочитать стр 75',
                       'рассказать о РСФСР'
                   ],
                   show:[
                       false,false,false,false,false,
                   ]
               },
               {
                   day:'Friday',
                   lessons:['',
                    'Физика',
                    'Матан',
                    'Русский',
                    'История'
                   ],
                   homeWork:['',
                       'нет',
                       'в тетради',
                       'прочитать стр 75',
                       'рассказать о РСФСР'
                   ],
                   show:[
                       false,false,false,false,false,
                   ]
               },
               {
                   day:'Saturday',
                   lessons:['',
                    'Физика',
                    'Матан',
                    'Русский',
                    'История'
                   ],
                   homeWork:['',
                       'нет',
                       'в тетради',
                       'прочитать стр 75',
                       'рассказать о РСФСР'
                   ],
                   show:[
                       false,false,false,false,false,
                   ]
               }
           ]
        }
    },
    watch:{
        $route (toR){
            this.id = toR.params['id']
        }
    }
}
</script>