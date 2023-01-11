class CreateChatChannels < ActiveRecord::Migration[6.1]
  def change
    create_table :chat_channels do |t|
      t.string :content
      t.integer :user_id
      t.string :username

      t.timestamps
    end
  end
end
