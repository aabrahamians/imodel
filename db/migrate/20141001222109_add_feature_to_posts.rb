class AddFeatureToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :feature, :boolean
  end
end
