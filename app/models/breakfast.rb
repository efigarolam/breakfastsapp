class Breakfast < ActiveRecord::Base
  has_many :comments
  has_many :votes
  has_many :rates
end
