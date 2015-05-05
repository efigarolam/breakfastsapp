class AddServedAtToBreakfasts < ActiveRecord::Migration
  def change
    add_column :breakfasts, :served_at, :date
  end
end
