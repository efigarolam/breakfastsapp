class BreakfastSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :description, :served_at

  has_many :comments
  has_many :votes
end
