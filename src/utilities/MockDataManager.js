var faker = require('faker');

class MockDataManager {

    constructor() {
        this._profile = null;
        this._contacts = [];
        this._chats = [];

        this._idPrefix = 45278;

        this._generateProfileData();
        this._generateContactsData();
        this._generateChatsData();
    }

    _generateProfileData = () => {
      const contact = {};
      contact.username = "maahjam";
      contact.phone = "+989305447295";
      contact.name = "Mahsa Jamshidian";
      contact.photoURL = "https://avatars.githubusercontent.com/u/45727709?v=4";
      contact.lastSeen = "online";
      this._profile = contact;
      // console.log(this._profile);
    };

    _generateContactsData = () => {
      const lastSeens = ["last seen a long time ago", "last seen within a month", "last seen within a week", "last seen yesterday at 23:55", "online", "last seen recently", "last seen 12 hours ago", "last seen 04/01/21", "last seen 6 minutes ago"];
      for (let i = 0; i < 20; i++) {
        const contact = {};
        contact.username = faker.internet.userName();
        contact.phone = faker.phone.phoneNumber('+1 (###) ###-####');
        contact.name = faker.name.firstName() + " " + faker.name.lastName();
        contact.photoURL = faker.internet.avatar();
        contact.lastSeen = faker.random.arrayElement(lastSeens);
        this._contacts.push(contact);
      }
      // console.log(this._contacts);
    };

    _generateChatsData = () => {
      let z = 15 * 20;
      for (let i = 0; i < 15; i++) {
        const chat = {};
        chat.contact = this._contacts[this._contacts.length - 1 - i];
        chat.messages = [];
        for (let j = 0; j < 20; j++) {
          const message = {};
          message.id = (this._idPrefix + j).toString();
          message.text = faker.lorem.lines(Math.floor(Math.random() * 3) + 1);
          message.isMine = faker.random.arrayElement([true, false]);
          const d = new Date();
          z = z - 1;
          d.setHours(d.getHours() - (z * 2));
          message.dateTime = d;
          message.replyMessage = null;
          chat.messages.push(message);
        }
        chat.messages[18].replyMessage = chat.messages[12];
        chat.messages[15].replyMessage = chat.messages[9];
        chat.unreadMessageCount = Math.floor(Math.random() * (chat.messages.length + 1));
        this._chats.push(chat);
      }
      this._chats.reverse();
      // console.log(this._chats);
    };

    getContacts = () => {
      return this._contacts;
    };

    getChats = () => {
      return this._chats;
    };

    getProfile = () => {
      
      return this._profile;
    };

    getChatContact = (contactUsername) => {
      let c = this._chats.find(c => c.contact.username === contactUsername);
      return c.contact;
    };

    getChatMessages = (contactUsername) => {
      let c = this._chats.find(c => c.contact.username === contactUsername);
      return c.messages;
    };

    clearUnreadCount = (contactUsername) => {
      let c = this._chats.find(c => c.contact.username === contactUsername).unreadMessageCount = 0;
      // return c.messages;
    };

    addChatMessage = (contactUsername, txt) => {
      let x = this._chats.find(c => c.contact.username === contactUsername).messages;
      const message = {};
      message.id = (this._idPrefix + x.length).toString();
      message.text = txt
      message.isMine = true
      message.dateTime = new Date();
      message.replyMessage = null;
      this._chats.find(c => c.contact.username === contactUsername).messages.push(message);
    };

    addChatMessage = (contactUsername, txt, replyMsg) => {
      let x = this._chats.find(c => c.contact.username === contactUsername).messages;
      const message = {};
      message.id = (this._idPrefix + x.length).toString();
      message.text = txt
      message.isMine = true
      message.dateTime = new Date();
      message.replyMessage = replyMsg;
      this._chats.find(c => c.contact.username === contactUsername).messages.push(message);
      this._chats.sort((a, b) => b.messages[b.messages.length - 1].dateTime - a.messages[a.messages.length - 1].dateTime);
    };

    removeChatMessage = (contactUsername, messageId) => {
      let x = this._chats.find(c => c.contact.username === contactUsername).messages;
     
x = x.filter(function( obj ) {
        return obj.id !== messageId;
      });


      this._chats.find(c => c.contact.username === contactUsername).messages = x;

    };

}

export default new MockDataManager();