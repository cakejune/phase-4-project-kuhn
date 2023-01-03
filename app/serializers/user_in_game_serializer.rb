class UserInGameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :team_id, :game_id, :nickname, :clue1, :clue2, :clue3
end
