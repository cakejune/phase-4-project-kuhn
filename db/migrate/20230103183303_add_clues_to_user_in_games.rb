class AddCluesToUserInGames < ActiveRecord::Migration[6.1]
  def change
    add_column :user_in_games, :clue1, :string
    add_column :user_in_games, :clue2, :string
    add_column :user_in_games, :clue3, :string
  end
end
