class VoteSerializer < ActiveModel::Serializer
  attributes :id, :positive

  has_one :user, key: :author_id
end
