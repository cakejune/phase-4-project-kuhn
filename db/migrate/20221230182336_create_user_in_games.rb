class CreateUserInGames < ActiveRecord::Migration[6.1]
  def change
    create_table :user_in_games do |t|
      t.integer :user_id
      t.integer :team_id
      t.integer :game_id
      t.string :nickname

      t.timestamps
    end
  end
end
