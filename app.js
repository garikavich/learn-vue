const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: ''
    }
  },
  methods: {
    inputChangeHandler(event) {
      return this.inputValue = event.target.value
    }
  }
}


const app = Vue.createApp(App)

app.mount('#app')