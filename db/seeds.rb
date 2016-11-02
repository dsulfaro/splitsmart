# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({username: "guest", password: "password"})
User.create!({username: "dan", password: '123456'})
User.create!({username: "nick", password: '123456'})
User.create!({username: "natalie", password: "123456"})

# Dan and Nick are friends
Friendship.create!({user_id: 2, friend_id: 3, status: 'accepted'})
Friendship.create!({user_id: 3, friend_id: 2, status: 'accepted'})

# Nick sends a friend request to natalie
Friendship.create!({user_id: 3, friend_id: 4, status: "pending"})
Friendship.create!({user_id: 4, friend_id: 3, status: "requesting"})
