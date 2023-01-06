class UserInGamesController < ApplicationController


    def index
        players = UserInGame.all 
        render json: players, status: :accepted
    end
def show
user_in_game = UserInGame.find_by(id: params[:id])
render json: user_in_game
end

def create
    new_user_in_game = UserInGame.create!(user_in_game_params)
    new_user_in_game.user_id = params[:user] || -1
    if new_user_in_game.valid? 
        render json: new_user_in_game, status: :created
    else
        render json: {errors: new_user_in_game.errors.full_messages}, status: :unprocessable_entity
    end
end

private

def user_in_game_params
params.permit(:game_id, :nickname, :team_id, :clue1, :clue2, :clue3, :user)
end

end
