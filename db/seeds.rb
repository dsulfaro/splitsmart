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
User.create!({username: "JAFAR", password: "123456"}) # 4
User.create!({username: "v0ldem0rt", password: "123456"}) # 5
User.create!({username: "bowser", password: "123456"}) # 6
User.create!({username: "riddler", password: "123456"}) # 7
User.create!({username: "lex_luthor", password: "123456"}) # 8
User.create!({username: "count_olaf", password: "123456"}) # 9
User.create!({username: "dracula", password: "123456"}) # 10
User.create!({username: "ursula", password: "123456"}) # 11
User.create!({username: "magneto", password: "123456"}) # 12
User.create!({username: "the_first", password: "123456"}) # 13
User.create!({username: "t_1000", password: "123456"}) # 14
User.create!({username: "HquinXOXO", password: "123456"}) # 15
User.create!({username: "loki", password: "123456"}) # 16
User.create!({username: "T-rex", password: "123456"}) # 17
User.create!({username: "medusa", password: "123456"}) # 18
User.create!({username: "babad00k", password: "123456"}) # 19
User.create!({username: "my_inner_demons", password: "123456"}) # 20
User.create!({username: "glory", password: "123456"}) # 21
User.create!({username: "angelus", password: "123456"}) # 22
User.create!({username: "agent_smith", password: "123456"}) # 23
User.create!({username: "ganon", password: "123456"}) # 24
User.create!({username: "gladOs", password: "123456"}) # 25
User.create!({username: "cptnHook", password: "123456"}) # 26
User.create!({username: "cruella", password: "123456"}) # 27
User.create!({username: "hades", password: "123456"}) # 28
User.create!({username: "poison_ivy", password: "123456"}) # 29
User.create!({username: "MALEFICENT", password: "123456"}) # 30
User.create!({username: "TEAM_ROCKET", password: "123456"}) # 31
User.create!({username: "jawSZ", password: "123456"}) # 32
User.create!({username: "dirty_bubble", password: "123456"}) # 33
User.create!({username: "MANRAY", password: "123456"}) # 34
User.create!({username: "ONLY_ZuUl", password: "123456"}) # 35


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
                description: "sweet lightsaber decals",
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
                description: "cross galaxy uber",
                settled: false });

Expense.create!({lender_id: 1,
                ower_id: 2,
                amount: 13.50,
                total: 13.50,
                description: "hot topic tshirt",
                settled: false });

Expense.create!({lender_id: 1,
                ower_id: 2,
                amount: 20.00,
                total: 20.00,
                description: "breating lessons",
                settled: true });

Expense.create!({lender_id: 1,
                ower_id: 2,
                amount: 15.32,
                total: 15.32,
                description: "volcano burn ointment",
                settled: true });

Expense.create!({lender_id: 2,
                ower_id: 1,
                amount: 10.00,
                total: 10.00,
                description: "dark side monthly fee",
                settled: true });

Expense.create!({lender_id: 1,
                ower_id: 2,
                amount: 8.75,
                total: 8.75,
                description: "robot hand oil",
                settled: true });

Expense.create!({lender_id: 3,
                ower_id: 1,
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

Expense.create!({lender_id: 3,
                ower_id: 1,
                amount: 12.00,
                total: 20.00,
                description: "sushirrito",
                settled: false });

Expense.create!({lender_id: 3,
                ower_id: 1,
                amount: 33.00,
                total: 33.00,
                description: "confetti, balloons, dynamite",
                settled: true });

Expense.create!({lender_id: 1,
                ower_id: 3,
                amount: 2.00,
                total: 2.00,
                description: "henchmen",
                settled: true });

Expense.create!({lender_id: 1,
                ower_id: 3,
                amount: 10.00,
                total: 10.00,
                description: "hilarious knives",
                settled: true });


Expense.create!({lender_id: 4,
                ower_id: 1,
                amount: 11.00,
                total: 22.99,
                description: "lamp polish",
                settled: false });

Expense.create!({lender_id: 1,
                ower_id: 5,
                amount: 300.00,
                total: 300.00,
                description: "nose job",
                settled: false });

Expense.create!({lender_id: 5,
                ower_id: 1,
                amount: 50.00,
                total: 100.00,
                description: "LOTZ OF BUTTER BEEEEERRR",
                settled: false });

Expense.create!({lender_id: 1,
                ower_id: 5,
                amount: 100.00,
                total: 200.00,
                description: "comcast bill",
                settled: false });

Expense.create!({lender_id: 5,
                ower_id: 1,
                amount: 10.00,
                total: 10.00,
                description: "dark arts lessons",
                settled: true });

Expense.create!({lender_id: 5,
                ower_id: 1,
                amount: 1.00,
                total: 4.00,
                description: "magic pizza",
                settled: true });
