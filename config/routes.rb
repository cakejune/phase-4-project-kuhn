Rails.application.routes.draw do
  
  resources :user_in_games
  resources :games
  # resources :teams
  get '/teams/:id', to: "teams#show"
  get '/teams', to: "teams#index"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
