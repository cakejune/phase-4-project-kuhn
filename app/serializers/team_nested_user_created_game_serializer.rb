class TeamNestedUserCreatedGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :points, :members, :clues, :victory

  def members
    team_members = []
    self.object.user_in_games.each do |game_user|
      game_user_object = {} 
      team_members << {
        username: game_user.user.present? ? game_user.user.username : "Guest",
        nickname: game_user.nickname
    }
  end
  return team_members
end

def clues
  team_clues_array = []
  self.object.user_in_games.each do |player| 
    team_clues_array << player.clue1
    team_clues_array << player.clue2
    team_clues_array << player.clue3
  end
  return team_clues_array
end

end
