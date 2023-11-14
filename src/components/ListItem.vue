<template>
  <div class="list">
    <div class="list-header">Total item count: {{ itemCount }}, completed: {{ completedItemCount }}</div>
    <div v-for="item in items" :key="item.id" :class="['list-row', item.isCompleted ? 'completed' : '']">
      <div class="item-checkbox"><input type="checkbox" :value="item.isCompleted" @input="onChangeComplete(item.id, !item.isCompleted)" /></div>
      <div class="item-id" title="Id">{{ item.id }}</div>
      <div class="item-text" title="Text">{{ item.text }}</div>
      <div class="item-date" title="Created date">{{ item.createDateTime.toLocaleDateString() }}<br />{{
        item.createDateTime.toLocaleTimeString() }}</div>
      <div class="item-delete-button"><button @click="onDeleteItem(item)">Delete</button></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ToDoItem } from '@/services';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  items!: ToDoItem[];

  get itemCount() {
    return this.items.length;
  }

  get completedItemCount() {
    return this.items.reduce((accumulator, currentValue) => accumulator + (currentValue.isCompleted ? 1 : 0), 0);
  }

  @Emit('delete:item')
  onDeleteItem(item: ToDoItem) { }

  @Emit('change:complete')
  onChangeComplete(id: number, isCompleted: boolean) { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
