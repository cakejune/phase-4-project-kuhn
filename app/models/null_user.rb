class NullUser < User
    def id
      -1
    end
  
    def username
      "Guest"
    end
  
    def created_at
      nil
    end
  
    def updated_at
      nil
    end
  end
