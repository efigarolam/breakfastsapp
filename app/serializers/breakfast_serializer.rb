class BreakfastSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :description

  has_many :comments
  has_many :votes
end
