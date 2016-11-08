# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({username: "guest", password: "password"}) # 1
User.create!({username: "darth_vader", password: '123456'}) # 2
User.create!({username: "joker_haha", password: '123456'}) # 3
User.create!({username: "hannibal_lecter", password: "123456"}) # 4
User.create!({username: "v0ldem0rt", password: "123456"}) # 5
User.create!({username: "agent_smith", password: "123456"}) # 6
User.create!({username: "norman_bates", password: "123456"}) # 7
User.create!({username: "lex_luthor", password: "123456"}) # 8
User.create!({username: "count_olaf", password: "123456"}) # 9
User.create!({username: "pennywise", password: "123456"}) # 10
User.create!({username: "magneto", password: "123456"}) # 11
User.create!({username: "ursula", password: "123456"}) # 12
User.create!({username: "the_first", password: "123456"}) # 13
User.create!({username: "t_1000", password: "123456"}) # 14


# guest is friends with the first 5 people
Friendship.create!({user_id: 1, friend_id: 2, status: 'accepted'})
Friendship.create!({user_id: 2, friend_id: 1, status: 'accepted'})

Friendship.create!({user_id: 1, friend_id: 3, status: 'accepted'})
Friendship.create!({user_id: 3, friend_id: 1, status: 'accepted'})

Friendship.create!({user_id: 1, friend_id: 4, status: 'accepted'})
Friendship.create!({user_id: 4, friend_id: 1, status: 'accepted'})

Friendship.create!({user_id: 1, friend_id: 5, status: 'accepted'})
Friendship.create!({user_id: 5, friend_id: 1, status: 'accepted'})

Friendship.create!({user_id: 1, friend_id: 6, status: 'accepted'})
Friendship.create!({user_id: 6, friend_id: 1, status: 'accepted'})

###

Friendship.create!({user_id: 1, friend_id: 7, status: 'requesting'})
Friendship.create!({user_id: 7, friend_id: 1, status: 'pending'})

Friendship.create!({user_id: 8, friend_id: 1, status: 'requesting'})
Friendship.create!({user_id: 1, friend_id: 8, status: 'pending'})

Friendship.create!({user_id: 9, friend_id: 1, status: 'requesting'})
Friendship.create!({user_id: 1, friend_id: 9, status: 'pending'})

Friendship.create!({user_id: 10, friend_id: 1, status: 'requesting'})
Friendship.create!({user_id: 1, friend_id: 10, status: 'pending'})

Friendship.create!({user_id: 11, friend_id: 1, status: 'requesting'})
Friendship.create!({user_id: 1, friend_id: 11, status: 'pending'})

Expense.create!({lender_id: 2,
                ower_id: 1,
                amount: 5.00,
                total: 10.00,
                description: "lightsabor decals",
                settled: false });

Expense.create!({lender_id: 2,
                ower_id: 1,
                amount: 15.00,
                total: 30.00,
                description: "deathstar slumber party",
                settled: false });

Expense.create!({lender_id: 2,
                ower_id: 1,
                amount: 2.00,
                total: 4.00,
                description: "uber",
                settled: false });

Expense.create!({lender_id: 1,
                ower_id: 3,
                amount: 8.75,
                total: 10.00,
                description: "laughing gas",
                settled: false });

Expense.create!({lender_id: 1,
                ower_id: 3,
                amount: 3.00,
                total: 6.00,
                description: "clown makeup",
                settled: false });

Expense.create!({lender_id: 4,
                ower_id: 1,
                amount: 11.00,
                total: 22.99,
                description: "dinner",
                settled: false });




# Comment.create!({author_id: 4,
#                  expense_id: 5,
#                  body: "they were fabtastic!"})
#
# Comment.create!({author_id: 2,
#                  expense_id: 5,
#                  body: "so chocolate; much nut"})
