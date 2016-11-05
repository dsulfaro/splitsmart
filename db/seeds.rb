# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({username: "guest", password: "password"}) # 1
User.create!({username: "dan", password: '123456'})     # 2
User.create!({username: "nick", password: '123456'})    # 3
User.create!({username: "natalie", password: "123456"}) # 4
User.create!({username: "frank", password: "123456"})   # 5

# Dan and Nick are friends
Friendship.create!({user_id: 2, friend_id: 3, status: 'accepted'})
Friendship.create!({user_id: 3, friend_id: 2, status: 'accepted'})

# Dan sends request to Frank
Friendship.create!({user_id: 2, friend_id: 5, status: 'requesting'})
Friendship.create!({user_id: 5, friend_id: 2, status: 'pending'})

# Natalie sends request to Dan
Friendship.create!({user_id: 4, friend_id: 2, status: "requesting"})
Friendship.create!({user_id: 2, friend_id: 4, status: "pending"})

# Nick sends a friend request to Natalie
Friendship.create!({user_id: 3, friend_id: 4, status: "requesting"})
Friendship.create!({user_id: 4, friend_id: 3, status: "pending"})

# Natalie and Frank are friends
Friendship.create!({user_id: 4, friend_id: 5, status: "accepted"})
Friendship.create!({user_id: 5, friend_id: 4, status: "accepted"})

# Dan owes Nick $5
Expense.create!({lender_id: 3,
                ower_id: 2,
                amount: 5.00,
                total: 10.00,
                description: "oreos",
                settled: false });

# Nick owes Dan $2
Expense.create!({lender_id: 2,
                ower_id: 3,
                amount: 2.00,
                total: 5.00,
                description: "uber",
                settled: false });

# Dan paid Nick $3.50
Expense.create!({lender_id: 3,
                ower_id: 2,
                amount: 3.50,
                total: 7.00,
                description: "pizza",
                settled: true });

Expense.create!({lender_id: 3,
                ower_id: 2,
                amount: 10.01,
                total: 22.00,
                description: "electricity",
                settled: false });
