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
      for (let i = 0; i < 15; i++) {
        const chat = {};
        chat.contact = faker.random.arrayElement(this._contacts);
        chat.messages = [];
        for (let j = 0; j < 20; j++) {
          const message = {};
          message.id = (this._idPrefix + j).toString();
          message.text = faker.lorem.lines(Math.floor(Math.random() * 3) + 1);
          message.isMine = faker.random.arrayElement([true, false]);
          message.dataTime = faker.date.recent(90).toISOString();
          message.replyMessage = null;
          chat.messages.push(message);
        }
        chat.messages.sort(function(a,b){return new Date(b.dataTime) - new Date(a.dataTime);});
        chat.messages[18].replyMessage = chat.messages[12];
        chat.messages[15].replyMessage = chat.messages[9];
        chat.unreadMessageCount = Math.floor(Math.random() * (chat.messages.length + 1));
        this._chats.push(chat);
      }
      // console.log(this._chats);
    };

}

export default new MockDataManager();