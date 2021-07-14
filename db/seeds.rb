# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: "Workplace Diversity", description: "DEI in the Workplace")

section = Section.create(title: "Video 1", course: course)

Topic.create([
	{id: 1, title:'What is Diversity Equity Inclusion', description: 'Diversity', url: 'https://www.youtube.com/watch?v=GPPLbsEazNc', section: section},
    {id: 2, title:'DEI in the Workplace', description: 'DEI',url: 'https://www.youtube.com/watch?v=0ECHLl0hkec', section: section},
    {id: 3, title:'LGBTQ Inclusion at Work', description: 'LGBTQ Allies in the Workplace', url: 'https://www.youtube.com/watch?v=cyH59oD57hQ', section: section},
    {id: 4, title:'Cultivating a Culture of Inclusion', description: 'Inclusion', url: 'https://www.youtube.com/watch?v=-JJ58kKBi7k', section: section},
])