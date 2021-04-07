<template>
  <div>
    <div class="bg-white flex flex-col h-screen">
      <div id="parentDiv" class="h-5/6 overflow-y-auto">
        <UserInfoHeader :contact="contact" />
        <MessageListItem
          v-for="(item, i) in messages"
          :key="i"
          :contact="contact"
          :message="item"
          :selectedMessageId="selectedMessageId"
          @onMessageClicked="onMessageClicked"
        />
      </div>
      <div class="h-2/6">
        <ReplyView
          class="w-1/2 m-auto"
          v-if="replyMessage !== null"
          :message="replyMessage"
          :contact="contact"
          @onCloseReplyClicked="onCloseReplyClicked"
          :showClose="true"
        />
        <InputView
          v-if="selectedMessageId == null"
          @onSendClicked="onSendClicked"
        />
        <ActionsView
          v-else
          @onCancelClicked="onCancelClicked"
          @onDeleteClicked="onDeleteClicked"
          @onReplyClicked="onReplyClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputView from "./InputView";
import MessageListItem from "./MessageListItem";
import ActionsView from "../Actions/ActionsView";
import UserInfoHeader from "../UserInfo/UserInfoHeader";
import ReplyView from "./ReplyView";
import MockDataManager from "../../utilities/MockDataManager";

export default {
  data() {
    return {
      contact: Object,
      messages: null,
      newMessageText: String,
      selectedMessageId: null,
      replyMessage: null,
    };
  },
  components: {
    InputView,
    MessageListItem,
    ActionsView,
    UserInfoHeader,
    ReplyView,
  },
  props: {
    contactUsername: {
      type: String,
    },
  },

  watch: {
    contactUsername: function (newVal, oldVal) {
      this.messages = null;
      this.contact = MockDataManager.getContact(newVal);
      this.messages = MockDataManager.getChatMessages(newVal);
      MockDataManager.clearUnreadCount(newVal);
    },
  },
  mounted() {
    this.messages = null;
    this.contact = MockDataManager.getContact(
      this.$route.params.contactUsername
    );
    this.messages = MockDataManager.getChatMessages(
      this.$route.params.contactUsername
    );
    MockDataManager.clearUnreadCount(this.$route.params.contactUsername);
    let div = document.getElementById("parentDiv");

    div.scrollTop = div.scrollHeight - div.clientHeight;
  },
  methods: {
    onSendClicked(newValue) {
      this.newMessageText = newValue;
      MockDataManager.addChatMessage(
        this.contact.username,
        this.newMessageText,
        this.replyMessage
      );

      this.messages = MockDataManager.getChatMessages(this.contact.username);

      setTimeout(() => {
        let div = document.getElementById("parentDiv");
        console.log(div.scrollHeight - div.clientHeight);
        div.scrollTop = div.scrollHeight - div.clientHeight;
      }, 500);
      this.newMessageText = "";
      this.replyMessage = null;
    },

    onMessageClicked(messageId) {
      if (this.selectedMessageId == messageId) {
        this.selectedMessageId = null;
      } else {
        this.selectedMessageId = messageId;
      }
    },

    onCancelClicked() {
      this.selectedMessageId = null;
    },

    onDeleteClicked() {
      MockDataManager.removeChatMessage(
        this.contact.username,
        this.selectedMessageId
      );

      this.messages = MockDataManager.getChatMessages(this.contact.username);
      this.onCancelClicked();
    },

    onReplyClicked() {
      const m = this.messages.find((m) => m.id === this.selectedMessageId);
      const date1 = m.dateTime;
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const diffSec = Math.ceil(diffTime / 1000);
      if (diffSec > 2) {
        this.replyMessage = m;
      }
      this.onCancelClicked();
    },

    onCloseReplyClicked() {
      this.replyMessage = null;
      this.onCancelClicked();
    },
  },
};
</script>