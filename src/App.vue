<template>
  <div class="app-container">
    <div id="app">
      <PageHeader title="To Do App" />
      <CreateItem :nextId="nextId" @add:item="onAddItem" />
      <ListItem :items="items" @delete:item="onDeleteItem" @change:complete="onChangeComplete" v-if="items.length > 0" />
      <div v-else class="empty-list">
        List is empty!...
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { Component, Vue } from 'vue-property-decorator';
import { ToDoItem } from './services';

import PageHeader from './components/PageHeader.vue';
import CreateItem from './components/CreateItem.vue';
import ListItem from './components/ListItem.vue';

@Component({
  components: { PageHeader, CreateItem, ListItem }
})
export default class App extends Vue {

  nextId = 1;
  titleText = "";
  items: ToDoItem[] = [];

  onAddItem(item: ToDoItem) {
    this.nextId++;
    this.items.push(item);
  }

  onDeleteItem(item: ToDoItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  onChangeComplete(id: number, isCompleted: boolean){
    const item = this.items.find(x=>x.id === id);
    item!.isCompleted = isCompleted;
  }
}
</script>

<style lang="scss">
body {
  background-color: rgb(241, 255, 232);
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  justify-content: center;
  background-color: rgb(241, 255, 232);
  padding: 0;
  margin: 0;

  #app {
    font-family: Rubik, Helvetica, Arial, sans-serif;
    font-size: 14pt;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(232, 247, 221);
    color: #2c3e50;

    .empty-list {
      text-align: center;
    }
  }
}

@media (min-width: 960px) {
  .app-container #app {
    width: 720px;
  }
}
</style>
