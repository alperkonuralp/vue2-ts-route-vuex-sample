import { ToDoItem } from "@/services";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export enum GetterTypes {
  GET_ITEMS = "getItems",
  ITEM_COUNT = "itemCount",
  COMPLETED_ITEM_COUNT = "completedItemCount",
}

export enum MutationTypes {
  ADD_ITEM = "addItem",
  CHANGE_COMPLETE = "changeComplete",
  DELETE_ITEM = "deleteItem",
}

const state = {
  items: new Array<ToDoItem>(),
  nextId: 1,
};

export type ToDoAppState = typeof state;

export default new Vuex.Store<ToDoAppState>({
  state,
  getters: {
    [GetterTypes.GET_ITEMS](state: ToDoAppState) {
      return state.items;
    },
    [GetterTypes.ITEM_COUNT](state: ToDoAppState) {
      return state.items.length;
    },
    [GetterTypes.COMPLETED_ITEM_COUNT](state: ToDoAppState) {
      return state.items.reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue.isCompleted ? 1 : 0),
        0
      );
    },
  },
  mutations: {
    [MutationTypes.ADD_ITEM](state: ToDoAppState, text: string) {
      state.items.push({
        id: state.nextId,
        text: text,
        isCompleted: false,
        createDateTime: new Date(),
      });
      state.nextId++;
    },
    [MutationTypes.CHANGE_COMPLETE](
      state: ToDoAppState,
      payload: { id: number; isCompleted: boolean }
    ) {
      const item = state.items.find((x) => x.id === payload.id);
      if (item) {
        item.isCompleted = payload.isCompleted;
      }
    },
    [MutationTypes.DELETE_ITEM](state: ToDoAppState, id: number) {
      const index = state.items.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
