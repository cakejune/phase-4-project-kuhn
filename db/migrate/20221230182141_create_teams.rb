class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :points
      t.boolean :victory

      t.timestamps
    end
  end
end
