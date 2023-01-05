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
    toUpperCase(item) {
      return item.toUpperCase()
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = ''
      }
    },
    removeNote(index, event) {
      this.notes.splice(index, 1);
    }
  }
}


const app = Vue.createApp(App)

app.mount('#app')