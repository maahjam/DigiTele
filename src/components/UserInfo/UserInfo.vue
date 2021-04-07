<template>
  <div>
    <div
      class="header text-white flex flex-row pl-6 pr-6 h-28 items-center justify-between"
    >
      <div class="circular-image">
        <img
          class="rounded-full text-xs"
          :src="contact.photoURL"
          alt="Profile image"
        />
      </div>

      <div class="w-7/12 pl-3 pr-6 pt-6">
        <p class="text-sm font-medium truncate pb-2">
          {{ contact.name }}
        </p>
        <p class="text-left text-xs truncate pb-4 last-seen">
          {{ contact.lastSeen }}
        </p>
      </div>

      <div
        class="text-center text-sm truncate text-white rounded-full pt-4 message mt-28 bg-white shadow-md hover:bg-blue-600"
        @click="showChatPage"
      >
        <img
          src="@/assets/svg/speech-bubble.svg"
          class="w-6 h-6 m-auto"
          alt="Message"
          @click="showChatPage"
        />
      </div>
    </div>

    <div class="bg-white p-6 pl-10 pb-0 h-40 flex flex-row">
      <div class="phone-icon mr-4">
        <img src="@/assets/svg/phone.svg" alt="phone" />
      </div>
      <div class="w-full pl-10 pr-6 flex flex-col">
        <div class="h-1/2">
          <p class="font truncate">{{ contact.phone }}</p>
          <p class="text-xs color pt-2">Phone</p>
        </div>
        <div class="h-1/2">
          <p class="font truncate">{{ "@" + contact.username }}</p>
          <p class="text-xs color pt-2">Username</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
    },
  },
  methods: {
    showChatPage() {
      this.$emit("onShowChat");
    },
  },
};
</script>

<style scoped>
.header {
  background: #5580a3;
}

.circular-image {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
}

.phone-icon {
  width: 30px;
  height: 30px;
  display: inline-block;
}

.phone-icon img {
  min-width: 30px;
}

.circular-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.font {
  font-size: 12px;
}

.last-seen {
  color: #ccdeed;
}

.color {
  color: #909090;
}

.message {
  width: 52px;
  height: 52px;
}

.message:hover {
  background: #3a6d99;
}
</style>
