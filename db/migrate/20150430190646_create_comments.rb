class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :breakfast_id
      t.integer :author_id
      t.text :body

      t.timestamps null: false
    end

    add_index :comments, :breakfast_id
    add_index :comments, :author_id
  end
end
