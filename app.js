const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки'
    }
  }
}


const app = Vue.createApp(App)

app.mount('#app')