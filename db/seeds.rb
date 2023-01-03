# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Game.create(victor: "Blue")
# Team.create(name: "Blue", points: 14, victory: true)
# Team.create(name: "Red", points: 10, victory: false)
UserInGame.create(user_id: User.first.id, team_id: Team.first.id, game_id: Game.first.id, nickname: "elisa", clue1: "Brie Larson", clue2: "Doorman", clue3: "Terminator")
UserInGame.create(user_id: User.second.id, team_id: Team.second.id, game_id: Game.first.id, nickname: "jake", clue1: "water", clue2: "flower", clue3: "Johnny Carson")
