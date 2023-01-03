class Game < ApplicationRecord
    has_many :user_in_games
    has_many :users, through: :user_in_games
    has_many :teams, through: :user_in_games
    
end
