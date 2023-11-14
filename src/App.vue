<template>
  <div class="app-container">
    <div id="app">
      <PageHeader title="To Do App" />
      <div class="create-item">
        <div class="create-item-text">Title : </div>
        <div class="create-item-input">
          <input type="text" placeholder="Enter your task title." v-model="titleText" />
        </div>
        <div class="create-item-button"><button @click="onAddClick" :disabled="titleText.trim() == ''">Add</button></div>
      </div>
      <div class="list" v-if="items.length > 0">
        <div class="list-header">Total item count: {{ itemCount }}, completed: {{ completedItemCount }}</div>
        <div v-for="item in items" :key="item.id" :class="['list-row', item.isCompleted ? 'completed' : '']">
          <div class="item-checkbox"><input type="checkbox" v-model="item.isCompleted" /></div>
          <div class="item-id" title="Id">{{ item.id }}</div>
          <div class="item-text" title="Text">{{ item.text }}</div>
          <div class="item-date" title="Created date">{{ item.createDateTime.toLocaleDateString() }}<br />{{
            item.createDateTime.toLocaleTimeString() }}</div>
          <div class="item-delete-button"><button @click="onDeleteClick(item)">Delete</button></div>
        </div>
      </div>
      <div v-else class="empty-list">
        List is empty!...
      </div>
    </div>
  </div>
</template>

<script lang="ts" >
import { Component, Vue } from 'vue-property-decorator';
import PageHeader from './components/PageHeader.vue';
import { ToDoItem } from './services';

@Component({
  components: { PageHeader }
})
export default class App extends Vue {

  nextId = 1;
  titleText = "";
  items: ToDoItem[] = [];

  get itemCount() {
    return this.items.length;
  }

  get completedItemCount() {
    return this.items.reduce((accumulator, currentValue) => accumulator + (currentValue.isCompleted ? 1 : 0), 0);
  }

  onAddClick() {
    this.items.push({
      id: this.nextId,
      text: this.titleText,
      createDateTime: new Date(),
      isCompleted: false
    });
    this.nextId++;
    this.titleText = '';
  }

  onDeleteClick(item: ToDoItem) {
    this.items.splice(this.items.indexOf(item), 1);
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


    .create-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 5px;

      div {
        padding: 0 5px 0 5px;

      }

      .create-item-input {
        display: flex;
        flex: 1;

        input[type=text] {
          flex: 1;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 12pt;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
      }

      .create-item-button {
        display: flex;

        button {
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 12pt;
          padding: 10px;
        }
      }
    }

    .list {
      display: flex;
      flex-direction: column;
      padding-top: 5px;
      color: black;

      .list-header {
        text-align: center;
      }

      .list-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 13pt;

        &:nth-child(odd) {
          background-color: #ddd;

          &:hover {
            background-color: #bbb;
            cursor: pointer;
          }
        }

        &:nth-child(even) {
          background-color: #eee;

          &:hover {
            background-color: #bbb;
            cursor: pointer;
          }
        }

        div {
          padding: 5px;
        }

        .item-text {
          flex: 1;
        }

        .item-date {
          font-size: 10pt;
          text-align: center;
        }

        .item-delete-button {
          button {
            font-family: Roboto, Helvetica, Arial, sans-serif;
            font-size: 12pt;
            padding: 7px;
          }
        }

        &.completed {
          color: #444;

          .item-id,
          .item-text {
            text-decoration: line-through;
          }
        }
      }
    }

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
