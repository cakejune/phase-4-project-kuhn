class ChatChannelSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :username
end
