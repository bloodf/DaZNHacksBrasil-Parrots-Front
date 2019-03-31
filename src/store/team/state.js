export default {
  data: {
    roosterHome: {
      players: [
        {
          'name': 'Candice Schuster',
          'goals': 1,
          'cardFault': 1,
          'lastEventMinute': 65,
        }, {
          'name': 'Vida Cronin',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 31,
        }, {
          'name': 'Marielle Goldner',
          'goals': 2,
          'cardFault': 0,
          'lastEventMinute': 43,
        }, {
          'name': 'Myrtle Macejkovic',
          'goals': 0,
          'cardFault': 0,
          'lastEventMinute': 40,
        }, {
          'name': 'Jarret Becker',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 54,
        }, {
          'name': 'Modesta Goodwin',
          'goals': 1,
          'cardFault': 1,
          'lastEventMinute': 80,
        }, {
          'name': 'Edwardo Aufderhar',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 46,
        }, {
          'name': 'Angelina Schaden',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 49,
        }, {
          'name': 'Joanie Pagac',
          'goals': 1,
          'cardFault': 1,
          'lastEventMinute': 25,
        }, {
          'name': 'Morgan Bailey',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 9,
        }, {
          'name': 'Darrin Pfannerstill',
          'goals': 0,
          'cardFault': 0,
          'lastEventMinute': 53,
        }, {
          'name': 'Ilene MacGyver',
          'goals': 0,
          'cardFault': 1,
          'lastEventMinute': 57,
        }, {
          'name': 'Shyanne Muller',
          'goals': 1,
          'cardFault': 1,
          'lastEventMinute': 80,
        }, {
          'name': 'Eloise Harris',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 75,
        }, {
          'name': 'Regan Cremin',
          'goals': 0,
          'cardFault': 1,
          'lastEventMinute': 57,
        }, {
          'name': 'Cleora DuBuque',
          'goals': 0,
          'cardFault': 1,
          'lastEventMinute': 0,
        }, {
          'name': 'Erwin Ledner',
          'goals': 1,
          'cardFault': 1,
          'lastEventMinute': 48,
        }, {
          'name': 'Gina Ledner',
          'goals': 2,
          'cardFault': 0,
          'lastEventMinute': 82,
        }].map((r) => ({ ...r, goals: Math.floor(Math.random() * (3)), number: Math.floor(Math.random() * (27)) })),
      manager:  {
        'name': 'Candice Schuster',
        'goals': 0,
        'cardFault': 0,
        'lastEventMinute': 0,
        'number': 'M',
      }
    },
    roosterAway: {
      players: [
        {
          'name': 'Jarvis Mante',
          'goals': 0,
          'cardFault': 2,
          'lastEventMinute': 21,
          'substitute': 'out',
        }, {
          'name': 'Bernie Berge',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 16,
        }, {
          'name': 'Arnold Cummerata',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 36,
        }, {
          'name': 'Rebeka Koss',
          'goals': 2,
          'cardFault': 3,
          'lastEventMinute': 54,
        }, {
          'name': 'Vanessa Spencer',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 36,
        }, {
          'name': 'Halle Prosacco',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 11,
        }, {
          'name': 'Jeanette Schulist',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 61,
        }, { 'name': 'Dorcas Runte', 'goals': 2, 'cardFault': 1, 'lastEventMinute': 9 }, {
          'name': 'Dwight Bode',
          'goals': 1,
          'cardFault': 0,
          'lastEventMinute': 49,
        }, {
          'name': 'Lavada Zieme',
          'goals': 0,
          'cardFault': 1,
          'lastEventMinute': 38,
        }, {
          'name': 'Lauren Predovic',
          'goals': 0,
          'cardFault': 0,
          'lastEventMinute': 82,
        }, {
          'name': 'Demarco Osinski',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 50,
        }, {
          'name': 'Mohamed Miller',
          'goals': 0,
          'cardFault': 0,
          'lastEventMinute': 52,
        }, {
          'name': 'Matteo Daniel',
          'goals': 2,
          'cardFault': 0,
          'lastEventMinute': 30,
          'substitute': 'in',
        }, {
          'name': 'Esther Lebsack',
          'goals': 2,
          'cardFault': 1,
          'lastEventMinute': 74,
        }, { 'name': 'Loren Ratke', 'goals': 0, 'cardFault': 0, 'lastEventMinute': 41 }, {
          'name': 'Hosea Lesch',
          'goals': 0,
          'cardFault': 0,
          'lastEventMinute': 56,
        }, { 'name': 'Bert Padberg', 'goals': 0, 'cardFault': 0, 'lastEventMinute': 79 }].map((r) => ({ ...r, goals: Math.floor(Math.random() * (3 - 0)), number: Math.floor(Math.random() * (27))  })),
      manager:  {
        'name': 'Candice Schuster',
        'goals': 0,
        'cardFault': 0,
        'lastEventMinute': 0,
        'number': 'M',
      }
    },
  },
}
