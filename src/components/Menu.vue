<template>
  <div id="menu">
    <nav>
      <transition name="fade" mode="out-in">
        <i class="material-icons menu" v-if="!show" @click="show = !show" :key="menu"> menu</i>
        <i class="material-icons clear" v-else @click="show = !show" :key="clear"> clear</i>
      </transition>
      <transition name="fade">
        <ul v-if="show">
          <!--<li v-for="item in items" :key="item">{{item}}</li>-->
          <router-link tag="li" v-for="item in items" :key="item" :to="'/'+ item">
            <div class="container">
                <a class="col-sm" @click="show = !show"> {{item}} </a>
            </div>
          </router-link>
          <hr>
          <router-link tag="li" :to="'/'">
            <a class="col-sm" @click="show = !show"> Закладки </a>
          </router-link>
        </ul>
      </transition>
    </nav>
  </div>
</template>
<style scoped>
  a{
    text-decoration: none;
    color: black;
  }
  i{
    width: 100px;
  }
  nav{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60px;
        justify-content: center;
        position: relative;
      }
      ul{
        margin: 0;
        padding: 30px;
        position: absolute;
        top: 60px;
        width: 100%;
        background: #eee;
      }
      li{
        align-items: center;
        cursor: pointer;
        display: flex;
        height: 2em;
        font-size: 1.5em;
        justify-content: center;
        list-style-type: none;
        text-transform: uppercase;
        transition: all .3s ease;
      }
      li:hover{
        border-color: black;
        color: blue
      }
      #id{
        align-items: center;
        widows: 500px;
        height: 850px;
      }
      @media (max-width: 1024px){
        #menu{
          width: 100vw;
          height: 100vh;
        }
      }
      .fade-enter-active,.fade-leave-action{
        transition: opacity .3s ease;
      }
      .fade-enter,.fade-leave{
        opacity: 0;
      }
</style>
<script>
export default {
  data: function() {
    return {
    items:[
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thuisday',
      'Friday',
      'Saturday'
    ],
    show: false,
    }
  }
}
</script>
