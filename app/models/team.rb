class Team < ApplicationRecord
    has_many :user_in_games
    has_many :users, through: :user_in_games
    has_one :game
    
    validates :name, presence: true

    def clues
        clues_array = []
    self.user_in_games.each do |player|
    clues_array << player.clue1
    clues_array << player.clue2
    clues_array << player.clue3
    end
    return clues_array
    end
end
