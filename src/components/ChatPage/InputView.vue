<template>
  <div>
    <div class="flex flex-col pr-4 pl-4">
      <div class="w-full">
        <div class="input-group w-1/2 m-auto">
          <input
            v-model="inputValue"
            class="form-control"
            type="text"
            name="text-1542372332072"
            id="text-1542372332072"
            required="required"
            placeholder="Ihr Name"
            v-on:keyup.enter="onSendClicked"
          />
          <label for="text-1542372332072" class="text-sm"
            >Write a message...</label
          >
        </div>

        <div class="w-1/2 m-auto pt-2">
          <div
            class="send text-sm font-medium w-10 h-5 ml-auto"
            @click="onSendClicked"
          >
            SEND
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    onSendClicked() {
      this.$emit("onSendClicked", this.inputValue);
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>
*:focus {
  outline: none;
}

.input-group {
  display: block;
  height: 60px;
  border-bottom: 2px solid #499dd9;
  background-color: #ffffff;
  position: relative;
  font-size: 17px;
  color: #a7b4c1;
  transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out,
    box-shadow 0.1s ease-in-out;
}

.input-group input {
  position: absolute;
  box-shadow: none;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  top: 0;
  height: 60px;
  width: 100%;
  padding: 0 53px;
  box-sizing: border-box;
  z-index: 3;
  display: block;
  color: #1a6fc4;
  font-size: 17px;
  font-family: "Oxygen", sans-serif;
  transition: top 0.1s ease-in-out;
}

.input-group input::placeholder {
  color: rgba(0, 0, 0, 0);
}

.input-group input:focus,
.input-group input:not(:placeholder-shown) {
  top: 17px;
}

.input-group label {
  position: absolute;
  border: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  padding: 0 53px;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
  cursor: text;
}

.input-group input:focus + label,
.input-group input:not(:placeholder-shown) + label {
  bottom: 20px;
  font-size: 13px;
  opacity: 0.7;
}

.req-mark {
  position: absolute;
  pointer-events: none;
  top: 0;
  right: 33px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
  color: #e0e0e0;
}

.send {
  color: #499dd9;
}

.send:hover {
  color: #5580a3;
}
</style>