class TeamSerializer < ActiveModel::Serializer
  attributes :name, :points, :victory, :current_game_id, :team_clues
  # has_many :user_in_games, Serializer: UserInGamesInTeamsSerializer

  def current_game_id
  self.object.user_in_games.first.game_id
  end

  def team_clues
    team_clues_array = []
    self.object.user_in_games.each do |player| 
      team_clues_array << player.clue1
      team_clues_array << player.clue2
      team_clues_array << player.clue3
    end
    return team_clues_array
  end
end
