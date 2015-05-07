class VoteSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :positive

  has_one :user, key: :author_id
end
