class UserInGameSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :user, :nickname, :team, :clues

  def user
    if self.object.user
    return self.object.user.username
    else
      return "Guest"
    end
  end

  def team
  return Team.find(self.object.team_id).name
  end

  def clues
  clues_array = []
  clues_array << self.object.clue1
  clues_array << self.object.clue2
  clues_array << self.object.clue3
  return clues_array
  end
end
