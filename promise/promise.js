// Promise Object

const flag = true;

// const p = new Promise((resolve, reject) => {
//   if (flag) {
//     resolve({ msg: 'Successfully Rsolved' });
//   } else {
//     reject(new Error('Failed to resolve'));
//   }
// });
// console.log(p);


// const asyncPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (flag) {
//       resolve({ name: 'B49WEENG', date: '2023-09-03' });
//     } else {
//       reject(new Error('Sorry Unable to resolve'))
//     }
//   }, 10000)
// });

// console.log(asyncPromise);


// House Construction

// search for a land ---> promise
// purchase it --> promise

// design the house --> promise
// start construction --> promise


const landPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flag) {
      resolve({
        location: 'Chennai', area: 'Chrompet', pincode: 600064
      })
    } else {
      reject(new Error('Preferences not available, either overbudget or too remote'));
    }
  }, 10000);
});


// search for land

// then --> what to do after the promise is resolved
// catch --> handle the rejection scenario so that the application would not crash
landPromise
  .then((promiseValue) => {
    // console.log('Promise Resolved', promiseValue);
  })
  .catch((error) => {
    console.log('Promise Failed', error);
  })
  .finally(() => { // cleanup because it will irrespective of fullfilled or rejected promise
    // console.log('Finally Block');
  })


// Chaining & all
const chooseSeat = new Promise((resolve, reject) => {
  setTimeout(() => resolve({
    name: 'SBLT', seat: 'L3', date: '2023-09-04', time: '11:30PM'
  }), 3000);
});

// promise chaining --> returning another promise in the resolvement one promise is called chaining of promises 
// total time taken is the sum of then resolvement times

chooseSeat
  .then((seatInfo) => {
    // console.log(seatInfo);
    // console.log('Initiating the payment transaction');
    const paymentPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve({ msg: 'Payment Successfull', amount: 999 }), 2000);
    });

    return paymentPromise;
  })
  .then((paymentInfo) => { // possible only when the porevious then returns a promise
    // console.log('Payment Successful', paymentInfo);


    // payment is Done, please send email notification to both customer and bus operator
    const sendEmailToCustomer = new Promise((resolve, reject) => {
      setTimeout(() => resolve({ msg: 'Sent the infomation of the booking to customer' }), 1000);
    });

    const sendEmailToBusOperator = new Promise((resolve, reject) => {
      setTimeout(() => resolve({ msg: 'Sent the infomation of the booking to bus operator' }), 1000);
    });


    return Promise.all([sendEmailToCustomer, sendEmailToBusOperator]);
  })
  .then((value) => {
    // console.log(value);
  });



// Promise ALL

const interiorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ msg: 'Done Interior' });
    reject(new Error('Interior People is on leave'));
  }, 3000);
});

const externalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ msg: 'Done Exterior' });
  }, 5000);
})


// promise all --> total time taken is the max time by any of the promises

Promise.all([interiorPromise, externalPromise])
  .then((values) => console.log(values))

// any promise resolvement is enough for the success
Promise.any([interiorPromise, externalPromise])
  .then((values) => console.log(values))






























