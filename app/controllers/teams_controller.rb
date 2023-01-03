class TeamsController < ApplicationController

    def index
    teams = Team.all
    render json: teams
    end

    def show
    team = Team.find_by(id: params[:id])
    render json: team
    end

    def create
    new_team = Team.create!(team_params)
    end

    private
    
    def team_params
    params.permit(:name)
    end
end
