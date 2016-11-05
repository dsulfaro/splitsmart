class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.integer :lender_id, null: false
      t.integer :ower_id, null: false
      t.float :amount, null: false
      t.float :total, null: false
      t.text :description, null: false
      t.boolean :settled, null: false

      t.timestamps
    end
  end
end
