class GamesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_data
    
def create 
        Game.create!(victor: nil, active: false)
    end

    def index
        games = Game.all
        render json: games
    end

    def show 
        game = Game.find_by(id: params[:id])
        render json: game, serializer: UserCreatedGameSerializer
    end
    def user_new_game
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            # Check if the user has any active games
            active_games = user.games.where(active: true)
            if !active_games.exists?
                # If the user doesn't have any active games, create a new game
                new_game = Game.create!(victor: nil, active: true)
                user_team = Team.create!(name: params[:u][:team_name], points: 0, victory: false)
                guest_team = Team.create!(name: params[:g][:team_name], points: 0, victory: false)
                new_logged_in_user_in_game = UserInGame.create!(user_id: session[:user_id], 
                    team_id: user_team.id, game_id: new_game.id, 
                    nickname: params[:u][:nickname], clue1: params[:u][:clue1], 
                    clue2: params[:u][:clue2], clue3: params[:u][:clue3])
                new_guest_user_in_game = UserInGame.create!(user_id: -1, 
                    team_id: guest_team.id, game_id: new_game.id,
                    nickname: params[:g][:nickname], clue1: params[:g][:clue1],
                    clue2: params[:g][:clue2], clue3: params[:g][:clue3])
                render json: new_game, serializer: UserCreatedGameSerializer
            else
                render json: {error: "You are already in an active game."}, status: :bad_request
            end
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

    private
    def invalid_data invalid
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end