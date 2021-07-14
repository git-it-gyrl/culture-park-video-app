class Course < ApplicationRecord
    has_many :sections
    has_many :topics, through: :sections
end
