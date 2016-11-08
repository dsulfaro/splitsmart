class Expense < ApplicationRecord
  validates :lender_id, presence: true
  validates :ower_id, presence: true
  validates :amount, presence: true
  validates :total, presence: true
  validates :description, presence: true

  belongs_to :lender,
    class_name: "User",
    primary_key: :id,
    foreign_key: :lender_id

  belongs_to :ower,
    class_name: "User",
    primary_key: :id,
    foreign_key: :ower_id

  has_many :comments,
    inverse_of: :expense,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :expense_id

  scope :unsettled, -> {where(settled: false)}
  scope :settled, -> {where(settled: true)}

end
