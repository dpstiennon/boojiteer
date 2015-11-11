class CreateIncomes < ActiveRecord::Migration
  def change
    create_table :incomes do |t|
      t.string :name
      t.integer :frequency
      t.decimal :amount, precision: 8, scale: 2
      t.belongs_to :budget
      t.integer :sequence
      t.timestamps null: false
    end
  end
end
