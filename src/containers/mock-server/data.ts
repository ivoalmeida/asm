import * as faker from 'faker';

const fakeUsers = [];
for (let i = 0; i < 50; i++) {
  fakeUsers.push({
    userId: faker.random.uuid,
    firstName: faker.name.firstName,
    email: faker.internet.email('some', 'one', faker.internet.domainName()),
    password: faker.internet.password,
    lastName: faker.name.lastName,
    admin: faker.random.boolean,
  });
}

export const users = fakeUsers;

const fakeAccounts = [];
for (let i = 0; i < 50; i++) {
  fakeAccounts.push({
    accountId: faker.random.uuid(),
    name: faker.company.companySuffix(),
    type: faker.company.companyName(),
    contactName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    accountManager: `${faker.name.firstName()} ${faker.name.lastName()}`,
    created: faker.date.past(5, '03-05-2018').toLocaleDateString('en-gb'),
    status: faker.random.boolean(),
  });
}

export const accounts = fakeAccounts;
