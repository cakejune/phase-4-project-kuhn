Rails.application.routes.draw do
  
  resources :chat_channels
  # resources :user_in_games
  get '/players/:id', to: "user_in_games#show"
  get '/players', to: "user_in_games#index"
  post '/addplayer', to: "user_in_games#create"
  post '/games/', to: "games#create"
  get '/games/:id', to: "games#show"
  get '/games/', to: "games#index"
  post '/newgame', to: "games#user_new_game"
  
  # resources :teams
  get '/teams/:id', to: "teams#show"
  get '/teams', to: "teams#index"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  get '/messages', to: ""
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
