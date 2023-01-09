new Vue({
  el: '#app',
  data() {
    return {
      isDark: true,
      show: true,
      todoTitle: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      const title = this.todoTitle.trim()
      if (!title) {
        return
      }

      fetch('/api/todo', {
        method: 'post',
        body: JSON.stringify({ title }),
        headers: {'Content-Type': 'application/json'}
      })
        .then((res) => res.json())
        .then((res) => {
          this.todos.push(res.todo)
          this.todoTitle = ''
        })
        .catch((err) => console.log(err))
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  filters: {
    capitalize(value) {
      return String(value).charAt(0).toUpperCase() + String(value).slice(1)
    },
    date(value) {
      if (!value) {
        return ''
      }

      return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(new Date(value))
    }
  }
})