<template>
  <div id="home">
    <h2>
       Закладки
    </h2>
    <hr>
    <div class="container">
      <input type="text" placeholder="why?" class="todo-input" v-model="newTodo"
      @keyup.enter="addTodo()">
      
      <div v-for="(todo,index) in todos" :key="todo.id" class="row p-2 m-2 badge-light">
        <div class="badge-secondary p-2">
          <input type="checkbox" v-model="todo.completed">
        </div>
        <div class="col-sm">
          {{todo.title}}
        </div>
        <div class="remove-item" @click="removeTodo(index)">
          <i class="material-icons clear" :key="clear"> clear</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      newTodo:'',
      idFortodo: 2,
      todos:[
        {
          'id': 1,
          'title': 'Запиши что нужно сделать завтра',
          'completed': false,
        },
      ]
    }
  },
  methods:{
    addTodo(){
      if(this.newTodo.trim().length == 0){
        return
      }

      this.todos.push({
        id:this.idFortodo,
        title: this.newTodo,
        completed: false,
      })

      this.newTodo = ''
      this.idFortodo++
    },
    removeTodo(index){
      this.todos.splice(index,1)
    }
  }
}
</script>

