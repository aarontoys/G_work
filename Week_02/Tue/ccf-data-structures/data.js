console.log(store1);

var store1 = {
  '2015-01-06': [
    ['Dark Chocolate Crunchies', '4.39', 1],
    ['Mint Wafers', '1.19', 3],
    ['Peppermint Poppers', '2.48', 2],
    ['Peanut Butter Buttered Peanuts', '1.89', 6]
  ],
  '2015-01-07': [
    ['Dark Chocolate Crunchies', '4.39', 4],
    ['Berry Bites', '7.99', 3],
    ['Peppermint Poppers', '2.48', 1],
    ['Caramel Twists', '.60', 7]
  ],
  '2015-01-08': [
    ['Banana Bunches', '4.63', 1],
    ['Peppermint Poppers', '2.48', 3],
    ['Mint Wafers', '1.19', 7],
    ['Dark Chocolate Crunchies', '4.39', 2],
    ['Caramel Twists', '.60', 1]
  ],
  '2015-01-09': [
    ['Caramel Twists', '.60', 3],
    ['Peanut Butter Buttered Peanuts', '1.89', 2]
  ],
  '2015-01-10': [
    ['Peanut Butter Buttered Peanuts', '1.89', 7],
    ['Caramel Twists', '.60', 2],
    ['Berry Bites', '7.99', 3],
    ['Dark Chocolate Crunchies', '4.39', 8],
    ['Mint Wafers', '1.19', 2]
  ]
}

var store2 = {
  'inventory prices': {
      'Dark Chocolate Crunchies': 4.29,
      'Mint Wafers': 1.09,
      'Peppermint Poppers': 2.38,
      'Peanut Butter Buttered Peanuts': 1.79,
      'Berry Bites': 7.89,
      'Caramel Twists': .50,
      'Banana Bunches': 4.53
  },
  'sale dates': {
      'Dark Chocolate Crunchies': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-08'],
      'Mint Wafers': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-09'],
      'Peppermint Poppers': ['2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Peanut Butter Buttered Peanuts': ['2015-01-07', '2015-01-07'],
      'Berry Bites': ['2015-01-06', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10'],
      'Caramel Twists': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10'],
      'Banana Bunches': ['2015-01-10', '2015-01-10']
  }
}

var store3 = [
  {
    'date':'2015-01-06',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':0
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':3
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-07',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':2
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':1
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':3
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-08',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':1
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':0
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':2
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':0
      }
    }
  },
  {
    'date':'2015-01-09',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost':4.29,
        'quantity':0
      },
      'Mint Wafers': {
        'cost':1.09,
        'quantity':3
      },
      'Peppermint Poppers': {
        'cost':2.38,
        'quantity':2
      },
      'Peanut Butter Buttered Peanuts': {
        'cost':1.79,
        'quantity':1
      },
      'Berry Bites': {
        'cost':7.89,
        'quantity':0
      },
      'Caramel Twists': {
        'cost':.50,
        'quantity':0
      },
      'Banana Bunches': {
        'cost':4.53,
        'quantity':1
      }
    }
  },
  {
    'date':'2015-01-10',
    'inventory sold': {
      'Dark Chocolate Crunchies': {
        'cost': 4.29,
        'quantity':2
      },
      'Mint Wafers': {
        'cost': 1.09,
        'quantity':1
      },
      'Peppermint Poppers': {
        'cost': 2.38,
        'quantity':0
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.79,
        'quantity':2
      },
      'Berry Bites': {
        'cost': 7.89,
        'quantity':5
      },
      'Caramel Twists': {
        'cost': .50,
        'quantity':7
      },
      'Banana Bunches': {
        'cost': 4.53,
        'quantity':2
      }
    }
  }
]

var store4 = {
      'Dark Chocolate Crunchies': {
        'cost': 4.34,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-08', '2015-01-08']
      },
      'Mint Wafers': {
        'cost': 1.14,
        'sold on': ['2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09']
      },
      'Peppermint Poppers': {
        'cost': 2.43,
        'sold on': ['2015-01-07', '2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10', '2015-01-10']
      },
      'Peanut Butter Buttered Peanuts': {
        'cost': 1.84,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-08']
      },
      'Berry Bites': {
        'cost': 7.94,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-06', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-07', '2015-01-08', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-09', '2015-01-10', '2015-01-10', '2015-01-10', '2015-01-10']
      },
      'Caramel Twists': {
        'cost': .55,
        'sold on': ['2015-01-07', '2015-01-08', '2015-01-08', '2015-01-08', '2015-01-09', '2015-01-10']
      },
      'Banana Bunches': {
        'cost': 4.58,
        'sold on': ['2015-01-06', '2015-01-06', '2015-01-07', '2015-01-10']
      }
}

