class BreakfastSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :served_at, :picture

  has_many :comments
  has_many :votes
  has_many :rates
end
