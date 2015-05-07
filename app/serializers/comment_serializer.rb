class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :body

  has_one :user, key: :author_id
end
