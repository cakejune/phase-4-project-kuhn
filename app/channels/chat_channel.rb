class ChatChannel < ApplicationCable::Channel
belongs_to :user
def subscribed
    #stream_from "some_channel"
end

def unsubscribed
    #any cleanup needed when channel is unsubscribed
end
def receive(data)
    ActionCable.server.broadcast("chat_channel", data)
  end


end
