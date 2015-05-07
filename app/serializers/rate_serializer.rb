class RateSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :value

  has_one :user
end
