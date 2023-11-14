<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts" >
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageHeader extends Vue {

  @Prop({ required: true, default: () => 'To Do App' })
  public title!: string;

}
</script>

<style lang="scss">
header {
  h1 {
    font-family: Rubik-Dirt, Helvetica, Arial, sans-serif;
    color: blue;
    font-size: 32pt;
    background-color: #ddd;
    padding: 15px;
    border-radius: 15px;
    text-align: center;
  }

  &:hover h1 {
    font-family: Rubik-Iso, Helvetica, Arial, sans-serif;
    // color: white;
  }
}
</style>;
