class SessionsController < ApplicationController
    rescue_from ActiveModel::Serializer, with: :still_wrong_username
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: ["Invalid username or password."]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def render_invalid(invalid)
    render json: {errors: invalid.errors.full_messages}
    end

    def still_wrong_username
    render json: {errors: ["Invalid username or password"]}, status: :unauthorized
    end
end
