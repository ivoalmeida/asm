import * as faker from 'faker';

const userSchema = {
  // userId: faker.random.uuid,
  name: faker.name.firstName,
  email: faker.internet.email('some', 'one', faker.internet.domainName()),
  password: faker.random.uuid(),
  // lastName: faker.name.lastName,
  // admin: faker.random.boolean,
};

const generator = (schema: object, min: number = 1, max: number) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {}),
  );
};

// const users = () => generator(userSchema, 1, 100);

// export default users;

// export const users = () => {
//   const a = [];

//   for (let i = 0; i < 50; i++) {
//     a.push(name);
//   }
//   debugger;
//   return a;
// };
const a = [];
for (let i = 0; i < 50; i++) {
  a.push({
    userId: faker.random.uuid,
    firstName: faker.name.firstName,
    email: faker.internet.email('some', 'one', faker.internet.domainName()),
    password: faker.internet.password,
    lastName: faker.name.lastName,
    admin: faker.random.boolean,
  });
}

export const users = a;

export const oldUsers = [
  {
    name: faker.name.firstName,
    email: 'ivo@gmail.com',
    password: 'psd',
  },
  {
    name: 'Emanuele',
    email: 'elodeke1@gravatar.com',
    password: 'B8VhYuG6WiH',
  },
  {
    name: 'Saraann',
    email: 'srao2@blogger.com',
    password: '5qvGccMV',
  },
  {
    name: 'Ira',
    email: 'ilivezley3@goo.gl',
    password: '0LRRY64MVg',
  },
  {
    name: 'Parke',
    email: 'pandrault4@blogtalkradio.com',
    password: '5GUQ0VjpMe',
  },
  {
    name: 'Nomi',
    email: 'nmaffetti5@booking.com',
    password: 'xy8WMH',
  },
  {
    name: 'Em',
    email: 'eaim6@geocities.com',
    password: 'V7LhUxJK',
  },
  {
    name: 'Huntley',
    email: 'hbiddle7@cpanel.net',
    password: 'Cn1NX6',
  },
  {
    name: 'Alika',
    email: 'astewart8@princeton.edu',
    password: 'weRsSfYz',
  },
  {
    name: 'Starlin',
    email: 'sburdekin9@narod.ru',
    password: 'ScPSU4sS8',
  },
  {
    name: 'Steven',
    email: 'spomfreya@yandex.ru',
    password: 'KYOzhM',
  },
  {
    name: 'Sophey',
    email: 'shacaudb@blogger.com',
    password: 'QYkyvHgRZ',
  },
  {
    name: 'Kendall',
    email: 'krudlandc@wordpress.com',
    password: 'TqAXsthrfA',
  },
  {
    name: 'Gare',
    email: 'glambirdd@pen.io',
    password: 'IqrYW8KDw',
  },
  {
    name: 'Max',
    email: 'mstarmonte@columbia.edu',
    password: 'DrG8SO7fHYo',
  },
  {
    name: 'Bird',
    email: 'bhalladeyf@chronoengine.com',
    password: 'kbNbFvrx83vW',
  },
  {
    name: 'Silvia',
    email: 'sdranfieldg@upenn.edu',
    password: '1IUiPa',
  },
  {
    name: 'Galvin',
    email: 'gharkinsh@tripod.com',
    password: '2Ks7Sm',
  },
  {
    name: 'Andrew',
    email: 'awyldishi@answers.com',
    password: 'VeV7603SqT6Y',
  },
  {
    name: 'Gideon',
    email: 'glutyj@google.pl',
    password: 'XcM96GHnjp',
  },
  {
    name: 'Arron',
    email: 'asponk@webs.com',
    password: 'kqZrKoWeLh',
  },
  {
    name: 'Tommy',
    email: 'tseymerl@furl.net',
    password: 'MDXqu7JmcDy',
  },
  {
    name: 'Mella',
    email: 'mcrichtenm@smugmug.com',
    password: 'v5QQrI',
  },
  {
    name: 'Cecil',
    email: 'ccanfern@guardian.co.uk',
    password: 'vFUjvZ',
  },
  {
    name: 'Elysha',
    email: 'ephizakarleyo@123-reg.co.uk',
    password: 'RbsJtL42eVkl',
  },
  {
    name: 'Lilia',
    email: 'lmckertonp@msu.edu',
    password: 'F60F0t8',
  },
  {
    name: 'Verena',
    email: 'vbetjemanq@squarespace.com',
    password: '06cTvxeuuEWd',
  },
  {
    name: 'Stuart',
    email: 'sillyesr@phoca.cz',
    password: 'SW806XP',
  },
  {
    name: 'Frasco',
    email: 'frosles@usa.gov',
    password: 'vjkHDJ3MJ',
  },
  {
    name: 'Fleming',
    email: 'fwiddt@sohu.com',
    password: 'u02QIpsi',
  },
  {
    name: 'Thelma',
    email: 'tkopmanu@tinypic.com',
    password: 'AOzcFvsYl52N',
  },
  {
    name: 'Kaiser',
    email: 'kairyv@springer.com',
    password: 'TzDrZf',
  },
  {
    name: 'Nelson',
    email: 'nrosebyw@earthlink.net',
    password: 'aMTFnUWG',
  },
  {
    name: 'Doroteya',
    email: 'dharborx@constantcontact.com',
    password: 'hV7Srx3U2S',
  },
  {
    name: 'Kim',
    email: 'ktrengovey@ask.com',
    password: 'aqAnal',
  },
  {
    name: 'Rorie',
    email: 'rpackhamz@simplemachines.org',
    password: 'C3EUlOC2nKv',
  },
  {
    name: 'Marissa',
    email: 'msenn10@netlog.com',
    password: 'hRB6r7q',
  },
  {
    name: 'Maiga',
    email: 'mgilliver11@theglobeandmail.com',
    password: 'Kd37VQi',
  },
  {
    name: 'Valene',
    email: 'vmacsween12@w3.org',
    password: '1RAfI2ZFCa',
  },
  {
    name: 'Filberto',
    email: 'fvallantine13@photobucket.com',
    password: 'r09Hxt3m4',
  },
  {
    name: 'Lynea',
    email: 'ltooley14@wufoo.com',
    password: '4ka6LWFfn5',
  },
  {
    name: 'Gertrud',
    email: 'gseely15@cmu.edu',
    password: 'JNSeXmgQ1v',
  },
  {
    name: 'Bondie',
    email: 'bmccaull16@go.com',
    password: 'pNvFtO6C',
  },
  {
    name: 'Jerrine',
    email: 'jlangworthy17@quantcast.com',
    password: 'iPofZTT',
  },
  {
    name: 'Lorelle',
    email: 'lkesterton18@last.fm',
    password: '43NZLbESnVZ',
  },
  {
    name: 'Horst',
    email: 'holdham19@furl.net',
    password: 'hqMa6tXeS4qK',
  },
  {
    name: 'Marleah',
    email: 'mbrogden1a@ask.com',
    password: 'D0QiAiUYxRm',
  },
  {
    name: 'Garv',
    email: 'gambrogio1b@columbia.edu',
    password: 'R5JAFpuLmOE',
  },
  {
    name: 'Kettie',
    email: 'kbraisher1c@wordpress.com',
    password: 'LXqXI5sQ28S',
  },
  {
    name: 'Robers',
    email: 'ralway1d@globo.com',
    password: 'wAjV2ms8YDo5',
  },
  {
    name: 'Moss',
    email: 'mchrispin1e@facebook.com',
    password: 'RdQM5bqymT9',
  },
  {
    name: 'Garrot',
    email: 'gleleu1f@sohu.com',
    password: 'kDby2sFJI',
  },
  {
    name: 'Catrina',
    email: 'cboerder1g@dropbox.com',
    password: 'ZeUtDxavaUz',
  },
  {
    name: 'Hannie',
    email: 'hrippingale1h@marriott.com',
    password: 'Xgtlyx4YpAU',
  },
  {
    name: 'Zebulon',
    email: 'zloggie1i@uol.com.br',
    password: 'DgbySgNf',
  },
  {
    name: 'Timmie',
    email: 'trowbrey1j@state.gov',
    password: 'UW8iVdtX',
  },
  {
    name: 'Wash',
    email: 'wlivezey1k@devhub.com',
    password: 'DatEMR6Czuht',
  },
  {
    name: 'Chad',
    email: 'cguntrip1l@zimbio.com',
    password: 'n89GGU9o',
  },
  {
    name: 'Richart',
    email: 'rprose1m@techcrunch.com',
    password: 'sNueYRBDD6',
  },
  {
    name: 'Grissel',
    email: 'gmclane1n@instagram.com',
    password: 'tM5QruM8oIs',
  },
  {
    name: 'Roch',
    email: 'rwebermann1o@pen.io',
    password: 'h2lm3AwqL6',
  },
  {
    name: 'Udell',
    email: 'uackenson1p@smh.com.au',
    password: 'KIjD2u',
  },
  {
    name: 'Kylila',
    email: 'kbaudouin1q@simplemachines.org',
    password: 'XjJVlFO',
  },
  {
    name: 'Liam',
    email: 'lwhayman1r@feedburner.com',
    password: 'hMICGF',
  },
  {
    name: 'Cacilia',
    email: 'cstockell1s@i2i.jp',
    password: '10PgXCL',
  },
  {
    name: 'Nichols',
    email: 'nfawckner1t@prlog.org',
    password: 'mZwwgkYsWxsk',
  },
  {
    name: 'Venita',
    email: 'vblaine1u@cafepress.com',
    password: 'AJ5L1G7gg3',
  },
  {
    name: 'Donielle',
    email: 'dfannin1v@arstechnica.com',
    password: 'lSrzJGM',
  },
  {
    name: 'Carleton',
    email: 'casling1w@eepurl.com',
    password: 'PQ7SD23qc',
  },
  {
    name: 'Tommy',
    email: 'tmiebes1x@bluehost.com',
    password: '17la8ef',
  },
  {
    name: 'Sharai',
    email: 'sreely1y@flavors.me',
    password: '3tuXZznFKO7A',
  },
  {
    name: 'Aksel',
    email: 'askinn1z@state.gov',
    password: '3LwRcib',
  },
  {
    name: 'Gabbie',
    email: 'gbover20@state.tx.us',
    password: 'lM6udtN',
  },
  {
    name: 'Yolane',
    email: 'ycoward21@paypal.com',
    password: 'N8uGRWD4TQ',
  },
  {
    name: 'Giuditta',
    email: 'gbaddoe22@census.gov',
    password: 'vA7ENc5R',
  },
  {
    name: 'Sunny',
    email: 'slimprecht23@gnu.org',
    password: 'Bl1dnYtoOv',
  },
  {
    name: 'Brod',
    email: 'baurelius24@example.com',
    password: 'Btz9jk',
  },
  {
    name: 'Ciel',
    email: 'ccabel25@cafepress.com',
    password: 'XTJE5QBu0Z',
  },
  {
    name: 'Lee',
    email: 'lcrumly26@goo.gl',
    password: 'JwVgoln',
  },
  {
    name: 'Patin',
    email: 'pparlatt27@xinhuanet.com',
    password: 'ZdWoyv6OWu',
  },
  {
    name: 'Rikki',
    email: 'rgalway28@stanford.edu',
    password: 'fD1o8bw',
  },
  {
    name: 'Urbain',
    email: 'umellodey29@marketwatch.com',
    password: 'WeolfxrffwI',
  },
  {
    name: 'Kerry',
    email: 'kyglesia2a@berkeley.edu',
    password: 'zymekItp',
  },
  {
    name: 'Dennie',
    email: 'ddudson2b@wisc.edu',
    password: '7VgwlH6ObJO',
  },
  {
    name: 'Jordain',
    email: 'jbasey2c@scribd.com',
    password: 'jtEZcLRuWg',
  },
  {
    name: 'Cody',
    email: 'cchilderley2d@joomla.org',
    password: 'aF8GAAJjPW',
  },
  {
    name: 'Denny',
    email: 'ddignall2e@yandex.ru',
    password: 'E7EBvsZ',
  },
  {
    name: 'Byrann',
    email: 'bcuniam2f@marriott.com',
    password: 'WbXnEYHM',
  },
  {
    name: 'Fairlie',
    email: 'fhully2g@w3.org',
    password: '9gBUf8e',
  },
  {
    name: 'Stephan',
    email: 'shartridge2h@seesaa.net',
    password: '7HtBbRW',
  },
  {
    name: 'Sibella',
    email: 'sgove2i@vistaprint.com',
    password: 'oQugSHnOFT',
  },
  {
    name: 'Annora',
    email: 'acurnnok2j@epa.gov',
    password: '8e66e4Jq',
  },
  {
    name: 'Tandie',
    email: 'tboldero2k@un.org',
    password: '0vkAoe5',
  },
  {
    name: 'Dorie',
    email: 'dmarrett2l@loc.gov',
    password: '8SwL3vd',
  },
  {
    name: 'Dita',
    email: 'dcarlisle2m@scribd.com',
    password: 'pbyH5Acg',
  },
  {
    name: 'Violante',
    email: 'vsummerside2n@washingtonpost.com',
    password: '3qO4Y8MXhcr',
  },
  {
    name: 'Clywd',
    email: 'cmortimer2o@slideshare.net',
    password: 'dKss5f',
  },
  {
    name: 'Rowena',
    email: 'rsimmers2p@blogger.com',
    password: 'XhyYUOJijquQ',
  },
  {
    name: 'Penny',
    email: 'pmitchenson2q@slashdot.org',
    password: 'WLgZN7',
  },
  {
    name: 'Claudio',
    email: 'cmallan2r@kickstarter.com',
    password: 'hwCtkdL1HKjP',
  },
];
