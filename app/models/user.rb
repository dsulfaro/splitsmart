class User < ActiveRecord::Base
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :friendships,
    class_name: "Friendship",
    primary_key: :id,
    foreign_key: :user_id,
    dependent: :destroy

  has_many :friends,
    -> { Friendship.accepted },
    through: :friendships

  has_many :pending,
    -> { Friendship.pending },
    through: :friendships,
    source: :friend

  has_many :requesting,
    -> { Friendship.requesting },
    through: :friendships,
    source: :friend

  # self is owed money
  has_many :still_owed,
    -> { Expense.unsettled },
    class_name: "Expense",
    primary_key: :id,
    foreign_key: :lender_id

  # self owes another user
  has_many :still_owes,
    -> { Expense.unsettled },
    class_name: "Expense",
    primary_key: :id,
    foreign_key: :ower_id

  # other users paid self these expenses
  has_many :settled_loans,
    -> { Expense.settled },
    class_name: "Expense",
    primary_key: :id,
    foreign_key: :lender_id

  # self paid other users these expenses
  has_many :settled_payments,
    -> { Expense.settled },
    class_name: "Expense",
    primary_key: :id,
    foreign_key: :ower_id

  has_many :comments,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :author_id

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def balance
    self.still_owed.sum(:amount) - self.still_owes.sum(:amount)
  end

  def all_unsettled_expenses
    Expense.includes(:lender, :ower, :comments)
           .where("lender_id = #{self.id} OR ower_id = #{self.id}")
           .where("settled = false")
  end

  def owes_friend(friend_id)
    Expense.includes(:lender, :ower)
           .where("lender_id = #{friend_id}")
           .where("ower_id = #{self.id}")
           .where("settled = false")
  end

  def friend_owes(friend_id)
    Expense.includes(:lender, :ower)
           .where("lender_id = #{self.id}")
           .where("ower_id = #{friend_id}")
           .where("settled = false")
  end

  def all_expenses(friend_id)
    Expense.includes(:lender, :ower)
           .where("lender_id = #{self.id} AND ower_id = #{friend_id} AND settled = false")
           .or(Expense.where("lender_id = #{friend_id} AND ower_id = #{self.id} AND settled = false"))
           .order(:created_at)
  end

  def friend_settled(friend_id)
    Expense.includes(:lender, :ower)
           .where("lender_id = #{friend_id}")
           .where("ower_id = #{self.id}")
           .where("settled = true") + Expense.includes(:lender, :ower)
          .where("lender_id = #{self.id}")
          .where("ower_id = #{friend_id}")
          .where("settled = true")
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
