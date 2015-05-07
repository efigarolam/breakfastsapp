class Rate < ActiveRecord::Base
  belongs_to :breakfast
  belongs_to :user
end
