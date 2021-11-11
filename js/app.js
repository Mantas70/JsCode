"use strict"


    let books = [
        {
            'Fantastine': [
                {
                    'ISBN': '1',
                    'Leidimo metai': '2021',
                    'Pavadinimas': 'Metai',
                    'Puslapiu skaicius': '165',
                    'Kaina': '30'
                },
                {
                    'ISBN': '2',
                    'Leidimo metai': '2014',
                    'Pavadinimas': 'Žolynas. Žvėrynas',
                    'Puslapiu skaicius': '165',
                    'Kaina': '45'
                },
                {
                    'ISBN': '3',
                    'Leidimo metai': '2013',
                    'Pavadinimas': 'Jozefina',
                    'Puslapiu skaicius': '165',
                    'Kaina': '25'
                },
                {
                    'ISBN': '4',
                    'Leidimo metai': '2012',
                    'Pavadinimas': 'Panama labai graži ',
                    'Puslapiu skaicius': '165',
                    'Kaina': '38'
                }
            ],
            'Kriminaline': [
                {
                    'ISBN': '5',
                    'Leidimo metai': '2021',
                    'Pavadinimas': 'Kometa artėja!',
                    'Puslapiu skaicius': '165',
                    'Kaina': '31'
                },
                {
                    'ISBN': '6',
                    'Leidimo metai': '2011',
                    'Pavadinimas': 'Gimtadienis su Žvirbliu',
                    'Puslapiu skaicius': '165',
                    'Kaina': '22'
                },
                {
                    'ISBN': '7',
                    'Leidimo metai': '2010',
                    'Pavadinimas': 'Ponas Repečkius vėl tarp draugų',
                    'Puslapiu skaicius': '165',
                    'Kaina': '24'
                },
                {
                    'ISBN': '8',
                    'Leidimo metai': '2008',
                    'Pavadinimas': 'Džiovintas debesėlis',
                    'Puslapiu skaicius': '165',
                    'Kaina': '33'
                }
            ],
            'Grozine': [
                {
                    'ISBN': '9',
                    'Leidimo metai': '2009',
                    'Pavadinimas': 'Madingiausias krokodilas',
                    'Puslapiu skaicius': '165',
                    'Kaina': '42'
                },
                {
                    'ISBN': '10',
                    'Leidimo metai': '2001',
                    'Pavadinimas': 'Berniukas ir žuvėdros',
                    'Puslapiu skaicius': '165',
                    'Kaina': '25'
                },
                {
                    'ISBN': '11',
                    'Leidimo metai': '2001',
                    'Pavadinimas': 'Pūkuotuko pasaulis',
                    'Puslapiu skaicius': '165',
                    'Kaina': '56'
                },
                {
                    'ISBN': '12',
                    'Leidimo metai': '2019',
                    'Pavadinimas': 'Ponas Klingzoras truputį mokėjo burti',
                    'Puslapiu skaicius': '165',
                    'Kaina': '36'
                }
            ]
        }
    ]
let BookIn = []
    for (let object of books) {
        for (let multiObject in object) {
            console.log(multiObject)
            console.log(multiObject + ' Literatura' + ' (' + object[multiObject].length + ')')
            object[multiObject].sort(function(a,b) {
               let nameA = a.Pavadinimas
               let nameB = b.Pavadinimas
               if(nameA < nameB){
                   return -1;
               }
               if(nameB < nameA){
                   return 1;
               }
               return 0;
            });

            for (let number in object[multiObject]) {
                for (let property in object[multiObject][number]) {
                    if(property == 'Kaina'){
                        let priceIncrease = []
                        priceIncrease.push(object[multiObject][number][property])
                        const map = priceIncrease.map(x => x * 1.15);
                        object[multiObject][number][property] = map;
                    }
                    if(property == 'Pavadinimas'){
                        BookIn.push(object[multiObject][number][property])
                    }
                if (object[multiObject][number][property] === '2021') {
                    console.log(property + ": " + object[multiObject][number][property] + " (Nauja knyga)")
                } else {
                    console.log(property + ": " + object[multiObject][number][property])
                }
            }
        console.log(': ')
        }
    }
}
    const bookLength = BookIn.filter(BookIn => BookIn.length > 30);
    console.log('Knygos su ilgu pavadinimu (30+): ')
    for(let Length of bookLength){
        console.log(Length)
    }

