const { uuid } = require('uuidv4');

const contacts = [
   {
      id: uuid(),
      name: 'Mateus',
      email: 'mateus@mail.com',
      phone: '123456123',
      category_id: uuid(),
   },
];

class ContactsRepository {
   findAll() {
      return new Promise((resolve) => resolve(contacts));
   }

   findById(id) {
      return new Promise((resolve) => resolve(
         contacts.find((contact) => contact.id === id),
      ));
   }
}

module.exports = new ContactsRepository();