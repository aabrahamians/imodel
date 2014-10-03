class AddDefaultValueToFeature < ActiveRecord::Migration
  def change
    change_column :posts, :feature, :boolean, :default => false
  end
end
