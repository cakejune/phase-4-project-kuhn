class UserCreatedGameSerializer < ActiveModel::Serializer
  attributes :id, :active
  has_many :teams, serializer: TeamNestedUserCreatedGameSerializer

  def teams
    object.teams.uniq
  end
end
