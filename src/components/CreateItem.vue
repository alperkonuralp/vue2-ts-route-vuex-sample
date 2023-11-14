<template>
  <div class="create-item">
    <div class="create-item-text">Title : </div>
    <div class="create-item-input">
      <input type="text" placeholder="Enter your task title." v-model="titleText" />
    </div>
    <div class="create-item-button"><button @click="onAddClick" :disabled="titleText.trim() == ''">Add</button></div>
  </div>
</template>

<script lang="ts">
import { ToDoItem } from '@/services';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CreateItem extends Vue {

  @Prop()
  items!: ToDoItem[];

  @Prop()
  nextId!: number;

  titleText = "";


  onAddClick() {
    const item: ToDoItem = {
      id: this.nextId,
      text: this.titleText,
      createDateTime: new Date(),
      isCompleted: false
    };
    this.addItemEvent(item);
    this.titleText = '';
  }

  @Emit('add:item')
  addItemEvent(item: ToDoItem) { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
