class UserInGame < ApplicationRecord
    belongs_to :user
    belongs_to :team
    belongs_to :game
    
end
