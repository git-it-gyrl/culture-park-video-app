class CreateTopics < ActiveRecord::Migration[6.1]
  def change
    create_table :topics do |t|
      t.string :title
      t.string :description
      t.string :url
      t.boolean :active
      t.belongs_to :section, null: false, foreign_key: true
      t.timestamps
    end
  end
end
