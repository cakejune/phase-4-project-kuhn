class GameSerializer < ActiveModel::Serializer
  attributes :id, :victor, :active

  has_many :teams
end
