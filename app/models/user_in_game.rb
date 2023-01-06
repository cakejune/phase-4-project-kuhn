class UserInGame < ApplicationRecord
    belongs_to :user, class_name: "User", default: -> { NullUser.new }
    belongs_to :team
    belongs_to :game
    
    validates :clue1, presence: true
    validates :clue2, presence: true
    validates :clue3, presence: true
end
