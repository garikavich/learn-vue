const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    inputChangeHandler(event) {
      return this.inputValue = event.target.value
    },

    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = ''
    },
    inputKeyPress(event) {
      if (event.key === "Enter") {
        this.addNewNote()
      }
    }
  }
}


const app = Vue.createApp(App)

app.mount('#app')