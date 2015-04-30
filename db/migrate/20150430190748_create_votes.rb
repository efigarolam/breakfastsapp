class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :breakfast_id
      t.integer :author_id
      t.boolean :positive

      t.timestamps null: false
    end

    add_index :votes, :breakfast_id
    add_index :votes, :author_id
  end
end
