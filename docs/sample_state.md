```js
{
  currentUser: {
    id: 1,
    username: "appacademy"
  },
  forms: {
    signUp: {errors: []},
    login: {errors: []},
    addExpense: {errors: []}
    inviteFriend: {errors: ["Email can't be blank"]}
  },
  expenses: {
    1: {
      description: "Water bill",
      date: "10-01-2016",
      lender: "alice",
      ower: "bob",
      amount: 20
    },
    2: {
      description: "Dinner",
      date: "10-31-2016",
      lender: "bob",
      ower: "alice",
      amount: 14
    }
  },
  friends : {
    2: {
      id: 2,
      username: "alice"
    },
    3: {
      id: 3,
      username: "bob"
    }
  },

  // non-friends
  users : {
    4: {
      id: 4,
      username: "charlie"
    },
    5; {
      id: 5,
      username: "danielle"
    }
  }
}
```
