class Comment < ApplicationRecord
  validates :author_id, :expense_id, :body, presence: true

  belongs_to :user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :expense,
    inverse_of: :comments,
    class_name: "Expense",
    primary_key: :id,
    foreign_key: :expense_id

end
