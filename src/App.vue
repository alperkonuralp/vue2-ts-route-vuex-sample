<template>
  <div class="app-container">
    <div id="app">
      <header>
        <h1>To Do App</h1>
      </header>
      <div class="create-item">
        <div class="create-item-text">Title : </div>
        <div class="create-item-input"><input type="text" placeholder="Enter your task title." /></div>
        <div class="create-item-button"><button>Add</button></div>
      </div>
      <div class="list">
        <div class="list-header">Total item count: 3, completed: 1</div>
        <div class="list-row">
          <div class="item-checkbox"><input type="checkbox" /></div>
          <div class="item-id">1</div>
          <div class="item-text">Write code</div>
          <div class="item-date">15.11.2023<br />09:00</div>
          <div class="item-delete-button"><button>Delete</button></div>
        </div>
        <div class="list-row completed">
          <div class="item-checkbox"><input type="checkbox" checked /></div>
          <div class="item-id">2</div>
          <div class="item-text">Refactor code</div>
          <div class="item-date">15.11.2023<br />09:00</div>
          <div class="item-delete-button"><button>Delete</button></div>
        </div>
        <div class="list-row">
          <div class="item-checkbox"><input type="checkbox" /></div>
          <div class="item-id">5</div>
          <div class="item-text">Delete code</div>
          <div class="item-date">15.11.2023<br />09:00</div>
          <div class="item-delete-button"><button>Delete</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  }
}

@media (min-width: 960px) {
  .app-container #app {
    width: 720px;
  }
}
</style>
