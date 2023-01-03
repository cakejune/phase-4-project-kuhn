class User < ApplicationRecord
    has_secure_password
    has_many :user_in_games
    has_many :teams, through: :user_in_games
    has_many :games, through: :user_in_games
    

    validates :username, presence: true, uniqueness: true
end
