class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :teams
  has_many :games
end
