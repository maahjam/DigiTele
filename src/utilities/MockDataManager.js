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
      // const lastSeens = ["last seen a long time ago", "last seen within a month", "last seen within a week", "last seen yesterday at 23:55", "online", "last seen recently", "last seen 12 hours ago", "last seen 04/01/21", "last seen 6 minutes ago"];
      // for (let i = 0; i < 20; i++) {
      //   const contact = {};
      //   contact.username = faker.internet.userName();
      //   contact.phone = faker.phone.phoneNumber('+1 (###) ###-####');
      //   contact.name = faker.name.firstName() + " " + faker.name.lastName();
      //   contact.photoURL = faker.internet.avatar();
      //   contact.lastSeen = faker.random.arrayElement(lastSeens);
      //   this._contacts.push(contact);
      // }
      // console.log(this._contacts);

      this._contacts = [
        {
            "username": "Silas_Fahey67",
            "phone": "+1 (126) 643-0372",
            "name": "Floyd Reynolds",
            "photoURL": "https://cdn.fakercloud.com/avatars/rtyukmaev_128.jpg",
            "lastSeen": "last seen within a month"
        },
        {
            "username": "Missouri5",
            "phone": "+1 (042) 146-5141",
            "name": "Eda Hauck",
            "photoURL": "https://cdn.fakercloud.com/avatars/taylorling_128.jpg",
            "lastSeen": "last seen yesterday at 23:55"
        },
        {
            "username": "Jovany53",
            "phone": "+1 (120) 486-8668",
            "name": "Milo Stehr",
            "photoURL": "https://cdn.fakercloud.com/avatars/elbuscainfo_128.jpg",
            "lastSeen": "online"
        },
        {
            "username": "Coty_Robel91",
            "phone": "+1 (918) 239-2165",
            "name": "Cristobal Veum",
            "photoURL": "https://cdn.fakercloud.com/avatars/switmer777_128.jpg",
            "lastSeen": "online"
        },
        {
            "username": "Arianna0",
            "phone": "+1 (147) 094-5802",
            "name": "Mossie Hahn",
            "photoURL": "https://cdn.fakercloud.com/avatars/rahmeen_128.jpg",
            "lastSeen": "online"
        },
        {
            "username": "Dameon86",
            "phone": "+1 (513) 561-9007",
            "name": "Linnea Rau",
            "photoURL": "https://cdn.fakercloud.com/avatars/raphaelnikson_128.jpg",
            "lastSeen": "last seen within a week"
        },
        {
            "username": "Raquel79",
            "phone": "+1 (489) 892-6978",
            "name": "Mafalda Olson",
            "photoURL": "https://cdn.fakercloud.com/avatars/brandonburke_128.jpg",
            "lastSeen": "last seen yesterday at 23:55"
        },
        {
            "username": "Kaley.Lemke",
            "phone": "+1 (638) 694-4155",
            "name": "Emilio Sipes",
            "photoURL": "https://cdn.fakercloud.com/avatars/nitinhayaran_128.jpg",
            "lastSeen": "last seen recently"
        },
        {
            "username": "Reymundo_Rolfson22",
            "phone": "+1 (115) 630-9934",
            "name": "Rosalind Gottlieb",
            "photoURL": "https://cdn.fakercloud.com/avatars/martip07_128.jpg",
            "lastSeen": "last seen 12 hours ago"
        },
        {
            "username": "Dariana_Senger",
            "phone": "+1 (576) 421-2246",
            "name": "Emmitt Kunde",
            "photoURL": "https://cdn.fakercloud.com/avatars/ashernatali_128.jpg",
            "lastSeen": "last seen 6 minutes ago"
        },
        {
            "username": "Tobin6",
            "phone": "+1 (250) 605-3484",
            "name": "Mafalda Kunde",
            "photoURL": "https://cdn.fakercloud.com/avatars/baumann_alex_128.jpg",
            "lastSeen": "online"
        },
        {
            "username": "Sally42",
            "phone": "+1 (114) 783-3361",
            "name": "Drew Bauch",
            "photoURL": "https://cdn.fakercloud.com/avatars/markolschesky_128.jpg",
            "lastSeen": "last seen recently"
        },
        {
            "username": "Gabe_Veum67",
            "phone": "+1 (282) 320-8251",
            "name": "Maureen Gerhold",
            "photoURL": "https://cdn.fakercloud.com/avatars/Shriiiiimp_128.jpg",
            "lastSeen": "online"
        },
        {
            "username": "Claudine.Sanford",
            "phone": "+1 (564) 983-2095",
            "name": "Hettie Smitham",
            "photoURL": "https://cdn.fakercloud.com/avatars/cicerobr_128.jpg",
            "lastSeen": "online"
        },
        {
            "username": "Murl83",
            "phone": "+1 (973) 260-0133",
            "name": "Ludie Schaefer",
            "photoURL": "https://cdn.fakercloud.com/avatars/gavr1l0_128.jpg",
            "lastSeen": "last seen 12 hours ago"
        },
        {
            "username": "Modesta.Tremblay",
            "phone": "+1 (396) 625-6756",
            "name": "Verla White",
            "photoURL": "https://cdn.fakercloud.com/avatars/dzantievm_128.jpg",
            "lastSeen": "last seen within a week"
        },
        {
            "username": "Aurelie_Block",
            "phone": "+1 (571) 062-8790",
            "name": "Emmy Gulgowski",
            "photoURL": "https://cdn.fakercloud.com/avatars/andrewarrow_128.jpg",
            "lastSeen": "last seen a long time ago"
        },
        {
            "username": "Jarrod_Yost42",
            "phone": "+1 (979) 567-1428",
            "name": "Barney Blanda",
            "photoURL": "https://cdn.fakercloud.com/avatars/wesleytrankin_128.jpg",
            "lastSeen": "last seen a long time ago"
        },
        {
            "username": "Mekhi_Friesen",
            "phone": "+1 (625) 819-0889",
            "name": "Madie Schiller",
            "photoURL": "https://cdn.fakercloud.com/avatars/marcusgorillius_128.jpg",
            "lastSeen": "last seen within a month"
        },
        {
            "username": "Amina.OConnell74",
            "phone": "+1 (599) 866-2740",
            "name": "Janessa Bode",
            "photoURL": "https://cdn.fakercloud.com/avatars/mateaodviteza_128.jpg",
            "lastSeen": "last seen 04/01/21"
        }
    ];
    };

    _generateChatsData = () => {
      for (let i = 0; i < 15; i++) {
        const chat = {};
        chat.contact = this._contacts[this._contacts.length - 1 - i];
        chat.messages = [];
        for (let j = 0; j < 20; j++) {
          const message = {};
          message.id = (this._idPrefix + j).toString();
          message.text = faker.lorem.lines(Math.floor(Math.random() * 3) + 1);
          message.isMine = faker.random.arrayElement([true, false]);
          message.dateTime = faker.date.recent(4);
          message.replyMessage = null;
          chat.messages.push(message);
        }
        chat.messages.sort(function(a,b){return new Date(b.dateTime) - new Date(a.dateTime);});
        chat.messages[18].replyMessage = chat.messages[12];
        chat.messages[15].replyMessage = chat.messages[9];
        chat.unreadMessageCount = Math.floor(Math.random() * (chat.messages.length + 1));
        this._chats.push(chat);
      }
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

    removeChatMessage = (contactUsername, messageId) => {
      let x = this._chats.find(c => c.contact.username === contactUsername).messages;
     
x = x.filter(function( obj ) {
        return obj.id !== messageId;
      });


      this._chats.find(c => c.contact.username === contactUsername).messages = x;

    };

}

export default new MockDataManager();