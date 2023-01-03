class Team < ApplicationRecord
    has_many :user_in_games
    has_many :users, through: :user_in_games
    has_one :game
    
end
