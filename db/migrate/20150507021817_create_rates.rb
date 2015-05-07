class CreateRates < ActiveRecord::Migration
  def change
    create_table :rates do |t|
      t.integer :value
      t.integer :breakfast_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