// Exercises - see readme.md for line refs:

  //Section 1

    //8 console.log(store1['2015-01-08'][0][1]);
    //9 console.log(store4['Dark Chocolate Crunchies']['cost']);
    //10 console.log(store2['sale dates']['Banana Bunches']);
    //11 console.log(store2['sale dates']['Banana Bunches'].length);
    //12 console.log(store4['Berry Bites']['sold on'].length);

    //13 var candy = 'Mint Wafers' 
    //   console.log(store2['sale dates'][candy]);
    //14 var candy = 'Banana Bunches' 
    //   console.log(store2['sale dates'][candy]);

  //Section 2

    //17 var prices = store2['inventory prices']['Mint Wafers']
    //   console.log(prices);


    //18 prices = 2.05;
    //   console.log(prices);

    //19 var pbbsSalesDates = store2['sale dates']['Peanut Butter Buttered Peanuts']
    //   console.log(pbbsSalesDates);

    //20 pbbsSalesDates.push('2016-01-12', '2016-01-13');
    //   console.log(pbbsSalesDates);

    //21 var CT = store2['sale dates']['Caramel Twists'];
    //   console.log(CT.length);
    //   CT.pop();
    //   console.log(CT.length);

    //22 var BB = store3[1]['inventory sold']['Berry Bites']
    //   console.log(BB);

    //23 BB['quantity'] = 372;
    // console.log(BB);

  //Section 3
    //26 
      //   var can1 = store1['2015-01-08']
      //   var can2 = [];
      //   for(var key in can1){
      //     console.log(can1[key][0]);
        
      //     can2.push(can1[key][0]);
      //   }
      //   console.log(can2);
      //   console.log(can2[2]);
    
    //27 
      //var can1 = store1['2015-01-08']
      //   var can2 = [];
      //   var i = 0;
      //   for(var key in can1){
      //     i += can1[key][2];
      //   // i += i;
      //   // console.log(i);
      //   }
      //   console.log(i);

    //28 
      //var can3 = store3;
      //   var s3dates = [];
      //   for (var key in can3){
      //     console.log(can3[key]['date']);
      //     s3dates.push(can3[key]['date']);
      //   }
      //   console.log(s3dates);

    //29
          // var can4 = store2['sale dates']['Caramel Twists'];
          // var CTobj ={};
          // var s3arr = [];
          // // console.log(can4[key]);
          // for (var  key in can4){
          //   s3arr.push(can4[key])
          // }

          // for(var i = 0; i< s3arr.length; i++) {
          //     var num = s3arr[i];

          //     // CTobj[num] = CTobj[num] ? CTobj[num]+1 : 1;
          //     if (CTobj[num] = CTobj[num]){
          //       CTobj[num] = CTobj[num]+1;
          //     }
          //     else  {
          //       CTobj[num] = 1;
          //     }
          // }
          // console.log(CTobj);

    //30 - N/A

//31
  //console.log(Object.keys(store1));

//32 N/A

//33
  // var s1Dates = Object.keys(store1)
  // // console.log(s1Dates)

  // for(var key in store1){
  //   console.log(store1[key]);
  // }


//34
  var s1Dates = Object.keys(store1)
  // var numCan = 0
  // console.log(s1Dates);
  // console.log(s1Dates);
  
   for(var key in store1){
    var allArr = store1[key];
    console.log(allArr);
  }

// let's try using for loop!!!
  for (var i = 0; i <= allArr.length; ++i){
    console.log(allArr);
  }

  // for(var key in store1){
  //   var allArr = store1[key];
  //   console.log(allArr[k);
  // }


  // for(var key in store1){
  //   // for(var i = 0; i < s1Dates; ++i){
  //     console.log(store1[key][0][0]);
  //   // }
  // }

        

        
        
  








