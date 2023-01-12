const App = {
  data: () => {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    toUpperCase(item) {
      return item.toUpperCase()
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = ''
      }
    },
    doubleCount() {
      return this.notes.length * 2
    },
    removeNote(index, event) {
      this.notes.splice(index, 1);
    },
    stopPropagation(event) {
      event.stopPropagation()
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    },
  },
  watch: {
    inputValue() {
      if (this.inputValue.length > 10) {
        this.inputValue = ''
      }
    }
  }
}


const app = Vue.createApp(App)

app.mount('#app')