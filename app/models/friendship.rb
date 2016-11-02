class Friendship < ApplicationRecord
  STATUS_OPTIONS = ['accepted', 'requested', 'pending']
  validates :user_id, :friend_id, :status, presence: true
  validates_uniqueness_of :user_id, scope: [:friend_id]
  validates_uniqueness_of :friend_id, scope: [:user_id]

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :friend,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :friend_id

  scope :accepted, -> { where(status: :accepted) }
  scope :pending, -> { where(status: :pending) }
  scope :requesting, -> { where(status: :requesting) }

end
