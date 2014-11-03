class WelcomePageController < ApplicationController

	def index
	    @background = Post.all.where(feature: true)
	end

end
